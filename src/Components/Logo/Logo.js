import React from 'react';
import camera from './camera.png';
import './Logo.css';

const Logo = () => {
   return (
      <div>
         <div className="logo-container"> <img src={camera} alt="logo" /></div>
      </div>
   )
}

export default Logo
