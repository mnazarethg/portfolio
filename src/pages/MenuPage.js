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
      <Link className="menu-span" to="/">CERRAR</Link>
        <div>
          <Link className='menuOptions' to="/AboutMe">Sobre Mí</Link>
          <br></br>
          <Link className='menuOptions' to="/Proyectos">Proyectos</Link>
          <br></br>
          <Link className='menuOptions' to="/Contacto">Contacto</Link>
        </div>
        <div className="contactInfo">
          <p>mnazarethg@gmail.com</p>
          <p>+34675148483</p>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
