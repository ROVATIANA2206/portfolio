import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// Importez votre fichier CSS global
import './global.css'; // Assurez-vous d'avoir ce fichier

function App() {
  return (
    <Router>
      <div className="app w-full min-h-screen overflow-x-hidden">
        {/* Navbar fixe */}
        <Navbar />
        
        {/* Contenu principal - ajoutez pt-16 pour compenser la navbar fixe */}
        <main className="w-full pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;