  import './App.css';
  import React,{useState}from 'react';
  import BottCollection from './bottCollection';
  import YourBotArmy from './yourBotArmy';
  import "./bottCollection.css"
  




  function App() {
    const [selectedBots, setSelectedBots] = useState([]);
    return (
      <div className="App">
        <YourBotArmy bots={selectedBots} />
        <BottCollection setSelectedBots={setSelectedBots}/>
      </div>
    );
  }

  export default App;
