import './styles/styles.css'
import { Routes, Route } from 'react-router';
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BurgerMenu from './components/BurgerMenu';
import { useEffect, useState } from 'react';


function App() {
  
  return (
    <div className="app">
      <BurgerMenu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      
    </div>
  );
}

export default App;
