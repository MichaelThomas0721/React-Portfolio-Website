export default function Resume2() {
  return (
    <div className="bg-slate-100 print:bg-white h-a4Height w-a4Width m-auto">
      <h1 className="font-bold text-3xl pt-5 text-center">Michael Thomas</h1>
      <div className="flex items-center justify-center mt-2">
        <img className="w-4 h-4" src="./Images/phoneicon.png" />
        <p className="flex">&nbsp;(613)-807-9187 |&nbsp;</p>{" "}
        <img className="w-4 h-4" src="./Images/mailicon.png" />
        <p>&nbsp;michaelthomas0721@icloud.com |&nbsp; </p>
        <img className="w-4 h-4" src="./Images/linkedinicon.png" />
        <p>&nbsp;mthomas02 |&nbsp;</p>
        <img className="w-4 h-4" src="./Images/githubicon.png" />
        <p>&nbsp;michaelthomas0721&nbsp;</p>
      </div>

      <div className="mx-10 mt-2">
        <h2 className="resume-category">Summary</h2>
        <div className="resume-line" />
        <p className="text-sm">
          I am seeking a position where I can further develop my skills in this
          highly sought-after industry. I have a portfolio of projects that I
          have created that can be viewed on my GitHub at
          https://github.com/MichaelThomas0721. Additionally, I have personally
          designed, developed, and deployed a website using Vercel's edge
          network. You can view it along with the source code at
          http://michaelthomastech.ca/. I am very eager to learn new and
          exciting tools, processes, and best practices in use in today’s
          fast-paced market. I believe that I can bring youthful exuberance, a
          creative approach, and a willingness to learn to a team in your
          organization. My education, my creative personality, and my eagerness
          to learn would make me a valuable asset to your team.
        </p>

        <h2 className="resume-category">Projects</h2>
        <div className="resume-line" />
        <h3 className="">
          <b>Wacky Words</b> | React.js, Next.js, TailwindCSS, Javascript
        </h3>
        <ul className="resume-list">
          <li>
            Wordle type game where you have 30 seconds to guess the word with
            letter feedback
          </li>
          <li>
            Optimized and minimized Javascript to reduce load times by 75%
            resulting in under 0.4s load time
          </li>
          <li>
            Removed unnecessary Javascript and CSS for better performance
            (100/100 Lighthouse score)
          </li>
          <li>
            Adapted for mobile use by using TailwindCSS to create a responsive
            design
          </li>
        </ul>

        <h2 className="resume-category">Education</h2>
        <div className="resume-line" />
        <h3 className="">
          <b>Computer Programmer Diploma</b> | Algonquin College
        </h3>
        <p className="text-sm text-zinc-500">January 2021 - Present</p>
        <ul className="resume-list">
          <li>Two year program preparing students for software development</li>
          <li>
            Focused on object oriented programming, web development, database
            design and database administration
          </li>
          <li>Achieved Dean's List Semester 1 - Present</li>
        </ul>
        <h3 className="">
          <b>High School Diploma</b> | St.Mark High School
        </h3>
        <p className="text-sm text-zinc-500">September 2014 - June 2020</p>
        <ul className="resume-list">
          <li>
            Ontario Scholar Award, Honour Certificates for 80% plus average for
            grades 9-12
          </li>
          <li>
              Top grade for Computer Science grade 11-12, top grade for communication technologies grade 12
          </li>
        </ul>

        <h2 className="resume-category">Experience</h2>
        <div className="resume-line" />
        <h3 className="">
          <b>Labourer</b> | Sapacon Drywall Limited
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
          <b>Backshop Staff</b> | Carleton Golf and Yacht Club
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
          <b>Languages: </b> Java, Javascript, Python, C#, C++, COBOL, PHP, SQL
        </p>
        <p>
          <b>Web: </b> React.js, Next.js, HTML/CSS, TailwindCSS
        </p>
        <p>
          <b>Technologies: </b> Spring boot, REST, Apache, NGINX, OracleDB, SQL
          Server, MySQL, MongoDB, Android
        </p>
      </div>
    </div>
  );
}
