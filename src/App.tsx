import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Nav';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';

const App: React.FC = () => {

  return (
    <Router>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About-me" element={<AboutMe />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer /> 
    </Router>
  );
};

export default App;
