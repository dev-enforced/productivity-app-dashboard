import React from "react";
import { useNotesTasks, useWidget } from "context";
import styles from "./TasksWidget.module.css";
import { Close, Check } from "constants";

const TasksWidget = ({ widgetDetails }) => {
  const { tasksList, getTasksListUpdated } = useNotesTasks();
  const { updateNavbarOptions } = useWidget();
  return (
    <div className={`container-flex-column ${styles.tasks_list_wrapper}`}>
      <div className={`container-flex-align-center ${styles.title_container}`}>
        <h3>TASKS {`( ${tasksList.length} )`}</h3>
        <button
          className={`${styles.remove_button} cursor-pointer`}
          onClick={() => {
            updateNavbarOptions(widgetDetails);
          }}
        >
          <Close />
        </button>
      </div>
      <div>
        {tasksList.map((everyTask) => {
          return (
            <div
              key={everyTask?.id}
              className={`container-flex-align-center ${styles.individual_task_container}`}
            >
              <div
                className={`container-flex-align-center ${styles.task_details}`}
              >
                <div
                  className={`cursor-pointer`}
                  onClick={() => {
                    getTasksListUpdated(everyTask);
                  }}
                >
                  {everyTask?.completion_status ? (
                    <Check size={25} color="#73D13D" />
                  ) : (
                    <Check size={25} color="#BFBFBF" />
                  )}
                </div>
                <div className={`container-flex-column`}>
                  <span
                    className={`${
                      everyTask.completion_status ? "strikeThrough" : ""
                    }`}
                  >
                    {everyTask?.taskName}
                  </span>
                  <span>{everyTask?.deadline}</span>
                </div>
              </div>

              <div
                className={`${styles.status_details} ${
                  everyTask?.status === "Completed"
                    ? "greenBg"
                    : everyTask?.status === "Upcoming"
                    ? "orangeBg"
                    : "redBg"
                }`}
              >
                {everyTask?.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { TasksWidget };
