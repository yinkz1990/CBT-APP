import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ examTime }) => {
  const initialMinute = 3;
  const initialSeconds = 0;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          examTime();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className="bg-dark text-white text-center mb-4 sticky-top">
      countdown :
      {minutes === 0 && seconds === 0 ? null : (
        <h3>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h3>
      )}
    </div>
  );
};

export default Timer;
