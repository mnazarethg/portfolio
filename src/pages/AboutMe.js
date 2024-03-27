import React, { useEffect, useState } from 'react';
import './MenuPage.css';

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
    <div className={`menuPage ${telonSubiendo ? 'menuPageUp' : ''}`}>
    </div>
    <div className="nombreContainer" style={{visibility: telonSubiendo ? 'visible' : 'hidden'}}>
      <h1>MARIA</h1>
    </div>
    </>
  );
}

export default AboutMe;
