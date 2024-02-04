import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './zitmub.json';

function App() {
  const rolledStats = data.rolledStats;
  return (
    <div className="App">
    <h2>{data.name}</h2>
    <h3>{data.ancestry} {data.class}</h3>
    <div>Strength: {rolledStats.STR}</div>
    <div>Dexterity: {rolledStats.DEX}</div>
    <div>Constitution: {rolledStats.CON}</div>
    <div>Intelligence: {rolledStats.INT}</div>
    <div>Wisdom: {rolledStats.WIS}</div>
    <div>Charisma: {rolledStats.CHA}</div>
    </div>
  );
}

export default App;
