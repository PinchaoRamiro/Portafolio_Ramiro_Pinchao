import React from 'react';
import Imagen from '../assets/profile.jpg';
import '../styles/home.css';


const Header: React.FC = () => (
  <header className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={Imagen} alt="Profile-image" className="profile-image"></img>
        <div className="profile_info">
          <h1>Ramiro Antonio Pinchao Chachinoy</h1>
          <p>Full stack web developer</p>
        </div>
      </div>
      <div className="flip-card-back">
        <div>
          <h2>About Me </h2>
          <p>
          As a full stack web developer, my goal is to apply my knowledge in frontend and backend technologies, along with my experience in version control, databases, multiple backend and frontend technologies, programming languages and agile methodologies to create robust and scalable web applications. I aspire to contribute in collaborative teams using object-oriented programming principles and good development practices, while continuing to expand my skills in networking, SEO optimization, DevOps and all technologies that apply to a given area of work. I am committed to continuous learning and adapting to new technologies to deliver innovative and efficient solutions.
          </p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
