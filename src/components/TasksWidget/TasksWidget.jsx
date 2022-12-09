import React from "react";
import { useNotesTasks } from "context";
import styles from "./TasksWidget.module.css";

const TasksWidget = () => {
  const { tasksList, getTasksListUpdated } = useNotesTasks();
  return (
  <div className={`${styles.tasks_list_wrapper}`}>
  </div>);
};

export { TasksWidget };
