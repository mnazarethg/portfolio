import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../stylesheets/AboutMe.css';
import Header from './Header';
import photo from '../assets/photo.jpeg';
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
      <div className='container-about-me'>
        <div >
          <h1>María Nazareth Monti Gimenez.</h1>
          <img className='photo' src={photo} alt="María Nazareth Monti Gimenez" />
          <div>  
            <div >
              <Link to='/' className="links">CURRICULUM VITAE</Link>
            </div>
          </div>
          <div >
            <h4>Tecnologias</h4>
            <img className='technology' src={reactLogo} alt="React" />
            <img className='technology' src={reactNativeLogo} alt="React Native" />
            <img className='technology' src={css} alt="CSS" />
            <img className='technology' src={express} alt="Express" />
            <img className='technology' src={html} alt="HTML" />
            <img className='technology' src={javascript} alt="Java Script" />
            <img className='technology' src={mongo} alt="Mongo" />
            <img className='technology' src={node} alt="Node" />
            <img className='technology' src={odoo} alt="Odoo" />
            <img className='technology' src={python} alt="Python" />
          </div>
          
        </div>
        <div >
          <p>Mi interés por la programación comenzó en el ámbito académico, en la Universidad de Granada, donde adquirí conocimientos en lenguajes orientados a analítica para la investigación y la ciencia. Posteriormente, en Nanobytes, tuve la oportunidad de fortalecer estas habilidades en una empresa tecnológica.</p>
          <p>En mi rol actual, desarrollo de aplicaciones multiplataforma; a partir de los requerimientos del diseño UX/UI, transformando ideas en soluciones tangibles.</p>
        </div> 
      </div>
    </div>

 
    </>
  );
}

export default AboutMe;
