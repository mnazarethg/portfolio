import React from 'react';
import backgroundImage from '../assets/code.png';

function PrincipalPage() {
    return (
      <>
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
      }}>
      </div>
      </>
)}
export default PrincipalPage;
