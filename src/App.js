import React from 'react';
import './App.css';
import Menu from './Menu';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Demo from './Components/Demo';
import Home from './Components/Home';
import User from './Components/User';
import Link from './Components/Link';
import Data from './Components/Data';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/user' element={<User />} />
        <Route path='/data' element={<Data />} />
        <Route path='/link' element={<Link />} />





      </Routes>


    </>
  );
}

export default App;
