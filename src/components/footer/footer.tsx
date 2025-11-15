import './footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">Magda Castro</h2>
      <p className="footer-description">Explorando lo macabro y psicológico desde el arte</p>
      <div className="footer-socials">
        <a href="https://www.instagram.com/magdacastro.art" target="_blank" rel="noopener noreferrer" className="footer-link"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/magda.nayiber.castro" target="_blank" rel="noopener noreferrer" className="footer-link"><i className="fa-brands fa-facebook"></i></a>
      </div>
      <p>© 2024 Magda Castro. Todos los derechos reservados.</p>
    </footer>
  );
};
