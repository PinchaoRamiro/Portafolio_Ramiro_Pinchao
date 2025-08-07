import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface SkillCardProps {
  title: string;
  items: { label?: string; description?: string }[];
}
export const SkillCard: React.FC<SkillCardProps> = ({ title, items }) => (
  <div
    className="bg-[#1a1a1a]/60 shadow-[0px_0px_17px_4px_rgba(0,255,255,0.2)] 
      rounded-xl p-6 transform transition-transform duration-300 hover:scale-105
      backdrop-blur-md animate-fade-in"
  >
    <h3 className="text-2xl font-semibold  text-blue-500  mb-4 border-b border-gray-600 pb-2">
      {title}
    </h3>
    <ul className="space-y-3 text-gray-200 tracking-wide">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <FaChevronRight className="mt-1  text-blue-300  shrink-0" />
          <span>
            <span className="font-semibold text-cyan-200">
              {item.label && `${item.label}: `}
            </span>
            <span>{item.description}</span>
          </span>
        </li>
      ))}
    </ul>
  </div>
);