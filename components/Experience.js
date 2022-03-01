import { useState, useEffect } from "react";
import styles from "../styles/experience.module.css";

export const Experience = () => {
  const [tabIndicator, setTabIndicator] = useState();
  const [highlightIndicator, setHighlightIndicator] = useState();
  const [lastClick, setLastClick] = useState();
  const [conTab, setConTab] = useState();
  const [tutTab, setTutTab] = useState();
  const [golfTab, setGolfTab] = useState();

  useEffect(() => {
    setHighlightIndicator(document.getElementById("highlightIndicator"));
    setTabIndicator(document.getElementById("tabIndicator"));
    setConTab(document.getElementById(styles["tabCon"]));
    setTutTab(document.getElementById(styles["tabTut"]));
    setGolfTab(document.getElementById(styles["tabGolf"]));
    console.log(golfTab);
    setLastClick(0);
  }, []);

  function clickCon() {
    tabIndicator.style.transform = "translate(0%)";
    setLastClick(0);
    conTab.checked = true;
    tutTab.checked = false;
    golfTab.checked = false;
  }

  function clickTut() {
    tabIndicator.style.transform = "translate(100%)";
    conTab.checked = false;
    tutTab.checked = true;
    golfTab.checked = false;
    setLastClick(100);
  }

  function clickGolf() {
    tabIndicator.style.transform = "translate(200%)";
    tutTab.checked = false;
    conTab.checked = false;
    golfTab.checked = true;
    setLastClick(200);
  }

  function hoverCon() {
    highlightIndicator.style.transform = "translate(0%)";
  }

  function hoverTut() {
    highlightIndicator.style.transform = "translate(100%)";
  }

  function hoverGolf() {
    highlightIndicator.style.transform = "translate(200%)";
  }

  function hoverLeave() {
    highlightIndicator.style.transition = "all 0.01s ease";
    highlightIndicator.style.transform = "translate(" + lastClick + "%)";
    highlightIndicator.style.transition = "all 0.5s ease";
  }

  return (
    <div className={styles.experienceContainer}>
      <h1 className={styles.ExperienceHeader}>Experience</h1>
      <div className={styles.ExperienceTabs}>
        <input
          type="radio"
          className={styles.conTab}
          id={styles.tabCon}
          name="myExTabs"
          defaultChecked
          readOnly
        />
        <label
          htmlFor={styles.tabCon}
          className={styles.conTab}
          onClick={clickCon}
          onMouseEnter={hoverCon}
          onMouseLeave={hoverLeave}
        >
          Construction
        </label>
        <div id={styles.conData} className={styles.tab}>
          <h3>Sapacon Drywall Limited</h3>
          <p>
            July 2019 - August 2019, June 2020 - August 2020, May 2021 - August
            2021
          </p>
          <p>
            Duties Included: Site maintenance, applying fire caulking,
            transporting materials
          </p>
        </div>

        <input
          type="radio"
          className={styles.tutTab}
          id={styles.tabTut}
          name="myExTabs"
          readOnly
        />
        <label
          htmlFor={styles.tabTut}
          className={styles.tutTab}
          onClick={clickTut}
          onMouseEnter={hoverTut}
          onMouseLeave={hoverLeave}
        >
          Tutoring
        </label>
        <div id={styles.tutData} className={styles.tab}>
          <h3>Java Tutoring</h3>
          <p>September 2021 - Decemeber 2021</p>
          <p>Tutored Buisness Programming at Carleton</p>
        </div>

        <input
          type="radio"
          className={styles.golfTab}
          id={styles.tabGolf}
          name="myExTabs"
          readOnly
        />
        <label
          htmlFor={styles.tabGolf}
          className={styles.golfTab}
          onClick={clickGolf}
          onMouseEnter={hoverGolf}
          onMouseLeave={hoverLeave}
        >
          Golf
        </label>
        <div id={styles.golfData} className={styles.tab}>
          <h3>Carleton Golf and Yacht Club</h3>
          <p>May 2017 - June 2020</p>
          <p>
            Duties Included: Washing golf clubs, washing golf carts, washing
            golf balls, drove range tractor for collecting balls, fixed broken
            push carts
          </p>
        </div>
        <div
          className={styles.highlight_indicator}
          id="highlightIndicator"
        ></div>
        <div className={styles.tab_indicator} id="tabIndicator"></div>
      </div>
    </div>
  );
};
