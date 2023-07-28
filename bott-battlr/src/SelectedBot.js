import React from "react";

function SelectedBot({ bot }) {
    return (
        <div className="additional-info">
            <h2>Additional Information:</h2>
            <p>Name: {bot.name}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catch Phrase: {bot.catchphrase}</p>
            <p>Created at: {bot.created_at}</p>
            <p>Updated at: {bot.updated_at}</p>
        </div>
    );
}

export default SelectedBot;
