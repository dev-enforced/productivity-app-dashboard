import { createContext, useContext, useState } from "react";
import { navbarOptions } from "constants";
const WidgetContext = createContext();

const WidgetProvider = ({ children }) => {
  const [currentNavbarOptions, updateCurrentNavbarOptions] =
    useState(navbarOptions);
  const updateNavbarOptions = (optionClicked) => {
    const modifiedNavbarOptions = currentNavbarOptions.map((everyOption) =>
      everyOption.id === optionClicked.id
        ? { ...optionClicked, enabled: !optionClicked.enabled }
        : { ...everyOption }
    );
    updateCurrentNavbarOptions(modifiedNavbarOptions);
  };
  return (
    <WidgetContext.Provider
      value={{ currentNavbarOptions, updateNavbarOptions }}
    >
      {children}
    </WidgetContext.Provider>
  );
};

const useWidget = () => {
  const contextReceived = useContext(WidgetContext);
  if (contextReceived === undefined) {
    throw new Error(
      "useWidget custom Hook must be used within a Widget Provider only"
    );
  }
  return contextReceived;
};

export { useWidget, WidgetProvider };
