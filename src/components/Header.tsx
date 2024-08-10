import React from 'react';
import Imagen from '../assets/Ramiro_Pinchao_Foto.webp'


const Header: React.FC = () => (
  <header>
    <a href='https://github.com/PinchaoRamiro'><img src={Imagen} alt="Profile-image" className="profile-image"></img></a>
    <h1>Ramiro Antonio Pinchao Chachinoy</h1>
    <p>Full stack web developer</p>
  </header>
);

export default Header;
