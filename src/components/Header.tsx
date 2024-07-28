import React from 'react';
import Imagen from '../assets/Ramiro_Pinchao_Foto.webp'


const Header: React.FC = () => (
  <header>
    <img src={Imagen} alt="Profile" className="profile-image"></img>
    <h1>Ramiro Antonio Pinchao Chachinoy</h1>
    <p>Desarrollador Web Full Stack</p>
  </header>
);

export default Header;
