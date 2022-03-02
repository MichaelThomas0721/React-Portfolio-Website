import React, { useEffect, useState, useRef } from "react";
import LetterHolder from "./../components/LetterHolder";
import InactiveLetterHolder from "./../components/InactiveLetterHolder";
import { wordList } from "./../contrants/wordBank";
import { things } from "./../contrants/answers";

export default function WackyWords() {
  const answer = useRef(
    things[
      Math.floor(
        Math.ceil(new Date().getTime() - new Date("02/27/2022").getTime()) /
          (1000 * 3600 * 24)
      )
    ]
  );
  const [userInput, setUserInput] = useState([]);
  const data = useRef([]);
  const [oldWords, setOldWords] = useState();
  const completed = useRef(false);
  const [gameWin, setGameWin] = useState("lost");
  const defaultTime = 90000;
  const endTime = useRef(0);
  const [time, setTime] = useState(defaultTime);
  const [timerOn, setTimerOn] = useState(false);
  const answerEmojis = useRef("");
  const childFunc = useRef(null);

  function generateEmojis() {
    let emojis = "Wacky Words ";
    if (endTime.current > 0)
      emojis = emojis.concat(
        ("0" + Math.floor((endTime.current / 1000) % 100)).slice(-2) + ":",
        ("0" + ((endTime.current / 10 - 1) % 100)).slice(-2),
        "/90.00\n\n"
      );
    else emojis = emojis.concat("X/90.00 \n");
    for (let i = 0; i < data.current.length; i++) {
      let word = data.current[i];
      let layer = "";
      for (let j = 0; j < word.corrects.length; j++) {
        let lett = word.corrects[j];
        if (lett == 0) {
          layer = layer.concat("🟩");
        } else if (lett == 1) {
          layer = layer.concat("🟨");
        } else layer = layer.concat("⬛");
      }
      emojis = emojis.concat(layer);
      if (i != data.current.length - 1) emojis = emojis.concat("\n");
    }
    console.log(emojis);
    answerEmojis.current = emojis;

    navigator.clipboard.writeText(emojis);
  }

  function changeWord() {
    let randChar = String.fromCharCode(
      Math.floor(Math.random() * 26) + 65
    ).toLowerCase();
    let randWord = Math.floor(Math.random() * wordList[randChar].length);
    answer.current = wordList[randChar][randWord].toUpperCase();
  }

  function newGame() {
    var btn = document.getElementById("generateWord");
    var popUp = document.getElementById("popUp");
    popUp.classList.add("invisible");
    btn.classList.add("invisible");
    changeWord();
    while (userInput.length) {
      let temp = userInput;
      temp.pop();
      setUserInput(temp);
    }
    childFunc.current();
    completed.current = false;
    setGameWin("lost");
    setTime(defaultTime);
    setTimerOn(false);
    setOldWords();
    data.current = [];
  }

  function updateWordAnswer() {
    if (userInput.length == 5) {
      let wordT = userInput.join("").toLowerCase();
      if (!wordList[userInput[0].toLowerCase()].includes(wordT)){
        changeError(true);
      }
      else {
        changeError(false);
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
        if (tracker) {
          changePopUp("Won");
        }
      }
    }
  }

  function changeError(seen) {
    var popup = document.getElementById("notInWordBank");
    if (!seen) {
      popup.classList.add("invisible");
    } else {
      popup.classList.remove("invisible");
      popup.classList.add("animate-fade");
    }
  }

  function changePopUp(wonStatus){
    setTimerOn(false);
    completed.current = true;
    changeError(false);
    setGameWin(wonStatus);
    var popUp = document.getElementById("popUp");
    popUp.classList.remove("invisible");
    var btn = document.getElementById("generateWord");
    btn.classList.remove("invisible");
  }

  useEffect(() => {
    document.body.addEventListener("keydown", function (event) {
      console.log(answer);
      if (completed.current) return;
      if (!timerOn && !completed.current) {
        setTimerOn(true);
        var btn = document.getElementById("generateWord");
        btn.classList.add("invisible");
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

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 10);
        endTime.current = time;
        if (time <= 0) {
          setTimerOn(false);
          setTime(0);
          changePopUp("Lost");
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
        className="fixed flex w-fit p-10 bg-gray-900 text-white rounded-3xl inset-x-44 m-auto z-10 top-72 invisible flex-wrap"
      >
        <h1 className="m-auto text-xl">
          You {gameWin} the Wacky Word of {answer.current}
        </h1>
        <button
          onClick={generateEmojis}
          className="bg-teal rounded p-1 w-fit m-auto basis-full"
        >
          Share?
        </button>
      </div>

      <div
        className="m-auto w-fit h-fit bg-red-500/90 rounded p-3 fixed text-zinc-300 inset-x-44 top-72 invisible"
        id="notInWordBank"
      >
        NOT IN WORD BANK
      </div>
      <div
        onClick={newGame}
        id="generateWord"
        className="m-auto w-fit h-fit p-5 flex fixed inset-x-44 mt-52 rounded-xl bg-teal"
      >
        <h1 className="text-zinc-200 text-xl">Generate New Word?</h1>
      </div>
      <div className="m-auto w-fit p-10 flex fixed inset-x-44">
        <h1 className="text-zinc-200 text-9xl">
          {("0" + Math.floor((time / 1000) % 100)).slice(-2) + ":"}
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
