import React from 'react';
import './yourBotArmy.css';

function YourBotArmy({ bots, setBots, onDischargeBot }) {
  function handleRelease(id) {
    const updatedBots = bots.filter((bot) => bot.id !== id);
    setBots(updatedBots);
  }

  function handleDischarge(id) {
    onDischargeBot(id);
  }

  return (
    <div className="bot-army-container">
        <div className='initialDiv'>
      {bots.map((botArmy) => (
        <div key={botArmy.id} className="bott-box-army" onClick={() => handleRelease(botArmy.id)}>
          <img src={botArmy.avatar_url} alt="" />
          <h1>Name: {botArmy.name}</h1>
          <h2>Health: {botArmy.health}</h2>
          <h3>Damage: {botArmy.damage}</h3>
          <h3>Armor: {botArmy.armor}</h3>
          <h3>Class: {botArmy.bot_class}</h3>
          <h3>Catch Phrase: {botArmy.catchphrase}</h3>
          <h3>Created at: {botArmy.created_at}</h3>
          <h3>Updated at: {botArmy.updated_at}</h3>
          <button onClick={() => handleDischarge(botArmy.id)}>X</button> 
        </div>
      ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
