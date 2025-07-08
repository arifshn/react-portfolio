import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "animate.css";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <div
      id="home"
      className={`d-flex flex-column justify-content-center align-items-center text-center text-${
        isDark ? "light" : "dark"
      } position-relative overflow-hidden`}
      style={{ minHeight: "90vh", padding: "2rem 0" }}
    >
      <div className="modern-background"></div>

      <div className="container position-relative z-1">
        <h1
          className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown"
          style={{ color: "#00ADB5" }}
        >
          Merhaba, Ben <span className="text-primary">Arif Şahin</span>
        </h1>
        <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
          Yaratıcı ve kullanıcı odaklı web deneyimleri geliştiren bir Front-End
          Developer'ım. Modern teknolojilerle estetik ve işlevsel arayüzler
          tasarlamayı seviyorum.
        </p>

        <div className="d-flex justify-content-center gap-3 animate__animated animate__fadeInUp animate__delay-2s">
          <a
            href="/Projects"
            className="btn btn-primary btn-lg rounded-pill px-4 py-2 custom-btn-primary"
          >
            Projelerimi Keşfet
          </a>
          <a
            href="/Contact"
            className="btn btn-lg rounded-pill px-4 py-2 custom-btn-outline"
          >
            İletişime Geç
          </a>
        </div>

        <div className="mt-5 animate__animated animate__fadeInUp animate__delay-3s">
          <a
            href="https://github.com/arifshn"
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-3 text-${
              isDark ? "light" : "dark"
            } social-icon-link`}
          >
            <i className="bi bi-github display-6"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/arif-%C5%9Fahin-8890b6329/"
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-3 text-${
              isDark ? "light" : "dark"
            } social-icon-link`}
          >
            <i className="bi bi-linkedin display-6"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={`mx-3 text-${
              isDark ? "light" : "dark"
            } social-icon-link`}
          >
            <i className="bi bi-twitter display-6"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
