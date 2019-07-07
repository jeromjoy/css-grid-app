import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header-with-logo">
      <h1>Event app</h1></div>
      <div className="App-banner">
      <h3>This is a app banner</h3></div>
      <div className="App-event-list">
      {[...Array(10).keys()].map( item=> (
        <li>Event {item + 1}</li>
      ))}
      </div>
      <div className="App-sponsored-events">
      {[...Array(3).keys()].map( item=> (
        <li>Sponsored Event {item + 1}</li>
      ))}
      </div>
      <div className="App-location">
      123 Avenue road, Big City, Large county, Country </div>
    </div>
  );
}

export default App;
