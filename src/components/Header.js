import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/MenuPage.css';

function Header() {
    const location = useLocation();

    const linkClassName = (location.pathname === '/AboutMe' || location.pathname === '/Projects') ? 'menu-span-blue' : 'menu-span';
  
  return (
    <nav>
         <Link className={linkClassName} to="/MenuPage">MENU</Link>
    </nav>
  );
};

export default Header;