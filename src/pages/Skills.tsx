import React from 'react';

const Skills: React.FC = () => (
    <div className="skills" id='skills'>
    <h2>TECHNICAL SKILLS</h2>
  <section>
    <div className="skills-category">
      <h3>Lenguages and frameworks</h3>
      <ul>
        <li><strong>HTML5</strong>:  Semantics, forms and validations, accessibility, SEO.</li>
        <li><strong>CSS3</strong>: Static and responsive website design, animations and transitions.</li>
        <li><strong>JavaScript</strong>: EcmaScript, DOM manipulation, Fetch API, OOP.</li>
        <li><strong>TypeScript</strong>: To improve the development</li>
        <li><strong>Node.js NestJs Express:</strong>: Backend development and REST APIs.</li>
        <li><strong>React NextJs Tailwind</strong>: Frontend development.</li>
        <li><strong>PostgreSQL</strong>:   Database management, also known as SQL and I am familiar with TypeORM.</li>
      </ul>
    </div>
    <div className="skills-category">
      <h3>Tools and Version Control:</h3>
      <ul>
        <li> Git, GitHub.</li>
        <li>Package Managers: NPM, Yarn, Bun.</li>
        <li>Construction Tools: Vite, Webpack.</li>
        <li>Execution Environments: Node.js.</li>
        <li>UX/UI design: Figma, best practices.</li>
        <li>Web Security: HTTPS, CORS, JWT, OAuth.</li>
      </ul>
    </div>
    <div className="skills-category">
      <h3>Methodologies and DevOps:</h3>
      <ul>
        <li>Agile Methodologies: Scrum.</li>
        <li>Design Patterns: SOLID, UML.</li>
        <li>Container: Docker.</li>
        <li>Cloud: AWS.</li>
      </ul>
    </div>
    <div className="skills-category">
      <h3>Concepts</h3>
      <ul>
        <li>How the Internet works, HTTP, hosting, DNS and how it works, browsers and how they work.</li>
      </ul>
    </div>
    <div className="skills-category">
      <h3>Soft Skills</h3>
      <ul>
        <li>Problem Solving.</li>
        <li>Communication.</li>
        <li>Teamwork.</li>
        <li>Adaptability.</li>
      </ul>
    </div>
  </section>
  </div>
);

export default Skills;