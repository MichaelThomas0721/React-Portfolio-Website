import { useEffect, useState } from "react";

export default function InactiveLetter(props) {
    const values = props.value;
    const [classString, setClassString] = useState(
        "letterNA"
      );

  return (
    <div className="px-3">
      <h1 className={classString} id="lettr">
        {values[props.pos]}
      </h1>
    </div>
  );
}
