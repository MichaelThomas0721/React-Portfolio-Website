import { useEffect, useState } from "react";

export default function Letter(props) {
  const[letter, setLetter] = useState("");
  const [classString, setClassString] = useState(
    "letterNA"
  );

  useEffect(() => {
    setLetter(props.value[props.pos - 1]);
  }, [props.cNotifier]);

  return (
    <div className="px-3">
      <h1 className={classString} id="lettr">
        {letter}
      </h1>
    </div>
  );
}
