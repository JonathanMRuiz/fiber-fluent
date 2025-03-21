import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Íconos de menú
import styles from "./styles";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Cerrar el menú cuando cambia la ruta
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link to="/">
          <img
            src="https://fiberfluent.com/wp-content/uploads/2025/01/qtq_95-1.webp"
            alt="Logo"
            className={styles.logo}
          />
        </Link>

        {/* Menú Desktop */}
        <ul className={styles.navList}>
          {["/", "/about-us", "/contact"].map((path, index) => (
            <li key={index}>
              <Link
                to={path}
                className={`${styles.navLink} ${location.pathname === path ? styles.activeNavLink : ""}`}
              >
                {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botón de menú Mobile */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menú Mobile */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.visibleMobileMenu : styles.hiddenMobileMenu}`}
      >
        {["/", "/about-us", "/contact"].map((path, index) => (
          <Link
            key={index}
            to={path}
            className={`${styles.navLink} ${location.pathname === path ? styles.activeNavLink : ""}`}
            onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú cuando se selecciona un enlace
          >
            {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
}
