import Project from "./project";

export default function Resume(props) {

  let color = '#fff';

  let tag = `m-3 mt-10 mb-0 font-bold text-3xl text-center text-[${color}]`;

  return (
    <div className="bg-slate-100 h-a4Height aspect-a4 m-auto flex flex-wrap">
      <div id="leftbar" className="bg-cyan-800 w-72">
        <h1 className={tag}>{props.resumeInfo.Name}</h1>
        <h2 className="text-lg text-center">{props.resumeInfo.Occupation}</h2>
        
        <h3 className="mt-6 p-2 w-full bg-cyan-900 text-white text-2xl font-bold">Contact</h3>

        <p className="ml-5 mt-5 text-white text-xl font-semibold">Address</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal">{props.resumeInfo.Address}</p>
        
        <p className="ml-5 mt-5 text-white text-xl font-semibold">Phone</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal">{props.resumeInfo.Phone}</p>

        <p className="ml-5 mt-5 text-white text-xl font-semibold">E-mail</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal">{props.resumeInfo.Email}</p>

        <h3 className="mt-6 p-2 w-full bg-cyan-900 text-white text-2xl font-bold">Skills</h3>
        <p className="ml-5 mt-5 text-white text-xl font-semibold">Languages</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal">{props.resumeInfo.Languages}</p>
        
        <p className="ml-5 mt-5 text-white text-xl font-semibold">Web</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal">{props.resumeInfo.Web}</p>

        <p className="ml-5 mt-5 text-white text-xl font-semibold">Technologies</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal">{props.resumeInfo.Technologies}</p>
      </div>
      <div id="resume print:block" className="flex-grow">
        <h1 className="text-center text-xl">Projects</h1>
        <Project />


      </div>
    </div>
  );
}
