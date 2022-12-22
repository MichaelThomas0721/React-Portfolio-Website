import { useEffect, useRef, useState } from "react";

export default function LetterShift(props) {
  const [word, setWord] = useState("");
  const letterNum = useRef(0);
  const currWord = useRef("");
  const interval = useRef(null);
  const letterInterval = useRef(0);
  const updateSpeed = props.updateSpeed || 100;
  const discoverSpeed = props.discoverSpeed || 10;

  useEffect(() => {
    interval.current = setInterval(() => {
      UpdateWord();
    }, updateSpeed);
  }, []);

  function UpdateWord() {
    let letters = [];
    for (let i = 0; i < props.word.length - letterNum.current; i++) {
      let letter =
        Math.floor(Math.random() * (Math.floor(91) - Math.ceil(65))) +
        Math.ceil(65);
      letters.push(String.fromCharCode(letter));
    }

    letterInterval.current += 1;
    if (letterInterval.current >= discoverSpeed) {
      letterInterval.current = 0;
      currWord.current += props.word.charAt(letterNum.current);
      letterNum.current += 1;
      letters.pop();
      if (letterNum.current >= props.word.length) {
        clearInterval(interval.current);
        letters = [];
      }
    }
    let tempWord = currWord.current + letters.join("");
    setWord(tempWord);
  }

  function Reset() {
    letterNum.current = 0;
    currWord.current = "";
    setWord("");

    interval.current = setInterval(() => {
      UpdateWord();
    }, updateSpeed);
  }

  return (
    <div className={props.className} onClick={() => Reset()}>
      <tt>{word}</tt>
    </div>
  );
}
