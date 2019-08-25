import React from 'react';
import logo from './logo.svg';
import './App.css';
import HideableText from './HideableText';
import AutoCompleteText from './AutoCompleteText';
import countries from './countries';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          Edit <b>src/App.js</b> and save to reload. <p> hello world !!</p>
          <div className="App-content">
          <HideableText text="Hideable text here" />
          </div>
        
        
        <div className="App">
        <div className="App-Component">
        <AutoCompleteText text="Search names j,d,s :" items={['David','Damien','Dorothy','Donna','Sara','Samantha','Sabrina','Jane','Jayden','Joseph']}/>
        <br /><br />
        <AutoCompleteText text="Search countries :" items={countries}/>
        </div>
        </div>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
