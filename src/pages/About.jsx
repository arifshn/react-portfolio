import { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "animate.css";

const SkillItem = ({ name, percent, icon, color, isDark }) => {
  const [isSkillVisible, setIsSkillVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSkillVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div className="col">
      <div
        ref={itemRef}
        className={`skill-card p-4 rounded shadow-sm h-100 ${
          isDark ? "bg-dark-card text-light" : "bg-light-card text-dark"
        } ${
          isSkillVisible
            ? "animate__animated animate__fadeInLeft"
            : "hidden-on-load"
        }`}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fs-5 fw-bold">
            <i className={`${icon} me-3`} style={{ color: color }}></i>
            {name}
          </span>
          <span className="fw-bold">{percent}%</span>
        </div>
        <div
          className="progress"
          style={{
            height: "10px",
            backgroundColor: isDark ? "#455a64" : "#e0e0e0",
          }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: isSkillVisible ? `${percent}%` : "0%",
              backgroundColor: color,
              transition: "width 1.5s ease-out",
            }}
            aria-valuenow={percent}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const skills = [
    { name: "React", icon: "bi bi-braces", percent: 85, color: "#61DAFB" },
    {
      name: "JavaScript (ES6+)",
      icon: "bi bi-file-earmark-code",
      percent: 80,
      color: "#F7DF1E",
    },
    {
      name: "HTML & CSS",
      icon: "bi bi-filetype-html",
      percent: 90,
      color: "#E34C26",
    },
    {
      name: "Bootstrap & Tailwind",
      icon: "bi bi-bootstrap",
      percent: 75,
      color: "#7952B3",
    },
    { name: "Git & GitHub", icon: "bi bi-git", percent: 70, color: "#F05032" },
    { name: "Docker & CI/CD Temelleri", percent: 65, color: "#2496ED" },
    {
      name: "Redux & Context API",
      icon: "bi bi-diagram-3",
      percent: 75,
      color: "#764ABC",
    },
    {
      name: "Restful API Entegrasyonu",
      icon: "bi bi-cloud-arrow-up",
      percent: 80,
      color: "#00ADB5",
    },
  ];

  return (
    <div
      id="about"
      className={`bg-${theme} text-${
        isDark ? "light" : "dark"
      } min-vh-100 py-5 d-flex align-items-center`}
    >
      <div className="container">
        <h1 className="text-center mb-5 animate__animated animate__fadeInDown">
          Hakkımda
        </h1>

        <div
          className={`row align-items-center about-card p-4 shadow-lg rounded mb-5 animate__animated animate__fadeInUp ${
            isDark ? "bg-dark-card" : "bg-light-card"
          }`}
        >
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQEs1bWSbtKOGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731097668062?e=1757548800&v=beta&t=9d529s6Pni51Kh3559YHZeGwF382GATalrzUTZQZN6g"
              alt="Profile"
              className="img-fluid rounded-circle shadow-lg profile-img animate__animated animate__zoomIn"
            />
          </div>
          <div className="col-md-8 p-4">
            <h2 className="mb-3 display-5 fw-bold animate__animated animate__fadeInRight animate__delay-1s">
              Merhaba, ben Arif!
            </h2>
            <p className="lead animate__animated animate__fadeInRight animate__delay-1-5s">
              Ben bir <strong>Frontend Developer</strong>'ım. React, JavaScript
              (ES6+), HTML & CSS gibi modern web teknolojileriyle kullanıcı
              dostu, etkileşimli ve performansı yüksek arayüzler geliştiriyorum.
            </p>
            <p className="animate__animated animate__fadeInRight animate__delay-2s">
              Üniversitede <strong>Yönetim Bilişim Sistemleri</strong> eğitimimi
              tamamladım, edindiğim teorik bilgileri freelance projeler ve
              kişisel uygulamalarla pratiğe döküyorum. Kod yazmak, sürekli yeni
              teknolojiler öğrenmek ve ürettiğim ürünlerin kullanıcılar üzerinde
              pozitif bir etki yaratması benim için büyük bir tutku ve
              motivasyon kaynağı.
            </p>
            <p className="animate__animated animate__fadeInRight animate__delay-2-5s">
              Hedefim, kullanıcı deneyimini her zaman merkeze alan estetik ve
              işlevsel web uygulamaları geliştirmek, yazılım geliştirme
              süreçlerinde en iyi pratikleri uygulamak ve özellikle **DevOps**
              süreçlerine aktif katkı sağlayarak yazılımın tüm yaşam döngüsünde
              yer almaktır. Problem çözme becerim ve öğrenmeye olan hevesimle
              her projeye değer katmaya çalışıyorum.
            </p>
          </div>
        </div>

        <h3 className="mb-4 text-center animate__animated animate__fadeInDown animate__delay-3s">
          Yetenekler
        </h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
          {skills.map((skill) => (
            <SkillItem key={skill.name} {...skill} isDark={isDark} />
          ))}
        </div>

        <h3 className="mb-4 text-center animate__animated animate__fadeInDown animate__delay-4s">
          Tecrübe & Eğitim
        </h3>
        <div className="timeline">
          <div
            className={`timeline-item animate__animated animate__fadeInUp animate__delay-4-5s ${
              isDark ? "timeline-item-dark" : ""
            }`}
          >
            <div className="timeline-dot"></div>
            <div
              className={`timeline-content p-4 rounded shadow-sm ${
                isDark ? "bg-dark-card" : "bg-light-card"
              }`}
            >
              <span className="timeline-date text-muted">
                Eylül 2021 - Mayıs 2025
              </span>
              <h4 className="fw-bold mt-2">
                Yönetim Bilişim Sistemleri Lisans
              </h4>
              <p className="text-primary mb-2">
                Burdur Mehmet Akif Ersoy Üniversitesi
              </p>
              <p>
                Yönetim Bilişim Sistemleri bölümünden mezun oldum. Eğitim
                hayatım boyunca yazılım geliştirme, veri analizi ve bilgi
                sistemleri yönetimi konularında hem teorik hem pratik birçok
                deneyim kazandım.
              </p>
            </div>
          </div>

          <div
            className={`timeline-item animate__animated animate__fadeInUp animate__delay-5s ${
              isDark ? "timeline-item-dark" : ""
            }`}
          >
            <div className="timeline-dot"></div>
            <div
              className={`timeline-content p-4 rounded shadow-sm ${
                isDark ? "bg-dark-card" : "bg-light-card"
              }`}
            >
              <span className="timeline-date text-muted">
                Ocak 2025 - Devam Ediyor
              </span>
              <h4 className="fw-bold mt-2">Freelance Frontend Developer</h4>
              <p className="text-primary mb-2">Çeşitli Projeler</p>
              <p>
                Müşteriler için özel web siteleri ve kullanıcı arayüzleri
                geliştirerek, gerçek dünya projelerinde deneyim kazanıyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
