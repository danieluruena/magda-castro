import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { getImagePath } from '../../utils/getBasePath'
import './header.css'
import './header.mobile.css'
import '../../common.css'

export const Header: React.FC = () => {
  useScrollAnimation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const location = useLocation()

  const handleServicesClick = (e: React.MouseEvent) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      setIsSubmenuOpen(!isSubmenuOpen)
    }
  }

  const headerStyle = location.pathname !== '/' ? { backgroundImage: `url('${getImagePath('fondo_rojo.webp')}')` } : undefined

  return (
    <header className="header" style={headerStyle}>
      <div className="header-content">
        <NavLink className="logo-link" to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={getImagePath('logo-dorado.webp')} alt="Magda Castro" className="logo" />
        </NavLink>
        <button className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-logo">
            <img src="assets/logo-dorado.webp" alt="Magda Castro" />
          </div>
          <ul className="nav-list">
            <li><NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Inicio</NavLink></li>
            <li><NavLink to="/galeria" className="nav-link" onClick={() => setIsMenuOpen(false)}>Galería</NavLink></li>
            <li className="nav-item-with-submenu">
              <NavLink to="/servicios" className="nav-link" onClick={handleServicesClick}>Servicios</NavLink>
              <ul className={`submenu ${isSubmenuOpen ? 'submenu-open' : ''}`}>
                <li>
                  <NavLink to="/servicios#obras-personalizadas" className="nav-link" onClick={() => setIsMenuOpen(false)}>Obras personalizadas</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios#diseno-personajes-trajes" className="nav-link" onClick={() => setIsMenuOpen(false)}>Diseño de personajes y trajes</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios#performance-en-vivo" className="nav-link" onClick={() => setIsMenuOpen(false)}>Performance en vivo</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios#charlas-talleres" className="nav-link" onClick={() => setIsMenuOpen(false)}>Charlas y talleres</NavLink>
                </li>
              </ul>
            </li>
            <li><NavLink to="/sobre-mi" className="nav-link" onClick={() => setIsMenuOpen(false)}>Sobre mí</NavLink></li>
            {/* <li><NavLink to="/tienda" className="nav-link" onClick={() => setIsMenuOpen(false)}>Tienda</NavLink></li>
            <li><NavLink to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</NavLink></li> */}
            <li><NavLink to="/contacto" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contacto</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
