import styles from "./../../styles/contact.module.css";

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div id={styles.textContainer}>
      <h1 id={styles.contactHeader}>Contact Me!</h1>
      <p>Do you have an exciting opportunity or just want to chat?</p>
      <span id={styles.contactSpan}><a href="mailto:michaelthomas0721@icloud.com?subject=Hello!" id={styles.contactA}></a></span>
      </div>
    </div>
  );
};
