import React from "react";
import useFetch from "./useFetch";
import "./bottCollection.css"


function BottList(){
    const {data, url}=useFetch('http://localhost:3000/bots')



    return(
        <div className="bott-container">
   {data.map((bots) => (
    <div key={bots.id} className="bott-box">
        <img src={bots.avatar_url}></img>
        <h1>Name:{bots.name}</h1>
        <h2>Health:{bots.health}</h2>
        <h3>Damage:{bots.damage}</h3>
        <h3>Amor:{bots.armor}</h3>
        <h3>Class:{bots.bot_class}</h3>
        <h3>Catch Phrase:{bots.catchphrase}</h3>
        <h3>Created at:{bots.created_at}</h3>
        <h3>Updated at:{bots.updated_at}</h3>



        
    </div>
))}

 
        </div>
    )
}

export default BottList;


 