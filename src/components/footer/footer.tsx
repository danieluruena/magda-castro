import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './footer.css'
import './footer.mobile.css'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">Magda Castro</h2>
      <p className="footer-description">Explorando lo macabro y psicológico desde el arte</p>
      <div className="footer-socials">
        <a href="https://www.instagram.com/magdacastro.art" target="_blank" rel="noopener noreferrer" className="footer-link"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.facebook.com/magda.nayiber.castro" target="_blank" rel="noopener noreferrer" className="footer-link"><FontAwesomeIcon icon={faFacebook} /></a>
      </div>
      <p>© 2024 Magda Castro. Todos los derechos reservados.</p>
    </footer>
  )
}
