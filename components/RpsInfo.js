import { useRef, useState, useEffect } from "react";
import RpsButton from "./RpsButton";

export default function RpsInfo(props) {
  const [infoButtons, setInfoButtons] = useState();
  const [info, setInfo] = useState(new Map());
  const [infoPopUp, setInfoPopUp] = useState();
  const userInput = useRef();

  function createInfo() {
    for (let opt = 0; opt < props.usedEmojis.current.size; opt++) {
      let win = [];
      let loss = [];
      for (let opt2 = 0; opt2 < props.usedEmojis.current.size; opt2++) {
        if (((opt2 % 2 == 0) == (opt % 2 == 0)) == opt < opt2) {
          win.push(opt2);
        } else if (opt == opt2) {
        } else loss.push(opt2);
      }
      let winEm = [];
      let lossEm = [];
      for (let num in win) {
        winEm.push(props.usedEmojis.current.get(String(win[num])));
      }
      for (let num in loss) {
        lossEm.push(props.usedEmojis.current.get(String(loss[num])));
      }
      info.set(opt, [winEm, lossEm]);
    }
    console.table(info);
  }

  function displayInfo() {
    let win = "Wins Against: ";
    let loss = "Losses Against: ";
    console.log(userInput.current);
    console.table(info.get(parseInt(userInput.current)));
    for (let num in info.get(parseInt(userInput.current))[0]) {
      win = win.concat(
        info.get(parseInt(userInput.current))[0][num] + ", "
      );
    }
    win = win.slice(0,-2);
    for (let num in info.get(parseInt(userInput.current))[0]) {
      loss = loss.concat(
        info.get(parseInt(userInput.current))[1][num] + ", "
      );
    }
    loss = loss.slice(0,-2);
    setInfoPopUp(
      <div className="text-center text-4xl">
        <h1>{win}</h1>
        <h1>{loss}</h1>
      </div>
    );
  }

  function createInfoButtons() {
    setInfoButtons(
      Array.from(props.usedEmojis.current).map(([key, value]) => {
        return (
          <RpsButton
            changeAiText={displayInfo}
            value={value}
            userInput={userInput}
            num={key}
            key={key}
          />
        );
      })
    );
  }

  useEffect(() => {
    createInfoButtons();
    createInfo();
  }, [props.usedEmojis.current]);

  return (
    <div className="absolute w-full h-full bg-darkGrey">
      {infoPopUp}
      <div className="flex flex-wrap justify-center">{infoButtons}</div>
      <button className="left-1/2 text-white text-3xl" onClick={props.ChangePopUp}>Close</button>
    </div>
  );
}
