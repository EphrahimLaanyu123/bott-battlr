import React, { useState } from 'react';
import BottCollection from './bottCollection';
import YourBotArmy from './yourBotArmy';
import './App.css';

function App() {
  const [selectedBots, setSelectedBots] = useState([]);
  return (
    <div className="App">
      <YourBotArmy bots={selectedBots} setBots={setSelectedBots} />
      <BottCollection setSelectedBots={setSelectedBots} />
    </div>
  );
}

export default App;
