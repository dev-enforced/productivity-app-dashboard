import { existingNotes, tasksData, initialNoteData } from "constants";
import React, { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
const NotesTasksContext = createContext();
const NotesTasksProvider = ({ children }) => {
  const [tasksList, updateTasksList] = useState(tasksData);
  const [notesList, updateNotesList] = useState(existingNotes);
  const [currentNoteData, updateCurrentNoteData] = useState(initialNoteData);
  const getTasksListUpdated = (taskClicked) => {
    const modifiedTasksList = tasksList.map((everyTaskList) =>
      everyTaskList.id === taskClicked.id
        ? {
            ...taskClicked,
            completion_status: !taskClicked.completion_status,
            status: taskClicked.completion_status ? "Upcoming" : "Completed",
          }
        : { ...everyTaskList }
    );
    updateTasksList(modifiedTasksList);
  };

  const removeExistingNote = (noteClicked) => {
    const modifiedNotesList = notesList.filter(
      (everyNote) => everyNote.id !== noteClicked.id
    );
    updateNotesList(modifiedNotesList);
  };
  const addNewNote = () => {
    if (currentNoteData.textContent.trim() !== "") {
      const modifiedNotesList = [
        ...notesList,
        { ...currentNoteData, id: uuid() },
      ];
      updateNotesList(modifiedNotesList);
    }
  };

  return (
    <NotesTasksContext.Provider
      value={{
        tasksList,
        getTasksListUpdated,
        removeExistingNote,
        notesList,
        currentNoteData,
        updateCurrentNoteData,
        addNewNote,
        initialNoteData,
      }}
    >
      {children}
    </NotesTasksContext.Provider>
  );
};

const useNotesTasks = () => {
  const contextReceived = useContext(NotesTasksContext);
  if (contextReceived === undefined) {
    throw new Error(
      "useWidget custom Hook must be used within a Widget Provider only"
    );
  }
  return contextReceived;
};

export { useNotesTasks, NotesTasksProvider };
