import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'

function MainPage() {
  return (
    <div className="App">
      <Link to="/game">Spiel spielen</Link>
    </div>
  )
}

export default MainPage;
