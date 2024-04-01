import React, { useEffect, useState } from 'react';
import '../App.css';
import '../stylesheets/AboutMe.css';
import Header from './Header';
import photo from '../assets/photo.jpg';
import reactLogo from '../assets/react.png';
import reactNativeLogo from '../assets/react_native.png';
import css from '../assets/css.png';
import express from '../assets/express.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import mongo from '../assets/mongo.png';
import node from '../assets/node.png';
import odoo from '../assets/odoo.png';
import python from '../assets/python.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function AboutMe() {
  const [telonSubiendo, setSubiendo] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setSubiendo(true);
    }, 50); 

    return () => clearTimeout(timer); 
  }, []);

 
  return (
    <>
    <Header style={{ color: 'blue' }}/>
    <div className={`menuPage ${telonSubiendo ? 'menuPageUp' : ''}`}>
    </div>
    <div style={{visibility: telonSubiendo ? 'visible' : 'hidden'}}>
      <div className='container-about-me' style={{ backgroundColor: 'white', opacity: 1, zIndex: 1 }}>
        <div >
          <h1>María Nazareth Monti Gimenez.</h1>
          <h2>Compromiso por el desarrollo de soluciones tecnológicas integrales.</h2>
          <img className='photo' src={photo} alt="María Nazareth Monti Gimenez" />
          <div>
            <h4>Tecnologías:</h4>
            <div >
              <img className='tecnology' src={reactLogo} alt="React" />
              <img className='tecnology' src={reactNativeLogo} alt="React Native" />
              <img className='tecnology' src={css} alt="CSS" />
              <img className='tecnology' src={express} alt="Express" />
              <img className='tecnology' src={html} alt="HTML" />
              <img className='tecnology' src={javascript} alt="Java Script" />
              <img className='tecnology' src={mongo} alt="Mongo" />
              <img className='tecnology' src={node} alt="Node" />
              <img className='tecnology' src={odoo} alt="Odoo" />
              <img className='tecnology' src={python} alt="Python" />
            </div>
            <div className='container'>
              <button className="button-cv">DESCARGAR CV</button>
            </div>
          </div>
        </div>
        <div style={{ zIndex: 10, backgroundColor: 'white', opacity: 1 }}>
          <p>A lo largo de mi trayectoria profesional, he tenido el privilegio de contribuir al desarrollo de soluciones innovadoras en diversos ámbitos. En este camino, me he enfrentado a diversos desafíos que me han permitido desarrollar habilidades sólidas en resolución de problemas y comunicación efectiva.</p>
          <p>Mi interés por la programación comenzó en el ámbito académico, en la Universidad de Granada, donde adquirí conocimientos en lenguajes orientados a analítica para la investigación y la ciencia. Posteriormente, en Nanobytes, tuve la oportunidad de fortalecer estas habilidades en una empresa tecnológica.</p>
          <p>En mi rol actual, desarrollo de aplicaciones multiplataforma; a partir de los requerimientos del diseño UX/UI, transformando ideas en soluciones tangibles.</p>
          <p>Mi compromiso es continuar creciendo profesionalmente y a continuar aportando valor a cada proyecto en el que participo.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutMe;
