import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuPage.css';

const MenuPage = () => {
  const [telonBajado, setTelonBajado] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTelonBajado(true);
    }, 50); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <div className={`menuPage ${telonBajado ? 'menuPageDown' : 'initialHide'}`} >
        <ul>
          <li><Link to="/AboutMe">Sobre Mí</Link></li>
          <li><Link to="/Proyectos">Proyectos</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
        </ul>
      </div>
    </>
  );
};

export default MenuPage;
