import React from "react";
import { WidgetProvider, TimerProvider, NotesTasksProvider } from "context";
const CombinedProvider = ({ children }) => {
  return (
    <WidgetProvider>
      <TimerProvider>
        <NotesTasksProvider>{children}</NotesTasksProvider>
      </TimerProvider>
    </WidgetProvider>
  );
};
export { CombinedProvider };
