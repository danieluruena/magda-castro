import React from 'react';
import { NavLink } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './header.css';
import '../../common.css';

export const Header: React.FC = () => {
  useScrollAnimation();

  return (
    <header className="header">
      <div className="header-content">
        <NavLink className="logo-link" to="/">
          <img src="assets/logo_blanco.png" alt="Magda Castro" className="logo" />
        </NavLink>
        <nav className="nav fade-in">
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
