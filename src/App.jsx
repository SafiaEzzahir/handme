import { useState } from 'react'

import './App.css'

function App() {
  const [currentStage, setCurrentStage] = useState("StartPage");

  useEffect(() => {
    const savedStage = sessionStorage.getItem("currentStage") || "StartPage";
    setCurrentStage(savedStage);
    sessionStorage.setItem("currentStage", savedStage);
  }, []);

  if (currentStage === "StartPage") {
    return (
      <div className="App">
        <h1>Welcome to the Game!</h1>
        <button onClick={() => setCurrentStage("AuthTime")}>Start Game</button>
      </div>
    )
  } else if (currentStage === "AuthTime") {
  } else if (currentStage === "Game") {
  }
}

export default App
