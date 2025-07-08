import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import "animate.css";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const textColor = isDark ? "light" : "dark";

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`footer-modern py-5 border-top border-${
        isDark ? "secondary-subtle" : "light-subtle"
      } animate__animated animate__fadeInUp bg-${theme} text-${textColor}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <h5 className="text-uppercase fw-bold mb-4 footer-title">
              Hakkımda
            </h5>
            <p className="footer-text">
              Yaratıcı ve kullanıcı odaklı web deneyimleri geliştiren bir
              Front-End Developer'ım. Modern teknolojilerle estetik ve işlevsel
              arayüzler tasarlamayı seviyorum.
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <h5 className="text-uppercase fw-bold mb-4 footer-title">
              Hızlı Bağlantılar
            </h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link
                  to="/"
                  className={`text-decoration-none text-${textColor} footer-link`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`text-decoration-none text-${textColor} footer-link`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`text-decoration-none text-${textColor} footer-link`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`text-decoration-none text-${textColor} footer-link`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <h5 className="text-uppercase fw-bold mb-4 footer-title">
              İletişim
            </h5>
            <ul className="list-unstyled mb-4">
              <li className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                <i className="bi bi-geo-alt-fill me-2 text-primary"></i> Mersin,
                Türkiye
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                <i className="bi bi-envelope-fill me-2 text-primary"></i>{" "}
                <a
                  href="mailto:arifsahin@example.com"
                  className={`text-decoration-none text-${textColor} footer-link`}
                >
                  habibarifsahin@gmail.com
                </a>
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                <i className="bi bi-phone-fill me-2 text-primary"></i>{" "}
                <a
                  href="tel:+905551234567"
                  className={`text-decoration-none text-${textColor} footer-link`}
                >
                  +90 544 103 27 43
                </a>
              </li>
            </ul>

            <h5 className="text-uppercase fw-bold mb-3 footer-title">
              Beni Takip Edin
            </h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 social-icons">
              <a
                className={`footer-social-icon text-${textColor} animate__animated animate__zoomIn`}
                href="https://github.com/arifshn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github fs-4"></i>
              </a>
              <a
                className={`footer-social-icon text-${textColor} animate__animated animate__zoomIn animate__delay-0-2s`}
                href="https://www.linkedin.com/in/arif-%C5%9Fahin-8890b6329/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
              <a
                className={`footer-social-icon text-${textColor} animate__animated animate__zoomIn animate__delay-0-4s`}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`text-center p-4 mt-5 copyright-section border-top border-${
          isDark ? "secondary-subtle" : "light-subtle"
        }`}
      >
        © {currentYear} Copyright:
        <a
          className={`text-${textColor} fw-bold ms-2`}
          href="https://arifsahin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arif Şahin
        </a>
      </div>
    </footer>
  );
}
