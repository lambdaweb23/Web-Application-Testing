import React, { useState } from 'react';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0);

  const scoreStrike = () => {
    if (strikeCount === 2) {
      setStrikeCount(0);
      setBallCount(0);
    } else {
      setStrikeCount(strikeCount + 1);
    }
  };

  const scoreBall = () => {
    if (ballCount === 3) {
      setStrikeCount(0);
      setBallCount(0);
    } else {
      setBallCount(ballCount + 1);
    }
  };

  const scoreFoul = () => {
    if (strikeCount !== 2) {
      setStrikeCount(strikeCount + 1);
    }
  };



  return (
    <div className="App">
      <header className="App-header">
        Baseball Scoreboard
      </header>
      <Display
        ballCount={ballCount}
        strikeCount={strikeCount}
      />
      <Dashboard
        ballCount={scoreBall}
        strikeCount={scoreStrike}
        foulCount={scoreFoul}
      />
    </div>
  );
};

export default App;
