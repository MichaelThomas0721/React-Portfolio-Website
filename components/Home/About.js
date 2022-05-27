import React, { Component } from "react";

import styles from "./../../styles/about.module.css";

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.aboutTitle}>About Me</h1>
        <h2 className={styles.aboutParagraph}>
          I am a passionate, hardworking individual who is always looking to
          learn more. <br/>
          I am a recent graduate of the Computer Programming Program at Algonquin College <br/>
          <b>Skills:</b>
        </h2>
        <h2 className="text-left w-fit m-auto">
          o	Languages: Java, JavaScript, TypeScript, Python, C#, C++, COBOL, PHP <br/>
          o	Web Technologies: React.js, Next.js, HTML/CSS, TailwindCSS, Node.js, GraphQL, AWS, Strapi <br/>
          o	Database Technologies OracleDB, SQL Server, MySQL, MongoDB, SQL, NoSQL <br/>
          o	Technologies: Spring boot, REST, Apache, NGINX, Linux, Android, Docker
        </h2>
      </div>
    </div>
  );
};
