import Letter from "./Letter";
import React, { useEffect, useState, useRef } from "react";

export default function LetterHolder(props) {
    const [cNotifier, setCNotifier] = useState(0);


  useEffect(() => {
      props.event.current = updateWords;
  })

  function updateWords(){
      setCNotifier(cNotifier + 1);
    
  }

  var letters = [
    <Letter
      cNotifier={cNotifier}
      value={props.userWord}
      pos={1}
      key={0}
    />,
    <Letter
      cNotifier={cNotifier}
      value={props.userWord}
      pos={2}
      key={1}
    />,
    <Letter
      cNotifier={cNotifier}
      value={props.userWord}
      pos={3}
      key={2}
    />,
    <Letter
      cNotifier={cNotifier}
      value={props.userWord}
      pos={4}
      key={3}
    />,
    <Letter
      cNotifier={cNotifier}
      value={props.userWord}
      pos={5}
      key={4}
    />,
  ];

  function test() {
    //console.table(props);
  }

  return (
    <div onClick={test} className="flex m-10">
      {letters}
    </div>
  );
}
