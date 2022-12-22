import { useEffect, useRef, useState } from "react";

export default function LetterShift_Up(props) {
  const [word, setWord] = useState("");
  const letterNum = useRef(0);
  const [letter, setLetter] = useState("");
  const currLetterNum = useRef(0);
  const currWord = useRef("");
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      UpdateWord();
    }, 100);
  }, []);

  function UpdateWord() {
    if (currLetterNum.current == 0) {
      currLetterNum.current = 65;
      setLetter("A");
    } else {
      currLetterNum.current += 1;
      setLetter(String.fromCharCode(currLetterNum.current));
    }
    if (currLetterNum.current == props.word.charCodeAt(letterNum.current)) {
      letterNum.current += 1;
      currWord.current += String.fromCharCode(currLetterNum.current);
      currLetterNum.current = 0;
      setWord(currWord.current);
      setLetter("");
      if (letterNum.current >= props.word.length) {
        console.log(letterNum.current);
        console.log(props.word.length);
        clearInterval(interval.current);
      }
    }
  }

  return (
    <div className="flex flex-row text-6xl text-white">
      <h1>{word}</h1>
      <h1>{letter}</h1>
    </div>
  );
}
