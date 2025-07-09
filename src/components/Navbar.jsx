import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Logo from "./Logo.jsx"; // Logo.jsx dosya uzantısı eklendi
import { NavLink } from "react-router-dom";
import ThemeSelector from "./ThemeSelector.jsx"; // ThemeSelector.jsx dosya uzantısı eklendi
import "animate.css"; // Animate.css import'u korunuyor

export default function Navbar() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top modern-navbar shadow-sm animate__animated animate__fadeInDown bg-${theme} text-${
        isDark ? "light" : "dark"
      } border-bottom border-${isDark ? "secondary-subtle" : "light-subtle"}`}
      data-bs-theme={theme}
    >
      {/* Bootstrap'in flexbox sınıflarını kullanarak içeriği hizala */}
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink
          className="navbar-brand me-auto animate__animated animate__fadeInLeft"
          to="/"
          onClick={handleNavLinkClick}
        >
          <Logo />
        </NavLink>

        {/* Navbar Toggler Button */}
        <button
          // position-relative sınıfı, içindeki ikonun konumlandırılmasına yardımcı olabilir
          className="navbar-toggler animate__animated animate__fadeInRight position-relative"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Collapse Content */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isNavOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `nav-link active-nav-link text-primary animate__animated animate__fadeInRight animate__delay-0-2s`
                    : `nav-link animate__animated animate__fadeInRight animate__delay-0-2s`
                }
                to="/"
                onClick={handleNavLinkClick}
              >
                Ana Sayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `nav-link active-nav-link text-primary animate__animated animate__fadeInRight animate__delay-0-2s`
                    : `nav-link animate__animated animate__fadeInRight animate__delay-0-2s`
                }
                to="/About"
                onClick={handleNavLinkClick}
              >
                Hakkımda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `nav-link active-nav-link text-primary animate__animated animate__fadeInRight animate__delay-0-2s`
                    : `nav-link animate__animated animate__fadeInRight animate__delay-0-2s`
                }
                to="/Projects"
                onClick={handleNavLinkClick}
              >
                Projeler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `nav-link active-nav-link text-primary animate__animated animate__fadeInRight animate__delay-0.2s`
                    : `nav-link animate__animated animate__fadeInRight animate__delay-0.2s`
                }
                to="/Contact"
                onClick={handleNavLinkClick}
              >
                İletişim
              </NavLink>
            </li>
            <li className="nav-item ms-lg-3 animate__animated animate__fadeInRight animate__delay-0.2s">
              <ThemeSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
