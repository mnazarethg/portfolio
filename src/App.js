import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import AboutMe from './components/AboutMe';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import PrincipalPage from './components/PrincipalPage';

function App() {

  return (
    <>
    <Router>
        <Header />
        <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
