import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SobreMi } from './components/sobre-mi/sobre-mi';
import { Servicios } from './components/servicios/servicios';
import { Contacto } from './components/contacto/contacto';
import { Inicio } from './components/inicio/inicio';
import { Header } from './components/header/header';
import { Galeria } from './components/galeria/galeria';
import { Tienda } from './components/tienda/tienda';
import { Blog } from './components/blog/blog';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;