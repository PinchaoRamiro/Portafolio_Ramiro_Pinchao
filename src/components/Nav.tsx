import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ← esto nos da la ruta actual

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About me', path: '/about-me' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkStyles = "text-indigo-600 font-mono tracking-wide px-4 py-2 rounded-lg border-2 bg-transparent transition duration-300 ease-in-out hover:bg-indigo-800 hover:text-indigo-100 hover:border-indigo-800 hover:transform-view hover:scale-105 hover:duration-300 hover:ease-in-out mt-4";

  const selectedStyles = "bg-indigo-800 border-indigo-800 text-indigo-100 shadow-lg shadow-cyan-900/50 font-mono tracking-wide px-4 py-2 rounded-lg border-2 mt-4";

  return (
    <nav className="bg-black/40 pb-3 rounded-lg shadow-lg shadow-cyan-600/10 m-3">
      <div className="container mx-auto flex justify-between items-center w-full">
        
        {/* Hamburger Menu Icon */}
        <button 
          className="md:hidden sm:grid sm:grid-cols-3 sm:text-xl gap-3 flex flex-col mt-4 space-y-4 p-5 text-center font-bold text-indigo-500 focus:outline-none hover:text-white hover:transform-view hover:scale-105 hover:duration-300 hover:ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex mx-1 space-x-6 text-xl items-center justify-center gap-6 w-full">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={location.pathname === item.path ? selectedStyles : linkStyles}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="hiden md:hidden sm:grid sm:grid-cols-3 sm:text-xl gap-3 flex flex-col mt-4 space-y-4 p-5 text-center font-bold">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={location.pathname === item.path ? selectedStyles : linkStyles}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
