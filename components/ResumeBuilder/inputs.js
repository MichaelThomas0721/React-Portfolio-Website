import {
  CONTACT_METADATA,
  SKILLS_METADATA,
  PROJECT_METADATA,
} from "./../../contrants/input_metadata.js";

export default function Inputs(props) {
  function HandleInput(event) {
    props.UpdateResume(event.target.id, event.target.value);
  }

  function CreateDrawer(name) {
    let drawer = document.getElementById("drawer");
    let newDrawer = document.createElement("div");
    newDrawer.className = "w-52 h-full bg-zinc-900 flex flex-col";
    newDrawer.id = "drawer";
    if (name[0].label == "Title") {
        let pCont = document.createElement("div");
    } else {
      for (let item in name) {
        let lab = document.createElement("label");
        lab.className = "drawer-label";
        lab.textContent = name[item].label;
        let inp = document.createElement("input");
        inp.className = "drawer-input";
        inp.id = name[item].label;
        inp.type = name[item].type;
        if (props.resumeInfo[name[item].label]) {
          inp.value = props.resumeInfo[name[item].label];
        } else {
          inp.value = "";
        }
        inp.addEventListener("keyup", () => HandleInput(event));
        newDrawer.appendChild(lab);
        newDrawer.appendChild(inp);
      }
    }
    drawer.replaceWith(newDrawer);
  }

  return (
    <div className="fixed h-full flex print:hidden">
      <div className="w-10 h-full bg-zinc-800 flex flex-col">
        <button
          className="text-white"
          onClick={() => CreateDrawer(CONTACT_METADATA)}
        >
          CO
        </button>
        <button
          className="text-white"
          onClick={() => CreateDrawer(SKILLS_METADATA)}
        >
          SK
        </button>
        <button
          className="text-white"
          onClick={() => CreateDrawer(PROJECT_METADATA)}
        >
          PR
        </button>
      </div>
      <div id="drawer" className="w-52 h-full bg-zinc-900">
        <h1>Stuff</h1>
      </div>
    </div>
  );
}
