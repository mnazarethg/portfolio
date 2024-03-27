import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


function Header() {
  
  return (
    <nav>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
        <Link className="menu-span" to="/MenuPage">MENU</Link>    
    </nav>
  );
};

export default Header;