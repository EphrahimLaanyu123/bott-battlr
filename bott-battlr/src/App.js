import React, { useState, useEffect } from 'react';
import BottCollection from './bottCollection';
import YourBotArmy from './yourBotArmy';
import './App.css';

function App() {
  const [selectedBots, setSelectedBots] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDischargeBot = (id) => {
    fetch(`http://localhost:3000/bots/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete the bot.');
        }
        const updatedData = data.filter((bot) => bot.id !== id);
        setData(updatedData);
        console.log('Bot has been discharged.');
      })
  };

  return (
    <div className="App">
      <YourBotArmy bots={selectedBots} setBots={setSelectedBots} onDischargeBot={handleDischargeBot} />
      <BottCollection data={data} setSelectedBots={setSelectedBots} />
    </div>
  );
}

export default App;

