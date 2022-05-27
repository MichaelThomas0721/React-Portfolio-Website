export default function Resume2() {
  return (
    <div className="bg-slate-100 print:bg-white h-a4Height w-a4Width m-auto">
      <h1 className="font-bold text-3xl pt-5 text-center">Michael Thomas</h1>
      <h2 className="text-center text-lg">Ottawa, Ontario</h2>
      <div className="flex items-center justify-center mt-2">
        <img className="w-4 h-4" src="./Images/phoneicon.png" />
        <p className="flex">&nbsp;(613)-807-9187 |&nbsp;</p>{" "}
        <img className="w-4 h-4" src="./Images/mailicon.png" />
        <p>&nbsp;michaelthomas0721@icloud.com |&nbsp; </p>
        <img className="w-4 h-4" src="./Images/linkedinicon.png" />
        <a href="https://www.linkedin.com/in/mthomas02/">&nbsp;mthomas02 |&nbsp;</a>
        <img className="w-4 h-4" src="./Images/githubicon.png" />
        <a href="https://www.github.com/MichaelThomas0721">&nbsp;michaelthomas0721&nbsp;</a>
      </div>

      <div className="mx-10 mt-2">
        <h2 className="resume-category">Summary</h2>
        <div className="resume-line" />
        <p className="text-sm">
          I am seeking a position where I can further develop my skills in this
          highly sought-after industry. I have a portfolio of projects that I
          have created that can be viewed on my GitHub at
          https://github.com/MichaelThomas0721. Additionally, I have personally
          designed, developed, and deployed a website using Vercel&apos;s edge
          network. You can view it along with the source code at
          http://michaelthomastech.ca/. I am very eager to learn new and
          exciting tools, processes, and best practices in use in today&apos;s
          fast-paced and changing market. I bring youthful exuberance, a creative and collaborative approach,
          and a willingness to learn to your organization. My
          education, creative personality, and eagerness to learn would
          make me a valuable asset to your team.
        </p>

        <h2 className="resume-category">Projects</h2>
        <div className="resume-line" />
        <h3 className="">
          <b className="font-semibold">Wacky Words</b> | React.js, Next.js,
          TailwindCSS, Javascript
        </h3>
        <ul className="resume-list">
          <li>
            Wordle type app where you have 30 seconds to guess the word with
            letter feedback
          </li>
          <li>
            Optimized and improved Javascript code quality to reduce load times by 75%
            resulting in under 0.4s load time
          </li>
          <li>
            Removed unnecessary Javascript and CSS for better performance
            (98/100 Lighthouse score)
          </li>
          <li>
            Adapted for mobile use by using TailwindCSS to create a responsive
            design
          </li>
        </ul>

        <h2 className="resume-category">Education</h2>
        <div className="resume-line" />
        <h3 className="">
          <b className="font-semibold">Computer Programmer Diploma</b> |
          Algonquin College
        </h3>
        <p className="text-sm text-zinc-500">January 2021 - April 2022</p>
        <ul className="resume-list">
          <li>Two year program preparing students for software development</li>
          <li>
            Focused on object oriented programming, web development, database
            design and database administration
          </li>
          <li>Achieved Dean&apos;s List Semester 1 to Graduation</li>
          <li> Graduated with a 3.9 GPA</li>
        </ul>
        <h3 className="">
          <b className="font-semibold">High School Diploma</b> | St.Mark High
          School
        </h3>
        <p className="text-sm text-zinc-500">September 2014 - June 2020</p>
        <ul className="resume-list">
          <li>
            Ontario Scholar Award, Honour Certificates for 80% plus average for
            grades 9-12
          </li>
          <li>
            Top grade for Computer Science grade 11-12, top grade for
            communication technologies grade 12
          </li>
        </ul>

        <h2 className="resume-category">Experience</h2>
        <div className="resume-line" />
        <h3 className="">
          <b className="font-semibold">Labourer</b> | Sapacon Drywall Limited
        </h3>
        <p className="text-sm text-zinc-500">
          July - August 2019, June - August 2020, May - August 2021
        </p>
        <p>
          Duties included: Site maintenance and cleaning, applying fire
          caulking, moving materials through-out the job site, and other duties
          as required to support the framers, boarders, and tapers
        </p>
        <h3 className="">
          <b className="font-semibold">Backshop Staff</b> | Carleton Golf and
          Yacht Club
        </h3>
        <p className="text-sm text-zinc-500">May 2017 - June 2020</p>
        <p>
          Duties included: Cleaning golf clubs, golf carts, and golf balls,
          drove tractor for collecting driving range balls, fixed broken push
          carts, and other duties as required to assist with the golf club
          operations.
        </p>

        <h2 className="resume-category">Skills</h2>
        <div className="resume-line" />
        <p>
          <b className="font-semibold">Languages: </b> Java, JavaScript, TypeScript, Python,
          C#, C++, COBOL, PHP
        </p>
        <p>
          <b className="font-semibold">Web Technologies: </b> React.js, Next.js, HTML/CSS,
          TailwindCSS, Node.js, GraphQL, AWS, Strapi
        </p>
        <p>
          <b className="font-semibold">Database Technologies</b> OracleDB, SQL Server, MySQL, MongoDB, SQL, NoSQL
        </p>
        <p>
          <b className="font-semibold">Technologies: </b> Spring boot, REST,
          Apache, NGINX, Linux, Android, Docker
        </p>
      </div>
    </div>
  );
}
