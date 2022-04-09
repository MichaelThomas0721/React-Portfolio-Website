import { useState } from "react";
import dynamic from "next/dynamic";
const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false });

export default function RpsButton (props) {
  const [picker, setPicker] = useState(null);

  function test() {
    props.userInput.current = props.num;
    props.changeAiText();
  }

  return (
    <div className="flex flex-wrap flex-col">
      <button onClick={() => test()} className="rpsBtn">
        {props.value}
      </button>
      <button className="p-3 pl-8 pr-8 rounded bg-slate-700 hover:bg-slate-600 w-fit m-auto" onClick={() => props.PickEmoji(props.num)}>
        Edit
      </button>
      <div className="bg-black absolute translate-y-1/2">
              {picker}
      </div>
    </div>
  );
}
