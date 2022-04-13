import Project from "./project";
import Education from "./education";
import Experience from "./experience";
import Reference from "./reference";

export default function Resume(props) {
  let color = "#fff";
  let tag = "m-3 mt-10 mb-0 font-bold text-3xl text-center text-white";

  return (
    <div className="bg-slate-100 print:bg-white h-a4Height w-a4Width m-auto flex">
      <div id="leftbar" className="bg-cyan-800 w-1/2">
        <h1 className={tag}>{props.resumeInfo.Name}</h1>
        <h2 className="text-lg text-center text-zinc-300">{props.resumeInfo.Occupation}</h2>

        <h3 className="mt-6 p-2 w-full bg-cyan-900 text-white text-2xl font-bold">
          Contact
        </h3>

        <p className="ml-5 mt-5 text-white text-xl font-semibold">Location</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal">
          {props.resumeInfo.Location}
        </p>

        <p className="ml-5 mt-5 text-white text-xl font-semibold">Phone</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal">
          {props.resumeInfo.Phone}
        </p>

        <p className="ml-5 mt-5 text-white text-xl font-semibold">E-mail</p>
        <p className="ml-5 mt-1 text-white text-md break-normal">
          {props.resumeInfo.Email}
        </p>

        <h3 className="mt-6 p-2 w-full bg-cyan-900 text-white text-2xl font-bold">
          Skills
        </h3>
        <p className="ml-5 mt-5 text-white text-xl font-semibold">Languages</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal">
          {props.resumeInfo.Languages}
        </p>

        <p className="ml-5 mt-5 text-white text-xl font-semibold">Web</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal">
          {props.resumeInfo.Web}
        </p>

        <p className="ml-5 mt-5 text-white text-xl font-semibold">
          Technologies
        </p>
        <p className="ml-5 mt-1 text-white text-lg break-normal">
          {props.resumeInfo.Technologies}
        </p>

        <h3 className="mt-6 p-2 w-full bg-cyan-900 text-white text-2xl font-bold">
          Links
        </h3>
        <p className="ml-5 mt-5 text-white text-xl font-semibold">Linkedin</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal" href="https://www.linkedin.com/in/michael-thomas-2a0b241b5/">
        https://www.linkedin.com/in/michael-thomas-2a0b241b5/
        </p>
        <p className="ml-5 mt-5 text-white text-xl font-semibold">Portfolio</p>
        <p className="ml-5 mt-1 text-white text-lg break-normal" href="https://www.linkedin.com/in/michael-thomas-2a0b241b5/">
        https://michaelthomastech.ca
        </p>
      </div>
      <div id="resume print:block" className="flex-grow w-full m-3">
        <h1 className="text-center text-xl text-cyan-900 font-bold">Objective</h1>
        <p className="break-normal">
          I am seeking a position where I can further develop my skills in this
          highly sought-after industry. I have a portfolio of projects that I
          have created that can be viewed on my GitHub at
          https://github.com/MichaelThomas0721. Additionally, I have personally
          designed, developed, and deployed a website using Vercel&apos;s edge
          network. You can view it along with the source code at
          http://michaelthomastech.ca/. I am very eager to learn new and
          exciting tools, processes, and best practices in use in today&apos;s
          fast-paced market. I believe that I can bring youthful exuberance, a
          creative approach, and a willingness to learn to a team in your
          organization. My education, my creative personality, and my eagerness
          to learn would make me a valuable asset to your team.
        </p>
        <h1 className="text-center text-xl text-cyan-900 font-bold">Projects</h1>
        <Project
          title="Wacky Words | Personal"
          date="Febuary 2022"
          description="Wacky Words is a wordle type game where you have a time limit to guess the word, there is a new word every day but you can also choose to generate a new random word."
          technologies="React.js, Next.js, TailwindCSS, Javascript"
        />
        <h1 className="text-center text-xl text-cyan-900 font-bold">Education</h1>
        <Education
          program="Computer Programmer Diploma | Algonquin College"
          date="January 2021 - Present"
          description="The two-year Computer Programmer Diploma program prepares students for software development. The 
program teaches object orientated programming, web development, database design and database 
administration."
          awards="Dean's List Semester 1 - Present"
        />
        <Education
          program="High School Diploma | St.Mark High School"
          date="September 2014 - June 2020"
          awards="Ontario Scholar Award, Honour Certificates for 80% plus average for grades 9-12, 85% average in grade 12"
        />
        <h1 className="text-center text-xl text-cyan-900 font-bold">Experience</h1>
        <Experience
          position="Labourer | Sapacon Drywall Limited"
          date="July - August 2019, June - August 2020, May - August 2021"
          description="Duties included: Site maintenance and cleaning, applying fire caulking, moving materials through-out the job 
site, and other duties as required to support the framers, boarders, and tapers"
        />
        <Experience
          position="Backshop Staff | Carleton Golf and Yacht Club"
          date="May 2017 - June 2020"
          description="Duties included: Cleaning golf clubs, golf carts, and golf balls, drove tractor for collecting driving range balls, 
fixed broken push carts, and other duties as required to assist with the golf club operations."
        />
      </div>
    </div>
  );
}
