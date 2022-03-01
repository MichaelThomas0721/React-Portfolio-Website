import { useEffect, useState } from "react";

export default function Letter(props) {
  const[letter, setLetter] = useState("");
  const [classString, setClassString] = useState(
    "bg-grey w-20 h-20 rounded text-7xl text-center"
  );

  useEffect(() => {
    setLetter(props.value[props.pos - 1]);
  }, [props.cNotifier]);

  return (
    <div className="px-5">
      <h1 className={classString} id="lettr">
        {letter}
      </h1>
    </div>
  );
}
