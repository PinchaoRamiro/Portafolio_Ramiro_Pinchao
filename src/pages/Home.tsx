import React from 'react';
import Imagen from '../assets/profile.png';
import { FaDownload } from 'react-icons/fa';

const Home: React.FC = () => (
  <div
    className="relative flex flex-col md:flex-row items-center justify-center
      h-auto md:h-96
      max-w-2xl
      gap-8 bg-gradient-to-br from-black via-gray-900 to-neutral-950 
      shadow-[0_0_25px_rgb(55_40_95/52%)] rounded-2xl p-8 mt-10 mx-auto 
      transition-transform duration-300 ease-in-out hover:scale-[1.01]
      animate-fade-in font-[Times_New_Roman]"
  >
    {/* Imagen */}
    <img 
      src={Imagen} 
      alt="Profile" 
      className="w-44 h-44 shadow-lg
        hover:brightness-110 transition duration-300 ease-in-out"
    />

    {/* Información */}
    <div className="text-center md:text-left flex flex-col flex-1 min-w-0">
      <h1 className="text-4xl font-bold text-cyan-400 tracking-wide mb-2">
        Ramiro Antonio Pinchao Chachinoy
      </h1>
      <p className="text-gray-300 text-xl tracking-wider">
        Software Developer
      </p>
    </div>

    {/* Botón CV */}
    <a
      href="src/assets/CV - Ramiro Pinchao.pdf"
      download="CV_Ramiro_Pinchao.pdf"
      className="mt-6 md:mt-0 md:absolute bottom-6 right-6 bg-cyan-600 text-white
        px-5 py-2 rounded-lg hover:bg-cyan-700 transition
        duration-300 ease-in-out flex items-center gap-2 text-sm shadow-md"
    >
      <FaDownload />
      Download CV
    </a>
  </div>
);

export default Home;
