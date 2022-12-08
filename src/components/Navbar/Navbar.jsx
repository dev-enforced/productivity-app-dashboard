import React, { useState } from "react";
import { useWidget } from "context";
import { Plus } from "constants";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { currentNavbarOptions, updateNavbarOptions } = useWidget();
  const navbarOptionsToBeViewed = currentNavbarOptions.filter(
    (everyNavbarOption) => !everyNavbarOption.enabled
  );
  const [widgetView, setWidgetView] = useState(false);
  return (
    <div className={`container-flex-align-center ${styles.navbar_wrapper}`}>
      <div className={`container-flex-align-center ${styles.logo_container}`}>
        <img src="assets/logo_growfin.png" alt="Growfin Logo" />
        <div className={`container-flex-column ${styles.title_container}`}>
          <span className={styles.main_title}>GROWFIN</span>
          <span>DASHBOARD</span>
        </div>
      </div>
      <div
        className={`container-flex-align-center ${styles.add_widget_container}`}
      >
        <button
          onClick={() => {
            setWidgetView((prev) => !prev);
          }}
          className={`container-flex-align-center ${styles.add_widget_btn}`}
        >
          <Plus style={{ color: "blue" }} />
          ADD WIDGET
        </button>
        {widgetView ? (
          <div
            className={`container-flex-column ${styles.widget_options_container}`}
          >
            {navbarOptionsToBeViewed.length !== 0 ? (
              navbarOptionsToBeViewed.map((everyNavbarOption) => {
                return (
                  <span
                    key={everyNavbarOption.id}
                    onClick={() => {
                      updateNavbarOptions(everyNavbarOption);
                    }}
                    className={styles.every_widget_option}
                  >
                    {everyNavbarOption.optionName}
                  </span>
                );
              })
            ) : (
              <span>No widgets to add</span>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
export { Navbar };
