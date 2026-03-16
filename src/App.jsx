import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'

function App() {
  const [currentStage, setCurrentStage] = useState("StartPage");

  useEffect(() => {
    const savedStage = localStorage.getItem("currentStage") || "StartPage";
    setCurrentStage(savedStage);
    localStorage.setItem("currentStage", savedStage);
  }, []);

  function handleStageChange(newStage) {
    setCurrentStage(newStage);
    localStorage.setItem("currentStage", newStage);
  }

  if (currentStage === "StartPage") {
    return (
      <div className="App">
        <h1>Welcome to the Game!</h1>
        <button onClick={() => handleStageChange("AuthTime")}>Start Game</button>
      </div>
    )
  } else if (currentStage === "AuthTime") {
    return (<div className="App">
      <h1>Authentication Time</h1>
      <button onClick={() => handleStageChange("Game")}>Proceed to Game</button>
      <button onClick={() => handleStageChange("StartPage")}>Back to Start</button>
    </div>
  )
  } else if (currentStage === "Game") {
    return (<div className="App">
      <h1>Game Stage</h1>
      <button onClick={() => handleStageChange("StartPage")}>Back to Start</button>
    </div>
  )
  }
}

export default App
