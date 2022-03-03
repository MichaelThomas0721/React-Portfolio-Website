import { applyProps } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function InactiveLetter(props) {
    const corrects = props.corrects;
    const values = props.value;
    const [classString, setClassString] = useState(
        "letterNA"
      );

      useEffect(() =>{
          if (corrects[props.pos] == 0){
              setClassString("letterGreen")
          } else if (corrects[props.pos] == 1){
            setClassString("letterYellow")
          }
      }, [])

  return (
    <div className="px-3">
      <h1 className={classString} id="lettr">
        {values[props.pos]}
      </h1>
    </div>
  );
}
