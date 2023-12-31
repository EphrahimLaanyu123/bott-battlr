import React from 'react';
import './bottCollection.css';

function BottCollection({ data, setSelectedBots, onDischargeBot }) {
  function handleClick(bot) {
    setSelectedBots((prevSelectedBots) =>
      prevSelectedBots.some((selectedBot) => selectedBot.id === bot.id)
        ? prevSelectedBots
        : [...prevSelectedBots, bot]
    );
  }

  return (
    <div className="bott-container">
      {data.map((bot) => (
        <div key={bot.id} className="bott-box" onClick={() => handleClick(bot)}>
          <img src={bot.avatar_url} alt="" />
          <h1>Name: {bot.name}</h1>
          <h2>Health: {bot.health}</h2>
          <h3>Damage: {bot.damage}</h3>
          <h3>Armor: {bot.armor}</h3>
          <h3>Class: {bot.bot_class}</h3>
          <h3>Catch Phrase: {bot.catchphrase}</h3>
          <h3>Created at: {bot.created_at}</h3>
          <h3>Updated at: {bot.updated_at}</h3>
        </div>
      ))}
    </div>
  );
}

export default BottCollection;


 