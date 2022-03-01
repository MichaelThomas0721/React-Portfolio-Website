import React, { useEffect, useState, useRef } from "react";
import LetterHolder from "./../components/letterHolder";
import InactiveLetterHolder from "./../components/inactiveLetterHolder";
import { wordList } from "./../contrants/wordBank";
import { things } from "./../contrants/answers";

export default function WackyWords() {
  const [answer, setAnswer] = useState(things[(Math.floor(Math.ceil(new Date().getTime() - new Date('02/27/2022').getTime())/(1000 * 3600 * 24)))]);
  const [userInput, setUserInput] = useState([]);
  const data = useRef([]);
  const [oldWords, setOldWords] = useState();
  const completed = useRef(false);
  const gameWin = useRef("lost");
  const [time, setTime] = useState(15000);
  const [timerOn, setTimerOn] = useState(false);
  const childFunc = useRef(null);

  function updateWordAnswer() {
    console.log(data);
    if (userInput.length == 5) {
      console.log(userInput[0]);
      let wordT = userInput.join("").toLowerCase();
      if (wordList[userInput[0].toLowerCase()].includes(wordT)) {
        changeError(true);
        let temp = [];
        let tracker = true;
        for (let lett in userInput) {
          if (userInput[lett].toUpperCase() == answer.charAt(lett))
            temp.push(0);
          else if (answer.includes(userInput[lett])) {
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
        }
        const word = {
          corrects: temp,
          values: [...userInput],
          id: data.current.length,
        };
        data.current.push(word);
        for (let i = 0; i < 5; i++) {
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
      if (!timerOn) setTimerOn(true);
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
        }
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <div className="bg-darkGrey h-screen m-auto">
      <div
        id="popUp"
        className="fixed w-fit p-10 flex bg-gray-900 text-white rounded-3xl inset-x-44 m-auto z-10 top-72 invisible"
      >
        <h1>You {gameWin.current} todays Wacky Word of {answer}</h1>
      </div>
      <div
        className="m-auto w-fit h-fit bg-red-500/90 rounded p-3 fixed text-zinc-300 inset-x-44 top-72 invisible"
        id="notInWordBank"
      >
        NOT IN WORD BANK
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
