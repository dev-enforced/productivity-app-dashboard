import React, { useState } from "react";
import { Close } from "constants";
import { useTimer, useWidget } from "context";
import styles from "./WorkTimerWidget.module.css";
const WorkTimerWidget = ({ widgetDetails }) => {
  const { updateNavbarOptions } = useWidget();
  const {
    timePassed: {
      hours: hoursPassed,
      minutes: minutesPassed,
      seconds: secondsPassed,
    },
    startTimer,
    stopTimer,
  } = useTimer();
  const [resumeState, updateResumeState] = useState(false);
  const resumeHandler = () => {
    if (resumeState) {
      startTimer();
    } else {
      stopTimer();
    }
    updateResumeState((prev) => !prev);
  };
  return (
    <div className={`container-flex-column ${styles.work_time_wrapper}`}>
      <div className={`container-flex-align-center ${styles.title_container}`}>
        <h3>WORK TIMER </h3>
        <button
          className={`${styles.remove_button} cursor-pointer`}
          onClick={() => {
            updateNavbarOptions(widgetDetails);
          }}
        >
          <Close />
        </button>
      </div>
      <div className={`container-flex-align-center ${styles.timer_container}`}>
        <div className={`container-flex-column ${styles.work_timer}`}>
          <h2>
            {hoursPassed < 10 ? "0" + hoursPassed : hoursPassed}:<span> </span>
            {minutesPassed < 10 ? "0" + minutesPassed : minutesPassed}:
            <span> </span>
            {secondsPassed < 10 ? "0" + secondsPassed : secondsPassed}
          </h2>
          <h2 className={styles.time_details}>hh: mm: ss</h2>
        </div>
        <div className={`container-flex-align-center ${styles.btn_wrapper}`}>
          <button
            className={`container-flex-center ${styles.btn} ${styles.stop_btn} cursor-pointer`}
            onClick={resumeHandler}
          >
            {resumeState ? "RESUME" : "PAUSE"}
          </button>
          <button
            className={`container-flex-center ${styles.btn} ${styles.stop_btn} cursor-pointer`}
            onClick={() => {
              stopTimer();
            }}
          >
            STOP
          </button>
        </div>
      </div>
    </div>
  );
};

export { WorkTimerWidget };
