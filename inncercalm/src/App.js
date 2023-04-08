import React from 'react';
import { Routes, Route } from 'react-router-dom'
// import Nav from './components/Nav';
import './App.css';
import Home from './Pages/Home';
import Community from './Pages/Community';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
