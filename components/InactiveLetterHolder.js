import Letter from "./inactiveLetter";
import React, { useEffect, useState, useRef } from "react";

export default function InactiveLetterHolder(props) {
  const corrects = props.corrects;
  const values = props.values;

  console.log(corrects);
  var letters = [
    <Letter
      corrects={corrects}
      value={values}
      pos={0}
      key={0}
    />,
    <Letter
      corrects={corrects}
      value={values}
      pos={1}
      key={1}
    />,
    <Letter
      corrects={corrects}
      value={values}
      pos={2}
      key={2}
    />,
    <Letter
      corrects={corrects}
      value={values}
      pos={3}
      key={3}
    />,
    <Letter
      corrects={corrects}
      value={values}
      pos={4}
      key={4}
    />,
  ];

  return (
    <div className="flex m-10">
      {letters}
    </div>
  );
}
