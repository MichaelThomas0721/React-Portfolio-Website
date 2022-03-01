import React, { useEffect, useState, useRef } from "react";
import LetterHolder from "./../components/LetterHolder";
import InactiveLetterHolder from "./../components/InactiveLetterHolder";
import { wordList } from "./../contrants/wordBank";
import { things } from "./../contrants/answers";

export default function WackyWords() {
  const answer = useRef(things[(Math.floor(Math.ceil(new Date().getTime() - new Date('02/27/2022').getTime())/(1000 * 3600 * 24)))]);
  const [userInput, setUserInput] = useState([]);
  const data = useRef([]);
  const [oldWords, setOldWords] = useState();
  const completed = useRef(false);
  const gameWin = useRef("lost");
  const defaultTime = 45000;
  const [time, setTime] = useState(defaultTime);
  const [timerOn, setTimerOn] = useState(false);
  const childFunc = useRef(null);

  function changeWord(){
    let randChar = (String.fromCharCode(Math.floor(Math.random() * 26) + 65)).toLowerCase();
    let randWord = Math.floor(Math.random() * wordList[randChar].length)
    answer.current = (wordList[randChar][randWord]).toUpperCase();
  }

  function newGame(){
    var btn = document.getElementById("generateWord");
    var popUp = document.getElementById("popUp");
    popUp.classList.add('invisible');
    btn.classList.add('invisible');
    changeWord();
    while (userInput.length) {
      let temp = userInput;
      temp.pop();
      setUserInput(temp);
    }
    childFunc.current();
    completed.current = false;
    gameWin.current = 'lost';
    setTime(defaultTime);
    setTimerOn(false);
    setOldWords();
    data.current = [];
  }

  function updateWordAnswer() {
    if (userInput.length == 5) {
      let wordT = userInput.join("").toLowerCase();
      if (wordList[userInput[0].toLowerCase()].includes(wordT)) {
        changeError(true);
        let temp = [];
        let tracker = true;
        for (let lett in userInput) {
          if (userInput[lett].toUpperCase() == answer.current.charAt(lett))
            temp.push(0);
          else if (answer.current.includes(userInput[lett])) {
            temp.push(1);
            tracker = false;
          } else {
            tracker = false;
            temp.push(2);
          }
        }
        if (tracker) {
          setTimerOn(false);
          completed.current = true;
          gameWin.current = "Won";
          var popUp = document.getElementById("popUp");
          popUp.classList.remove('invisible');
          var btn = document.getElementById("generateWord");
          btn.classList.remove('invisible');
        }
        const word = {
          corrects: temp,
          values: [...userInput],
          id: data.current.length,
        };
        data.current.push(word);
        while (userInput.length) {
          let temp = userInput;
          temp.pop();
          setUserInput(temp);
        }
        childFunc.current();
        setOldWords(
          data.current
            .map((words) => {
              return (
                <InactiveLetterHolder
                  corrects={words.corrects}
                  values={words.values}
                  key={words.id}
                />
              );
            })
            .reverse()
        );
      } else {
        changeError(false);
      }
    }
  }

  useEffect(() => {
    document.body.addEventListener("keydown", function (event) {
      if (completed.current) return;
      if (!timerOn && !completed.current){
        setTimerOn(true);
        var btn = document.getElementById("generateWord");
        btn.classList.add('invisible');
      } 
      if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (userInput.length >= 5) return;
        let temp = userInput;
        temp.push(event.key.toUpperCase());
        setUserInput(temp);
        childFunc.current();
      } else if (event.keyCode == 8) {
        let temp = userInput;
        temp.pop();
        setUserInput(temp);
        childFunc.current();
      } else if (event.keyCode == 13) {
        updateWordAnswer();
      }
    });
  }, []);

  function changeError(changeTo) {
    var popup = document.getElementById("notInWordBank");
    if (changeTo) {
      popup.classList.add("invisible");
    } else {
      popup.classList.remove("invisible");
    }
  }

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 10);
        if (time <= 0) {
          setTimerOn(false);
          setTime(0);
          var popUp = document.getElementById("popUp");
          popUp.classList.remove('invisible');
          var btn = document.getElementById("generateWord");
          btn.classList.remove('invisible');
          completed.current = true;
        }
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <div className="bg-darkGrey h-fit min-h-screen m-auto">
      <div
        id="popUp"
        className="fixed w-fit p-10 flex bg-gray-900 text-white rounded-3xl inset-x-44 m-auto z-10 top-72 invisible"
      >
        <h1>You {gameWin.current} todays Wacky Word of {answer.current}</h1>
      </div>
      <div
        className="m-auto w-fit h-fit bg-red-500/90 rounded p-3 fixed text-zinc-300 inset-x-44 top-72 invisible"
        id="notInWordBank"
      >
        NOT IN WORD BANK
      </div>
      <div onClick={newGame} id="generateWord" className="m-auto w-fit h-fit p-5 flex fixed inset-x-44 mt-52 rounded-xl bg-teal">
        <h1 className="text-zinc-200 text-xl">Generate New Word?</h1>
      </div>
      <div className="m-auto w-fit p-10 flex fixed inset-x-44">
        <h1 className="text-zinc-200 text-9xl">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2) + ":"}
        </h1>
        <h1 className="text-zinc-200 text-8xl bottom-0 pt-7">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </h1>
      </div>

      <div className="m-auto w-min pt-80">
        <LetterHolder userWord={userInput} event={childFunc} />
        {oldWords}
      </div>
    </div>
  );
}
