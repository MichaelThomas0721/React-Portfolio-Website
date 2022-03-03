import styles from "../styles/container.module.css";
import * as Top from "../components/Top";
import * as About from "../components/About";
import * as Education from "../components/Education";
import * as Experience from "../components/Experience";
import * as Projects from "../components/Projects";
import * as Contact from "../components/Contact";
import * as Footer from "../components/Footer";
import * as Leftbar from "../components/Leftbar";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.grid_container} id={styles.grid_container_id}>
      <Head>
        <title>Michael Thomas</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {<Leftbar.Leftbar />}
      <section className={styles.sections} id={styles.top}>
        {<Top.TopMain />}
      </section>
      <section className={styles.sections} id={styles.about}>
        {<About.About />}
      </section>
      <section className={styles.sections} id={styles.education}>
        {<Education.Education />}
      </section>
      <section className={styles.sections} id={styles.experience}>
        {<Experience.Experience />}
      </section>
      <section className={styles.sections} id={styles.projects}>
        {<Projects.Projects />}
      </section>
      <section className={styles.sections} id={styles.contact}>
        {<Contact.Contact />}
      </section>
      <section className={styles.sections} id={styles.footer}>
        {<Footer.Footer />}
      </section>
    </div>
  );
}
