import React from 'react';

const Nav: React.FC = () => (
  <nav>
    <ul className='container-nav'>
      <li className='nav'><a href="#contact">Contacto</a></li>
      <li className='nav'><a href="#skills">Habilidades</a></li>
      <li className='nav'><a href="#education">Educación</a></li>
      <li className='nav'><a href='#projects'>Proyectos</a></li>
    </ul>
  </nav>
);

export default Nav;
