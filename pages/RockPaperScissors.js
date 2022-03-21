import { useState, useEffect, useRef } from "react";
import RpsButton from "./../components/RpsButton";
import RpsInfo from "./../components/RpsInfo";
import dynamic from "next/dynamic";
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export default function RockPaperScissors() {
  const [aiText, setAiText] = useState("Pick");
  const [userText, setUserText] = useState("");
  const optionsAmount = useRef(5);
  const [options, setOptions] = useState();
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);
  const [popUp, setPopUp] = useState();
  const userInput = useRef();
  let emojis = useRef([
    "✊",
    "✋",
    "✌",
    "🖖",
    "🦎",
  ]);
  const usedEmojis = useRef(new Map());
  const [info, setInfo] = useState("");
  const [emojiPicker, setEmojiPicker] = useState();
  const btnChange = useRef();

  function changeAiText() {
    let aiInput = Math.floor(Math.random() * optionsAmount.current);
    let aiMove = usedEmojis.current.get(aiInput);
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
      "You picked" + usedEmojis.current.get(userInput.current) + " and " + aiM
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
            PickEmoji={PickEmoji}
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

    for (let i = 0; i < optionsAmount.current; i++) {
      if (i >= emojis.current.length) {
        emojis.current.push(" ");
      }
      usedEmojis.current.set(i, emojis.current[i]);
    }
    makeOptions();
  }

  function OpenPopUp() {
    setPopUp(<RpsInfo usedEmojis={usedEmojis} ChangePopUp={ClosePopUp} PickEmoji={PickEmoji}/>);
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("everything").classList.add("hidden");
  }

  function ClosePopUp() {
    setPopUp();
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("everything").classList.remove("hidden");
  }

  function PickEmoji(btnId) {
    btnChange.current = btnId;
    const ePicker = document.getElementById("ePicker");
    ePicker.classList.toggle("hidden");
  }

  useEffect(() => {
    changeOptions(0);
  }, []);

  const onEmojiClick = (event, emojiObject) => {
    emojis.current[btnChange.current] = emojiObject.emoji;
    changeOptions(0);
    makeOptions();
    const ePicker = document.getElementById("ePicker");
    ePicker.classList.toggle("hidden");
  };

  return (
    <div>
      <div id="popup">{popUp}</div>
      <div id="everything">
        <div className="bg-zinc-900 w-full text-xl md:text-3xl justify-center flex flex-wrap text-white">
          <h1 className="p-3">Wins: {wins}</h1>
          <h1 className="p-3">Losses: {losses}</h1>
          <h1 className="p-3">Ties: {ties}</h1>
          <button
            className="text-white text-3xl w-fit mr-0 justify-end border-white border-2 px-4 rounded-lg bg-gray-700 hover:bg-gray-800"
            onClick={() => OpenPopUp()}
          >
            Help
          </button>
        </div>
        <div className="">
          <div className="text-3xl text-white mb-2 md:mb-10 text-center md:text-6xl">
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
        <div
          id="ePicker"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden"
        >
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      </div>
    </div>
  );
}
