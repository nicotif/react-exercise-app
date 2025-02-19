import React, { useState, useEffect } from "react";

function DurationExercise({ name, returnToMenu }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>Time: {formatTime(time)}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        onClick={() => {
          setTime(0);
          setIsRunning(false);
        }}
      >
        Reset
      </button>
      <button onClick={returnToMenu}>Return to Menu</button>
    </div>
  );
}

export default DurationExercise;
