import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../stylesheets/MenuPage.css';
import '../App.css';

const MenuPage = () => {
  const [telonBajado, setTelonBajado] = useState(false);
  const [telonSubiendo, setTelonSubiendo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTelonBajado(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseClick = () => {
    setTelonSubiendo(true);

    setTimeout(() => {
      navigate('/portfolio'); 
    }, 300); 
  };

  return (
    <>    
        <div className={`menuPage ${telonBajado ? 'menuPageDown' : 'initialHide'} ${telonSubiendo ? 'menuPageUp' : ''}`} >
        <Link className='menu-span' to='/portfolio' onClick={handleCloseClick}>CERRAR</Link>
        <div className='container'>
          <Link className='menuOptions' to='/AboutMe'>Sobre Mí</Link>
          <br></br>
          <Link className='menuOptions' to='/Projects'>Proyectos</Link>
          <br></br>
          <Link className='menuOptions' to='/Contacto'>Contacto</Link>
        </div>
        <div className="contactInfo container">
          <a style={{ textDecoration: 'none' }} href='mailto:mnazarethg@gmail.com'>mnazarethg@gmail.com</a>
          <a style={{ textDecoration: 'none' }} href='https://wa.me/34675148483'>+34 675 14 84 83</a>
        </div>
      </div>
    </>
  );
};

export default MenuPage;