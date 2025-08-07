import React from 'react';
import {  FaUserSecret } from 'react-icons/fa';

const AboutMe: React.FC = () => (
  <div
    className="bg-gradient-to-br from-black via-gray-900 to-neutral-950 
    p-8 rounded-2xl mx-auto max-w-2xl mt-10 text-gray-300 
    shadow-[0_0_25px_#00f2ff44] font-[Times_New_Roman]
    transition-transform duration-300 ease-in-out transform hover:scale-[1.01]
    animate-fade-in"
  >
    <h2 className="text-4xl font-bold text-cyan-400 mb-6 border-b border-cyan-800 pb-2 flex items-center gap-2 justify-center">
      <FaUserSecret />
      About Me
    </h2>

    <p className="text-lg leading-relaxed text-justify">
      As a software developer, my mission is to bring ideas to life by building scalable, high-quality solutions throughout the development lifecycle.
      With strong foundations in object-oriented programming and agile methodologies, I collaborate effectively in dynamic teams.
      I thrive in fast-paced environments, continuously learning and adapting to new technologies in pursuit of innovative and efficient outcomes.
    </p>
  </div>
);

export default AboutMe;
