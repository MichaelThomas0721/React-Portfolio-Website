import { useState, useEffect} from "react";
import styles from "../styles/typing.module.css";

export function Typing(array) {
  const [displayWord, setDisplayWord] = useState("");
  let wordsState = [
    "Programmer",
    "Developer",
    "Coder",
    "Designer",
    "Builder",
    ];

  const formatCount = ()=> {
    let inIncrement = 0;
    let words = wordsState;
    let currentWord = 0;
    let word = words[0];
    let length = word.length;

    let id = null;
    let typeSpeed = 250; 
    let pauseSpeed = 1000;
    let deleteSpeed = 30;

    clearInterval(id);
    id = setInterval(typeWord, typeSpeed);

    function typeWord() {
      setDisplayWord(word.substring(inIncrement, 0) + "|");
      inIncrement+=1;
      updateWord();
    }

    function updateWord() {
      if (length < inIncrement) {
        clearInterval(id);
        id = setInterval(pauseDelete, pauseSpeed);
      }
    }

    function pauseDelete() {
      clearInterval(id);
      id = setInterval(deleteWord, deleteSpeed);
    }

    function deleteWord() {
      setDisplayWord(word.substring(inIncrement, 0) + "|");
      inIncrement-=1;
      if (inIncrement < 0) {
        changeWord();
      }
    }

    function changeWord() {
      words = wordsState;
      clearInterval(id);
      currentWord+= 1;
      if (currentWord >= words.length) {
        currentWord = 0;
      }
      word = (words[currentWord]);
      length = (word.length);
      inIncrement = 0;
      id = setInterval(typeWord, typeSpeed);
    }
  }

  function addWord(newWord){
    wordsState.push(newWord);
  }

  useEffect(() => {
    formatCount();
  }, []);

  return (
    <div>
      <h1 className={styles.typeWord}>{displayWord}</h1>
    </div>
  );
}
