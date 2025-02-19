import React, { useState } from "react";

function RepetitionExercise({ name, returnToMenu }) {
  const [repetitions, setRepetitions] = useState(0);

  return (
    <div>
      <h1>{name}</h1>
      <p>Repetitions: {repetitions}</p>
      <button onClick={() => setRepetitions(repetitions + 1)}>
        Complete Rep
      </button>
      <button onClick={() => setRepetitions(0)}>Reset</button>
      <button onClick={returnToMenu}>Return to Menu</button>
    </div>
  );
}

export default RepetitionExercise;