import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import AboutMe from './pages/AboutMe';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import PrincipalPage from './pages/PrincipalPage';


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
