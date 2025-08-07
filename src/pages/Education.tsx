import React from 'react';
import { FaUniversity, FaGlobeAmericas, FaLaptopCode, FaBookReader } from 'react-icons/fa';

const Education: React.FC = () => (
  <section className="bg-gradient-to-br from-black via-gray-900 to-neutral-950 p-8 rounded-2xl mx-auto max-w-3xl mt-10 shadow-[0_0_25px_rgb(55_40_95/52%)] font-[Times_New_Roman] animate-fade-in">
    <h2 className="text-4xl font-bold text-cyan-400 mb-6 border-b border-cyan-800 pb-2 flex items-center gap-2">
      <FaBookReader className="text-cyan-400" />
      Education
    </h2>

    {/* Bootcamp */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-cyan-300 flex items-center gap-2">
        <FaLaptopCode />
        Full Stack Web Development Bootcamp
      </h3>
      <p className="text-sm text-gray-400">2024</p>
      <p className="text-base text-gray-300 mt-1">
        Based on the University 42 model in France, where learning is fully self-directed and peer-based.
      </p>
    </div>

    {/* Languages */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-cyan-300 flex items-center gap-2">
        <FaGlobeAmericas />
        Languages
      </h3>
      <p className="text-base text-gray-300 mt-1">English – B1</p>
      <p className="text-base text-gray-300">Spanish – Native Speaker</p>
    </div>

    {/* University */}
    <div>
      <h3 className="text-xl font-semibold text-cyan-300 flex items-center gap-2">
        <FaUniversity />
        University
      </h3>
      <p className="text-base text-gray-300 mt-1">Universidad Tecnológica de Pereira</p>
      <p className="text-base text-gray-300">Computer and Systems Engineering student</p>
    </div>
  </section>
);

export default Education;
