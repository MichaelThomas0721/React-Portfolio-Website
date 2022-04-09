import styles from "./../../styles/education.module.css";

export const Education = () => {
  const handleOptionChange = () => {
    console.log("Change");
  };

  return (
    <div className={styles.educationContainer}>
      <div>
        <h1 className={styles.EducationHeader}>Education</h1>
      </div>
      <div className={styles.EducationTabs}>
        <input
          type="radio"
          className={styles.secTab}
          id="tabHigh"
          name="myEdTabs"
          onChange={handleOptionChange}
          defaultChecked
        />
        <label
          htmlFor="tabHigh"
          className={styles.secTab}
        >
          Secondary
        </label>
        <div id={styles.secData} className={styles.tab}>
          <h1>St.Mark Highschool</h1>
          <p>September 2014 - June 2020</p>
          <p>Highschool Diploma</p>
          <p>Ontario Scholar Award</p>
          <p>Honour Certificates for 80% Plus Average for Grades 9-12</p>
          <p>85% Average for Grade 12</p>
        </div>
        <input
          type="radio"
          id="tabPost"
          className={styles.postTab}
          name="myEdTabs"
          onChange={handleOptionChange}
        />
        <label htmlFor="tabPost" className={styles.postTab}>
          Post Secondary
        </label>
        <div id={styles.postData} className={styles.tab}>
          <h1>Algonquin College</h1>
          <p>Computer Programming</p>
          <p>Deans list 3 semesters in a row</p>
          <p>Expected Graduation April 2022</p>
        </div>
      </div>
    </div>
  );
};
