import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";
import "animate.css";

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
      <div className="container">
        <NavLink
          className="navbar-brand me-auto animate__animated animate__fadeInLeft"
          to="/"
          onClick={handleNavLinkClick}
        >
          <Logo />
        </NavLink>

        <button
          className="navbar-toggler animate__animated animate__fadeInRight"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            isNavOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-3">
            {" "}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `nav-link active-nav-link text-primary animate__animated animate__fadeInRight animate__delay-0-5s`
                    : `nav-link animate__animated animate__fadeInRight animate__delay-0-5s`
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
                    ? `nav-link active-nav-link text-primary animate__animated animate__fadeInRight animate__delay-0-7s`
                    : `nav-link animate__animated animate__fadeInRight animate__delay-0-7s`
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
                    ? `nav-link active-nav-link text-primary animate__animated animate__fadeInRight animate__delay-0-9s`
                    : `nav-link animate__animated animate__fadeInRight animate__delay-0-9s`
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
                    ? `nav-link active-nav-link text-primary animate__animated animate__fadeInRight animate__delay-1-1s`
                    : `nav-link animate__animated animate__fadeInRight animate__delay-1-1s`
                }
                to="/Contact"
                onClick={handleNavLinkClick}
              >
                İletişim
              </NavLink>
            </li>
            <li className="nav-item ms-lg-3 animate__animated animate__fadeInRight animate__delay-1-3s">
              {" "}
              <ThemeSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
