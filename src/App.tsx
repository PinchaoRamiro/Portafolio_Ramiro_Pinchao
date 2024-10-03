import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Nav';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Projects from './pages/Projects';
import './styles.css';
import './styles/home.css';
import './styles/nav.css';
import './styles/skills.css';
import './styles/education.css';
import './styles/projects.css';
import './styles/contact.css';

const App: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(prev => !prev);
  };
  return (
    <Router>
      <Navbar onToggleFlip={toggleFlip} />
      <Routes>
        <Route path="/" element={<Home isFlipped={isFlipped}  />} />
        <Route path="/About" element={<Home isFlipped={isFlipped} />} />
        <Route path="/Education" element={<Education />} /> 
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
