import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

function Header() {
  const location = useLocation();

  return (
    <nav>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
        <Link className="menu-span" to="/MenuPage">MENU</Link>
   
    </nav>
  );
};

export default Header;