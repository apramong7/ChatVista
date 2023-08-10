import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import JoinRoom from './components/JoinRoom/JoinRoom';
import Room from './components/Room/Room';
import Home from './components/Home/Home';

import './App.css';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/join-room' element={<JoinRoom />} />
      <Route path='/room' element={<Room />} />
      <Route path='/' element={<Home />} />
    </Routes>
   </Router>
  );
}

export default App;
