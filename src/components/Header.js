import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/MenuPage.css';

function Header() {
    const location = useLocation();

    const linkClassName = (location.pathname === '/portfolio' || location.pathname === '/MenuPage') ? 'menu-span' : 'menu-span-blue';
  
  return (
    <nav>
         <Link className={linkClassName} to="/MenuPage">MENU</Link>
    </nav>
  );
};

export default Header;