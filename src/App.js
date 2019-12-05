import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(2);

  const strike = () => {
    if (strikes === 3) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const ball = () => {
    if (balls === 4) {
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const foul = () => {
    if (strikes === 2) {
      setFouls();
    } else {
      setStrikes(strikes + 1);
    }
  };

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Dashboard hit={hit} foul={foul} ball={ball} strike={strike} />
    </div>
  );
}

export default App;
