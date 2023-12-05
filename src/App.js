import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Socialsbar from './components/Socialsbar';
import AppParticles from "./components/Particles";

const App = () => {
  return (
    <div className="App flex flex-col h-screen bg-center bg-radial bg-squares back">
    <AppParticles/>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
      <Socialsbar/>
    </div>
  );
}

export default App;
