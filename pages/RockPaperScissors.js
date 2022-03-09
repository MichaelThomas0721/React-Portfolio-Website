import { useState } from "react";
import { useRef } from "react";

export default function RockPaperScissors() {
  const [aiText, setAiText] = useState("Pick");
  const [aiMove, setAiMove] = useState();
  const optionsAmount = useRef(3);
  const [options, setOptions] = useState();
  const emojis = [
    "✊",
    "✋",
    "✌",
    "🦎",
    "🖖",
    "🤟",
    "🖐",
    "👌",
    "👉",
    "👍",
    "👎",
  ];
  let usedEmojis = [];
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  function changeAiText(input) {
    let aiInput = Math.floor(Math.random() * optionsAmount.current) + 1;
    setAiMove(usedEmojis.get(String(aiInput)));
    if (aiInput == input) {
      setAiText("Tied");
    } else if (((aiInput % 2 == 0) == (input % 2 == 0)) == input < aiInput) {
      setAiText("Won");
    } else setAiText("Lost");
    console.log(aiInput);
    console.log(usedEmojis.get(String(aiInput)));
    console.log(aiMove);
  }

  function makeOptions() {
    setOptions(
      Array.from(usedEmojis).map(([key, value]) => {
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
    console.table(options);
  }

  function changeOptions(value) {
    if (optionsAmount.current > 3 || value > 0)
      optionsAmount.current = optionsAmount.current + value;

    usedEmojis = new Map();
    for (let em in emojis.slice(0, optionsAmount.current)){
      usedEmojis.set(em, emojis[em]);
    }

    console.log(usedEmojis);
    console.log(Object.keys(usedEmojis));
    makeOptions();
  }

  return (
    <div>
      <div className="left-1/2 top-56 -translate-x-1/2 absolute text-9xl">
        <h1>The Ai Played {aiMove}</h1>
        <h1 >You {aiText}</h1>
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
