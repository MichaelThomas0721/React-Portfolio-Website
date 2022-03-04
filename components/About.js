import React, { Component } from "react";
import styles from "../styles/about.module.css";

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.aboutTitle}>About Me</h1>
        <h2 className={styles.aboutParagraph}>
          I am a passionate, hardworking individual who is always looking to
          learn more. <br/>
          I am in my last semester of Computer Programming at Algonquin College <br/>
          <b>Skills:</b>
        </h2>
        <h2 className="text-left w-fit m-auto">
          o	Languages: Java, Javascript, C#, HTML, CSS, C++, Python, COBOL, PHP, SQL <br/>
          o	Frameworks and Libraries: React.js, .NET, libGDX, Next.js, Three.js, Tailwind <br/>
          o	Database Management: OracleDB, SQL Server, MySQL, MongoDB <br/>
          o	Systems: Linux, Windows, Mac OS, Android <br/>
          o	Tools and Architectures: Spring boot, REST, VS Code, Apache, Nginx MS Suite, Google Suite, Adobe Suite, Blender, AutoCAD
        </h2>
      </div>
    </div>
  );
};
