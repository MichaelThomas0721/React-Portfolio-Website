import styles from "../styles/container.module.css";
import * as Top from "../components/Top";
import * as About from "../components/About";
import * as Education from "../components/Education";
import * as Experience from "../components/Experience";
import * as Projects from "../components/Projects";
import * as Contact from "../components/Contact";
import * as Footer from "../components/Footer";
import * as Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <div className={styles.grid_container} id={styles.grid_container_id}>
        <Head>
          <title>Michael Thomas</title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>
        <Navbar/>
        {<Leftbar.Leftbar />}
        <section className={[styles.sections, styles.top].join(" ")} id="top">
          {<Top.TopMain />}
        </section>
        <section className={[styles.sections, styles.about].join(" ")} id="about">
          {<About.About />}
        </section>
        <section className={[styles.sections, styles.education].join(" ")} id="education">
          {<Education.Education />}
        </section>
        <section className={[styles.sections, styles.experience].join(" ")} id="experience">
          {<Experience.Experience />}
        </section>
        <section className={[styles.sections, styles.projects].join(" ")} id="projects">
          {<Projects.Projects />}
        </section>
        <section className={[styles.sections, styles.contact].join(" ")} id="contact">
          {<Contact.Contact />}
        </section>
        <section className={[styles.sections, styles.footer].join(" ")} id="footer">
          {<Footer.Footer />}
        </section>
      </div>
    </div>
  );
}
