import React from 'react'
import './App.css'
import DressUpGame from './DressUpGame'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './MainPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="game" element={<DressUpGame />}></Route>
      <Route path="/" element={<MainPage />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
