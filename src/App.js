import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contacto from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import PrincipalPage from './components/PrincipalPage';
import Video from './components/Video';

function App() {

  return (
    <>
    <Router>
        <Header />
        <Routes>
        <Route path="/portfolio" element={<PrincipalPage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<Video />} />
        <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
