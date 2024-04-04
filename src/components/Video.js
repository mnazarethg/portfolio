import React from 'react';
import { useParams } from 'react-router-dom';
import backHomeVideo from '../assets/back_home.mp4';
import partnersOdooVideo from '../assets/partners_odoo.mp4';


const proyectos = [
  { id: '1', project: backHomeVideo },
  { id: '2', project: partnersOdooVideo },
];

function Video() {
  let { projectId } = useParams();
  const proyecto = proyectos.find(p => p.id === projectId);

  return (
    <div>
      {proyecto ? <video width="75%" style={{ margin:'10%', alignSelf: 'center'}}src={proyecto.project} controls /> : <p>Proyecto no encontrado</p>}
    </div>
  );
}

export default Video;