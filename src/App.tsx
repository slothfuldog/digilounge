import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
