import { applyProps } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function InactiveLetter(props) {
    const corrects = props.corrects;
    const values = props.value;
    const [classString, setClassString] = useState(
        "bg-grey w-20 h-20 rounded text-7xl text-center"
      );

      useEffect(() =>{
          if (corrects[props.pos] == 0){
              setClassString("bg-teal w-20 h-20 rounded text-7xl text-center")
          } else if (corrects[props.pos] == 1){
            setClassString("bg-yellow-300 w-20 h-20 rounded text-7xl text-center")
          }
      }, [])

  return (
    <div className="px-5">
      <h1 className={classString} id="lettr">
        {values[props.pos]}
      </h1>
    </div>
  );
}
