import { useEffect, useState } from "react";
import { keys } from "./../contrants/keyboardCharacters";

export default function Keyboard(props) {
  const [test, setTest] = useState(props.keyboardStyling);
  function simulatePress(key) {
    let keyCode = 0;
    if (key == "ENTER") {
      keyCode = 13;
    } else if (key == "\u232b") {
      keyCode = 8;
    } else {
      keyCode = key.charCodeAt(0);
    }
    let keyEvent = new KeyboardEvent("keydown", { keyCode: keyCode, key: key });
    document.body.dispatchEvent(keyEvent);
  }

  useEffect(() => {
    props.event.current = updateKeyboard;
  });

  function updateKeyboard() {
    setKeyBoardKeys(
      keys.map((item, index) => (
        <div key={index} className="m-auto w-fit">
          {item.map((key, keyIndex) => (
            <button
              className={test[key]}
              key={keyIndex}
              onClick={() => simulatePress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))
    );
  }

  useEffect(() => {
    setTest(props.keyboardStyling);
  }, [props.keyboardStyling]);

  const [keyBoardKeys, setKeyBoardKeys] = useState(
    keys.map((item, index) => (
      <div key={index} className="m-auto w-fit">
        {item.map((key, keyIndex) => (
          <button
            className={test[key]}
            key={keyIndex}
            onClick={() => simulatePress(key)}
          >
            {key}
          </button>
        ))}
      </div>
    ))
  );

  return <div>{keyBoardKeys}</div>;
}
