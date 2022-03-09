import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import RpsButton from "./../components/RpsButton";

export default function RockPaperScissors() {
  const [aiText, setAiText] = useState("Pick");
  const [userText, setUserText] = useState("");
  const optionsAmount = useRef(3);
  const [options, setOptions] = useState();
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);
  const userInput = useRef();
  const emojis = [
    "✊",
    "✋",
    "✌",
    "🖖",
    "🦎",
    "🤟",
    "🖐",
    "👌",
    "👉",
    "👍",
    "👎",
  ];
  const usedEmojis = useRef(new Map());
  const [info, setInfo] = useState("");

  function changeAiText() {
    let aiInput = Math.floor(Math.random() * optionsAmount.current);
    console.log(aiInput);
    let aiMove = usedEmojis.current.get(String(aiInput));
    let aiM = "";
    if (aiInput == userInput.current) {
      aiM = "Tied";
      setTies((prevTie) => prevTie + 1);
    } else if (
      ((aiInput % 2 == 0) == (userInput.current % 2 == 0)) ==
      userInput.current < aiInput
    ) {
      aiM = "Won";
      setWins((prevWin) => prevWin + 1);
    } else {
      aiM = "Lost";
      setLosses((prevLoss) => prevLoss + 1);
    }
    setAiText("The Ai Picked " + aiMove);
    setUserText(
      "You picked" +
        usedEmojis.current.get(String(userInput.current)) +
        " and " +
        aiM
    );
  }

  function makeOptions() {
    setOptions(
      Array.from(usedEmojis.current).map(([key, value]) => {
        return (
          <RpsButton
            changeAiText={changeAiText}
            value={value}
            userInput={userInput}
            num={key}
            key={key}
          />
        );
      })
    );
  }

  function changeOptions(value) {
    if (optionsAmount.current > 3 || value > 0)
      optionsAmount.current = optionsAmount.current + value;

    usedEmojis.current = new Map();
    for (let em in emojis.slice(0, optionsAmount.current)) {
      usedEmojis.current.set(em, emojis[em]);
    }
    makeOptions();
  }

  function updateInfo(){
    
  }

  useEffect(() => {
    changeOptions(0);
  }, []);

  return (
    <div>
      <div className="bg-zinc-900 w-full text-xl md:text-3xl justify-center flex flex-wrap text-white">
        <h1 className="p-3">Wins: {wins}</h1>
        <h1 className="p-3">Losses: {losses}</h1>
        <h1 className="p-3">Ties: {ties}</h1>
      </div>
      <div className="">
        <div className="text-3xl mb-2 md:mb-10 text-center md:text-6xl">
          <h1>{aiText}</h1>
          <h1>{userText}</h1>
        </div>
        <div className="flex flex-wrap justify-center">{options}</div>
        <div className="w-fit m-auto flex flex-wrap flex-row">
          <h1 onClick={() => changeOptions(-2)} className="pmBtn">
            -
          </h1>
          <h1 onClick={() => changeOptions(2)} className="pmBtn">
            +
          </h1>
        </div>
      </div>
    </div>
  );
}
