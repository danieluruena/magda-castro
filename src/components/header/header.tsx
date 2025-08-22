import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';

export const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="header">
      {
        location.pathname === '/' && (
          <div className="video-container">
            <video className="bg-video" autoPlay muted loop src="/vbg.mp4">
            </video>
          </div>
        )
      }
      <div className="header-content">
        <NavLink to="/">
          <img src="/logo_blanco.png" alt="Magda Castro" className="logo" />
        </NavLink>
        <nav className="nav">
          <ul className="nav-list">
            <li><NavLink to="/" className="nav-link">Inicio</NavLink></li>
            <li><NavLink to="/galeria" className="nav-link">Galería</NavLink></li>
            <li className="nav-item-with-submenu">
              <NavLink to="/servicios" className="nav-link">Servicios</NavLink>
              <ul className="submenu">
                <li>
                  <NavLink to="/servicios#obras-personalizadas" className="nav-link">Obras personalizadas</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios#diseno-personajes-trajes" className="nav-link">Diseño de personajes y trajes</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios#performance-en-vivo" className="nav-link">Performance en vivo</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios#charlas-talleres" className="nav-link">Charlas y talleres</NavLink>
                </li>
              </ul>
            </li>
            <li><NavLink to="/sobre-mi" className="nav-link">Sobre mí</NavLink></li>
            <li><NavLink to="/tienda" className="nav-link">Tienda</NavLink></li>
            <li><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
            <li><NavLink to="/contacto" className="nav-link">Contacto</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
