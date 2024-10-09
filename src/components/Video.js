import React from 'react';
import { useParams } from 'react-router-dom';
import backHomeVideo from '../assets/back_home.mp4';
import backHomeVideo2 from '../assets/back_home2.mp4';
import partnersOdooVideo from '../assets/partners_odoo.mp4';


const proyectos = [
  { id: '1', project:  [backHomeVideo, backHomeVideo2]  },
  { id: '2', project: partnersOdooVideo },
];

function Video() {
  let { projectId } = useParams();
  const proyecto = proyectos.find(p => p.id === projectId);

  return (
    <div>
    {proyecto ? (
      <>
        {Array.isArray(proyecto.project) ? (
          proyecto.project.map((video, index) => (
            <video
                key={index}
                style={{
                  width: index === 0 ? '100%' : '100%',
                  maxWidth: index === 0 ? '400px' : '1000px', 
                  height: 'auto',
                  margin: '10px auto',
                  display: 'block',
                }}
                src={video}
                controls
              />
          ))
        ) : (
          <video
            style={{ width: '75%', margin: '10px auto', display: 'block' }} 
            src={proyecto.project}
            controls
          />
        )}
      </>
    ) : (
      <p>Proyecto no encontrado</p>
    )}
  </div>
   );
}

export default Video;