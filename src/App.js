import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [currentScreen, setCurrentScreen] = useState("menu");
  const [currentExercise, setCurrentExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Sit Ups", type: "repetition" },
    { name: "Plank", type: "duration" },
  ];

  const handleExerciseClick = (exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(exercise.type);
  };

  const returnToMenu = () => {
    setCurrentScreen("menu");
    setCurrentExercise(null);
  };

  return (
    <div className="App">
      {currentScreen === "menu" && (
        <div>
          <h1>Exercise Tracker</h1>
          <ul>
            {exercises.map((exercise, index) => (
              <li key={index}>
                <button onClick={() => handleExerciseClick(exercise)}>
                  {exercise.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {currentScreen === "repetition" && (
        <RepetitionExercise
          name={currentExercise.name}
          returnToMenu={returnToMenu}
        />
      )}
      {currentScreen === "duration" && (
        <DurationExercise
          name={currentExercise.name}
          returnToMenu={returnToMenu}
        />
      )}
    </div>
  );
}

export default App;
