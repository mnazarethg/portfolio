import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import '../stylesheets/AboutMe.css'; 
import '../stylesheets/Projects.css'; 
import Odoo from '../assets/odoo.png';
import Header from './Header'; 

function Projects() {
  const [telonSubiendo, setSubiendo] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setSubiendo(true);
    }, 50); 

    return () => clearTimeout(timer); 
  }, []);

  const proyectos = [
    {
      id: 1,
      image: Odoo,
      tittle: "Odoo Partners",
      description: `Módulo de Odoo diseñado para registrar y graficar las relaciones de los clientes con los partnes de Odoo desde el CRM. 
                    Incluye un modelo de datos completo a nivel de backend. La información se obtiene mediante el parseo de la página web oficial de Odoo, a partir de acciones planificadas. 
                    Ademas, el módulo integra funcionalidades de mensajería y seguimiento de actividades, permitiendo un registro detallado de interacciones.
                    Incluye traducciones al español.`,
      repository: "https://github.com/usuario/proyecto1",
      project: "./partners_odoo.mp4"
    },
    
    {
      id: 2,
      image: "ruta/a/imagen/proyecto2.jpg",
      tittle: "Back Home",
      description: "Deascripción breve del proyecto 2.",
      repository: "https://github.com/usuario/proyecto2",
      project: "https://proyecto2.com"
    },

  ];

  return (
    <>
      <Header style={{ color: 'blue' }}/>
      <div className={`menuPage ${telonSubiendo ? 'menuPageUp' : ''}`}>
      </div>
      <div style={{visibility: telonSubiendo ? 'visible' : 'hidden'}}>
      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="project-item">
            <div className="project-info">
              <h1>{proyecto.tittle}</h1>
              <img className='photo' src={proyecto.image} alt={proyecto.tittle} />
              <div >
              <a className='links' href={proyecto.repository} target="_blank" rel="noopener noreferrer">REPOSITORIO</a>
              </div>
              <div>
              <Link to={`/project/${encodeURIComponent(proyecto.project)}`}>PROYECTO</Link>
                </div>
            </div>
            <p>{proyecto.description}</p>
          </div>
         
        ))}
      </div>
    </div>
    </>
  );
}

export default Projects;