import { createContext, useContext, useEffect, useState } from "react";
const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  let timer;
  const initialTimerDetails = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [timePassed, updateTimePassed] = useState(initialTimerDetails);

  const startTimer = () => {
    updateTimePassed((prev) => ({ ...prev, seconds: prev.seconds + 1 }));
    const { minutes: minutesPassed, seconds: secondsPassed } = timePassed;
    if (secondsPassed === 59) {
      updateTimePassed((prev) => ({
        ...prev,
        minutes: prev.minutes + 1,
        seconds: 0,
      }));
    }
    if (minutesPassed === 59 && secondsPassed === 59) {
      updateTimePassed((prev) => ({
        ...prev,
        hours: prev.hours + 1,
        minutes: 0,
        seconds: 0,
      }));
    }
  };

  const stopTimer = () => {
    clearInterval(timer);
  };
  useEffect(() => {
    timer = setInterval(startTimer, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timePassed]);

  return (
    <TimerContext.Provider
      value={{
        timePassed,
        startTimer,
        stopTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

const useTimer = () => {
  const contextReceived = useContext(TimerContext);
  if (contextReceived === undefined) {
    throw new Error(
      "useTimer custom hook must be used within a useTimer provider"
    );
  } else {
    return contextReceived;
  }
};

export { useTimer, TimerProvider };
