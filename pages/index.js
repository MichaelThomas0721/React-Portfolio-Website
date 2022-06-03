import * as About from "../components/Home/About";
import * as Contact from "../components/Home/Contact";
import * as Education from "../components/Home/Education";
import * as Experience from "../components/Home/Experience";
import * as Footer from "../components/Home/Footer";
import * as Leftbar from "../components/Home/Leftbar";
import * as Projects from "../components/Home/Projects";
import * as Top from "../components/Home/Top";

import { useEffect, useRef } from "react";

import Head from "next/head";
import Navbar from "../components/Home/Navbar";
import ParticleBackground from "./../components/Home/particleBackground";
import styles from "../styles/container.module.css";

export default function Home() {
  const navBar = useRef();
  const lastScroll = useRef(0);
  const navStatus = useRef(true);

  function handleScroll() {
    if (window.scrollY > lastScroll.current && navStatus.current == true) {
      navBar.current.classList.toggle("-translate-y-full");
      navStatus.current = false;
    } else if (
      window.scrollY < lastScroll.current &&
      navStatus.current == false
    ) {
      navBar.current.classList.toggle("-translate-y-full");
      navStatus.current = true;
    }
    lastScroll.current = window.scrollY;
  }

  useEffect(() => {
    navBar.current = document.getElementById("navbar");
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className={styles.grid_container} id={styles.grid_container_id}>
        <Head>
          <title>Michael Thomas</title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>
        <div
          id="navbar"
          className="w-full bg-slate-600 fixed transform transition duration-500 ease-in-out shadow-lg z-50"
        >
          <Navbar />
        </div>
        <ParticleBackground />
        <div className="bg-darkGrey min-h-screen fixed -z-10"></div>
        {<Leftbar.Leftbar />}
        <section className={[styles.sections, styles.top].join(" ")} id="top">
          {<Top.TopMain />}
        </section>
        <section
          className={[styles.sections, styles.about].join(" ")}
          id="about"
        >
          {<About.About />}
        </section>
        <section
          className={[styles.sections, styles.education].join(" ")}
          id="education"
        >
          {<Education.Education />}
        </section>
        <section
          className={[styles.sections, styles.experience].join(" ")}
          id="experience"
        >
          {<Experience.Experience />}
        </section>
        <section
          className={[styles.sections, styles.projects].join(" ")}
          id="projects"
        >
          {<Projects.Projects />}
        </section>
        <section
          className={[styles.sections, styles.contact].join(" ")}
          id="contact"
        >
          {<Contact.Contact />}
        </section>
        <section
          className={[styles.sections, styles.footer].join(" ")}
          id="footer"
        >
          {<Footer.Footer />}
        </section>
      </div>
    </div>
  );
}
