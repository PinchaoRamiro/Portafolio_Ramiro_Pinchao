import React from 'react';
import { SkillCard } from '../components/SkillCard';

const Skills: React.FC = () => {
  const skillData = [
    {
      title: "Languages and frameworks",
      items: [
        { label: "JavaScript, TypeScript", description: "EcmaScript, DOM manipulation, Fetch API, OOP." },
        { label: "Python ", description: "Basic knowledge of Python." },
        { label: "Kotlin", description: "Creation of Android applications, with use of Jetpack Compose." },
        { label: "Node.js, NestJs, Express", description: "Backend development and REST APIs." },
        { label: "React, NextJs, Tailwind", description: "Frontend development." },
        { label: "PostgreSQL", description: "Database management, also known as SQL and I am familiar with TypeORM." },
      ],
    },
    {
      title: "Tools and Version Control",
      items: [
        { label: "Git, GitHub." },
        { label: "Package Managers", description: "NPM, Yarn, Bun." },
        { label: "Construction Tools", description: "Vite, Webpack." },
        { label: "Execution Environments", description: "Node.js." },
        { label: "UX/UI design", description: "Figma, best practices." },
        { label: "Web Security", description: "HTTPS, CORS, JWT, OAuth." },
      ],
    },
    {
      title: "Methodologies and DevOps",
      items: [
        { label: "Agile Methodologies", description: "Scrum." },
        { label: "Design Patterns", description: "SOLID, UML." },
        { label: "Container", description: "Docker." },
        { label: "Cloud", description: "AWS." },
      ],
    },
    {
      title: "Soft Skills",
      items: [
        { description: "Problem Solving." },
        { description: "Communication." },
        { description: "Teamwork." },
        { description: "Adaptability." },
      ],
    },
    {
      title: "Concepts",
      items: [
        { description: "How the Internet works, HTTP, hosting, DNS and how it works, browsers and how they work." },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-[#0c0c0c] rounded-2xl shadow-[0_15px_30px_5px_rgba(90,90,90,0.2)]  font-[Times_New_Roman,_serif]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center  text-blue-500  mb-14 border-b border-cyan-800 pb-2 pt-2 shadow-[0_2px_12px_#00ffff33]">
          TECHNICAL SKILLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillData.map((category) => (
            <SkillCard key={category.title} title={category.title} items={category.items} />
          ))}
        </div>
      </div>
    </section>

  );
};

export default Skills;