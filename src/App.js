import { Navbar, NotesWidget, TasksWidget, WorkTimerWidget } from "components";
import { useWidget } from "context";
import styles from "./App.module.css";
const App = () => {
  const { currentNavbarOptions } = useWidget();
  const widgetOptionsToBeViewed = currentNavbarOptions.filter(
    (everyNavbarOption) => everyNavbarOption.enabled
  );
  const workTimerWidget = widgetOptionsToBeViewed.find(
    (everyNavbarOption) => everyNavbarOption.optionName === "Work Timer"
  );
  const notesWidget = widgetOptionsToBeViewed.find(
    (everyNavbarOption) => everyNavbarOption.optionName === "Notes"
  );
  const tasksWidget = widgetOptionsToBeViewed.find(
    (everyNavbarOption) => everyNavbarOption.optionName === "Tasks"
  );
  return (
    <div className="App">
      <Navbar />
      <div className={`container-flex-align-center ${styles.widget_container}`}>
        {widgetOptionsToBeViewed.length === 0 ? (
          <div
            className={`container-flex-column ${styles.empty_widget_section}`}
          >
            <img src="assets/growfin_empty_page.svg" alt="No widgets found" />
            <p>NO WIDGETS AVAILABLE</p>
          </div>
        ) : (
          <div className={`${styles.filled_widget_container}`}>
            <div className={`container-flex-column ${styles.left_container}`}>
              {workTimerWidget?.enabled ? <WorkTimerWidget widgetDetails={workTimerWidget}/> : null}
              {notesWidget?.enabled ? <NotesWidget widgetDetails={notesWidget}/> : null}
            </div>
            {tasksWidget?.enabled ? <TasksWidget widgetDetails={tasksWidget}/> : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
