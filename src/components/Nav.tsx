import React from 'react';
import router from 'react-dom'

const Nav: React.FC = () => (
  <nav>
    <ul className='container-nav'>
      <li className='nav'><a href="#skills">Skills</a></li>
      <li className='nav'><a href="#education">Education</a></li>
      <li className='nav'><a href="#contact">Contact</a></li>
      <li className='nav'><a href='#projects'>Projects</a></li>
    </ul>
  </nav>
);

export default Nav;
