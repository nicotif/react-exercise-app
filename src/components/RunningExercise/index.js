import React, { useState } from "react";

function RunningExercise({ name, returnToMenu }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  // Start/stop timer
  React.useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // Format time (MM:SS)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  // Record lap time
  const handleLap = () => {
    setLaps([...laps, time]);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>Time: {formatTime(time)}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={handleLap} disabled={!isRunning}>
        Record Lap
      </button>
      <button
        onClick={() => {
          setTime(0);
          setLaps([]);
          setIsRunning(false);
        }}
      >
        Reset
      </button>
      <button onClick={returnToMenu}>Return to Menu</button>

      <h2>Lap Times</h2>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;