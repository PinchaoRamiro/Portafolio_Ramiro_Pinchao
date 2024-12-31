import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onToggleFlip: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleFlip }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="container-nav">
      <button title='Menu' onClick={toggleMenu} className="menu-button">
        ☰
        <p className={`${isMenuOpen ? '' : 'Word_menu'}`}>Menu</p>
      </button>
      <div className={`menu ${isMenuOpen ? 'close' : ''}`}>
        <Link className='route' to="/" onClick={onToggleFlip}>Home</Link>
        <Link className='route' to="/About" onClick={onToggleFlip}>About me</Link>
        <Link className='route' to="/Education">Education</Link>
        <Link className='route' to="/Skills">Skills</Link>
        <Link className='route' to="/Projects">Projects</Link>
        <Link className='route' to="/Contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
