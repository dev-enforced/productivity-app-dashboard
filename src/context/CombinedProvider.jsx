import React from "react";
import { WidgetProvider, TimerProvider } from "context";
const CombinedProvider = ({ children }) => {
  return (
    <WidgetProvider>
      <TimerProvider>{children}</TimerProvider>
    </WidgetProvider>
  );
};
export { CombinedProvider };
