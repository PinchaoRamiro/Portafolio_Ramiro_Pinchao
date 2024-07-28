import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';
import './styles.css';

const App: React.FC = () => (
  <div className='background-image'>
    <Header />
    <Nav />
    <About />
    <Skills />
    <Projects/>
    <Education />
    <Contact />
  </div>
);

export default App;
