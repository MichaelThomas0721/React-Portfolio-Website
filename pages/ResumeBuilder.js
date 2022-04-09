import { useState, useEffect, useRef } from "react";
import Resume from "./../components/ResumeBuilder/resume";
import Inputs from "./../components/ResumeBuilder/inputs";

export default function ResumeBuilder() {
  const [resumeInfo, setResumeInfo] = useState({});
  const [toggler, setToggler] = useState("");

  function UpdateResume(label, value) {
    resumeInfo[label] = value;
    setToggler(value);
  }

  return (
    <div className="bg-white print:block">
      <h1 className="text-5xl w-full print:hidden text-black text-center m-5">
        Resume Builder
      </h1>
      <div>
        <Inputs UpdateResume={UpdateResume} resumeInfo={resumeInfo}/>
      </div>
      <div>
        <Resume resumeInfo={resumeInfo} toggler={toggler} />
      </div>
      <button className="print:hidden" onClick={globalThis?.print}>
        Generate
      </button>
    </div>
  );
}
