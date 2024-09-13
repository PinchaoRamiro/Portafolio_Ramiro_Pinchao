import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="container-nav">
      <Link className='route' to="/">Inicio</Link>
      <Link className='route' to="/Education">Education</Link>
      <Link className='route' to="/Skills">Skills</Link>
      <Link className='route' to="/Projects">Proyectos</Link>
      <Link className='route' to="/Contact">Contacto</Link>
    </nav>
  );
};

export default Navbar;
