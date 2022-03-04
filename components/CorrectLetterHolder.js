import Letter from "./CorrectLetter";
import React, { useEffect, useState, useRef } from "react";

export default function CorrectLetterHolder(props) {
  const values = props.values;

  var letters = [
    <Letter
      value={values}
      pos={0}
      key={0}
    />,
    <Letter
      value={values}
      pos={1}
      key={1}
    />,
    <Letter
      value={values}
      pos={2}
      key={2}
    />,
    <Letter
      value={values}
      pos={3}
      key={3}
    />,
    <Letter
      value={values}
      pos={4}
      key={4}
    />,
  ];

  return (
    <div className="flex m-4">
      {letters}
    </div>
  );
}
