import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Matrice del Destino
          </Link>

          <p>
            Scopri il significato dei numeri e degli Arcani
            legati alla tua data di nascita.
          </p>
        </div>

        <nav className="footer-links" aria-label="Navigazione footer">
          <Link to="/tarocchi">Tarocchi</Link>
          <Link to="/contatti">Contatti</Link>
          <Link to="#">Privacy</Link>
        </nav>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Matrice del Destino - Made by Giulia Mariano</span>
        <span>Interpretazione e conoscenza di sé</span>
      </div>
    </footer>
  );
}

export default Footer;