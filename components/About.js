import React, { Component } from "react";
import styles from "../styles/about.module.css";
import * as AboutModel from "./AboutModel";

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.modelContainer}>{<AboutModel.AboutModel />}</div>
      <div className={styles.textContainer}>
        <h1 className={styles.aboutTitle}>About Me</h1>
        <h2 className={styles.aboutParagraph}>
          I am a passionate, hardworking individual who is always looking to
          learn more.
        </h2>
        <h2 className={styles.aboutParagraph}>
          I am in my last semester of Computer Programming at Algonquin College
        </h2>
      </div>
    </div>
  );
};
