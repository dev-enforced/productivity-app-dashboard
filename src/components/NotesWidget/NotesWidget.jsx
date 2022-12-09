import React from "react";
import { useNotesTasks, useWidget } from "context";
import styles from "./NotesWidget.module.css";
import { Close, Delete } from "constants";

const NotesWidget = ({ widgetDetails }) => {
  const {
    removeExistingNote,
    notesList,
    currentNoteData,
    updateCurrentNoteData,
    addNewNote,
    initialNoteData,
  } = useNotesTasks();
  const { updateNavbarOptions } = useWidget();
  return (
    <div className={`container-flex-column ${styles.notes_widget_wrapper}`}>
      <div className={`container-flex-align-center ${styles.title_container}`}>
        <h3>NOTES </h3>
        <button
          className={`${styles.remove_button} cursor-pointer`}
          onClick={() => {
            updateNavbarOptions(widgetDetails);
          }}
        >
          <Close />
        </button>
      </div>
      <div className={`container-flex-column ${styles.add_new_note_wrapper}`}>
        <p>ADD NOTE...</p>
        <form>
          <textarea
            value={currentNoteData.textContent}
            onChange={(changeEvent) => {
              updateCurrentNoteData((prev) => ({
                ...prev,
                textContent: changeEvent.target.value,
              }));
            }}
            onKeyDown={(keyDownEvent) => {
              if (keyDownEvent.key === "Enter") {
                addNewNote();
                updateCurrentNoteData(initialNoteData);
              }
            }}
            placeholder={`\nEnter the note details`}
          />
        </form>
      </div>
      <div>
        {notesList.length === 0 ? (
          <span>NO NOTE TO DISPLAY</span>
        ) : (
          <>
            {notesList.map(({ id, textContent }) => {
              return (
                <div
                  className={`container-flex-align-center ${styles.every_note_container}`}
                  key={id}
                >
                  <span>{textContent}</span>
                  <span
                    onClick={() => {
                      removeExistingNote({ id, textContent });
                    }}
                    className={`cursor-pointer`}
                  >
                    <Delete />
                  </span>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
export { NotesWidget };
