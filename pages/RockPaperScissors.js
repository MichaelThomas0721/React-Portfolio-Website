import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function RockPaperScissors() {
  const [aiText, setAiText] = useState("Pick");
  const [userText, setUserText] = useState("");
  const optionsAmount = useRef(3);
  const [options, setOptions] = useState();
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);
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
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  function changeAiText(input) {
    let aiInput = Math.floor(Math.random() * optionsAmount.current);
    let aiMove = (usedEmojis.current.get(String(aiInput)));
    let aiM = "";
    if (aiInput == input) {
      aiM = "Tied"
      setTies(prevTie => prevTie + 1);
    } else if (((aiInput % 2 == 0) == (input % 2 == 0)) == input < aiInput) {
      aiM = "Won";
      setWins(prevWin => prevWin + 1);
    } else {
      aiM = "Lost";
      setLosses(prevLoss => prevLoss + 1);
    }
    setAiText("The Ai Picked " + aiMove);
    setUserText("You picked" + usedEmojis.current.get(String(input)) + " and " + aiM);
  }

  function makeOptions() {
    setOptions(
      Array.from(usedEmojis.current).map(([key, value]) => {
        return (
          <button
            onClick={() => changeAiText(key)}
            className="rpsBtn"
            key={key}
          >
            {value}
          </button>
        );
      })
    );
  }

  function changeOptions(value) {
    if (optionsAmount.current > 3 || value > 0)
      optionsAmount.current = optionsAmount.current + value;

    usedEmojis.current = new Map();
    for (let em in emojis.slice(0, optionsAmount.current)){
      usedEmojis.current.set(em, emojis[em]);
    }
    makeOptions();
  }

  useEffect(() => {
    changeOptions(0);
  }, [])

  return (
    <div>
      <div className="bg-zinc-400 w-fit text-3xl">
        <h1>Wins: {wins} </h1><br/>
        <h1>Losses: {losses}</h1> <br/>
        <h1>Ties: {ties}</h1>
      </div>
      <div className="left-1/2 top-56 -translate-x-1/2 absolute text-7xl">
        <h1>{aiText}</h1><br/>
        <h1>{userText}</h1>
      </div>
      <div className="left-1/2 top-optionsTop -translate-x-1/2 absolute">
        {options}
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
