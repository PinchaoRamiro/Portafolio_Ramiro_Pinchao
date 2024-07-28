import React from 'react';

const Skills: React.FC = () => (
    <div className="skills" id='skills'>
    <h2>HABILIDADES TECNICAS</h2>
  <section>
    <div className="skills-category">
      <h3>Lenguajes y Tecnologías:</h3>
      <ul>
        <li>HTML5: Semántica, formularios y validaciones, accesibilidad, SEO.</li>
        <li>CSS3: Diseño de sitios web estáticos y responsivos, animaciones y transiciones.</li>
        <li>JavaScript: EcmaScript, manipulación del DOM, Fetch API, POO.</li>
        <li>TypeScript: Mejora del desarrollo.</li>
        <li>Node.js, Nest.js y Express: Desarrollo backend y APIs REST.</li>
        <li>React y Next.js: Desarrollo frontend, SSR.</li>
        <li>Bases de Datos Relacionales: PostgreSQL, conexión de bases de datos con API REST, ORMs (TypeORM).</li>
      </ul>
    </div>
    <div className="skills-category">
      <h3>Herramientas y Control de Versiones:</h3>
      <ul>
        <li> Git, GitHub.</li>
        <li>Administradores de Paquetes: NPM, Yarn, Bun.</li>
        <li>Herramientas de Construcción: Vite, Webpack.</li>
        <li>Entornos de Ejecución: Node.js.</li>
        <li>Diseño UX/UI: Figma, mejores prácticas.</li>
        <li>Seguridad Web: HTTPS, CORS, JWT, OAuth.</li>
      </ul>
    </div>
    <div className="skills-category">
      <h3>Metodologías y DevOps:</h3>
      <ul>
        <li>Metodologías Ágiles: Scrum.</li>
        <li>Patrones de Diseño: Principios SOLID, UML.</li>
        <li>Contenedores: Docker.</li>
        <li>Nube Básica: AWS.</li>
      </ul>
    </div>
    <div className="skills-category">
      <h3>Redes e Internet:</h3>
      <ul>
        <li>Conceptos de Internet: Funcionamiento de Internet, HTTP, nombres de dominio, hosting, DNS y su funcionamiento, navegadores y su funcionamiento.</li>
      </ul>
    </div>
  </section>
  </div>
);

export default Skills;
