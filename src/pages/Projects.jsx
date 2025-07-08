import { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "animate.css";

const ProjectItem = ({ project, isDark }) => {
  const [isProjectVisible, setIsProjectVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsProjectVisible(true);
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
        className={`project-card card h-100 shadow-lg border-0 ${
          isDark ? "bg-dark-card text-light" : "bg-light-card text-dark"
        } ${
          isProjectVisible
            ? "animate__animated animate__fadeInUp"
            : "hidden-on-load"
        }`}
      >
        {project.image && (
          <img
            src={project.image}
            className="card-img-top project-image"
            alt={project.title}
          />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-primary">{project.title}</h5>
          <p className="card-text flex-grow-1">{project.description}</p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-3 d-flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`badge rounded-pill text-bg-${
                    isDark ? "info" : "primary"
                  } tech-badge`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto d-flex justify-content-start gap-2">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm custom-project-btn"
              >
                <i className="bi bi-box-arrow-up-right me-1"></i> Demoyu Gör
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-outline-${
                  isDark ? "light" : "dark"
                } btn-sm custom-project-btn`}
              >
                <i className="bi bi-github me-1"></i> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const allProjects = [
    {
      title: "E-commerce Web App",
      description:
        "Modern e-ticaret uygulaması, ürün listeleme, sepet ve ödeme entegrasyonu.",
      image:
        "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: [
        "Asp.Net",
        "Entity Framework",
        "MsSQL",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      githubLink: "https://github.com/arifshn/DotnetStore",
      demoLink: "https://demo.ecommerceapp.com",
      category: "Full-Stack",
    },
    {
      title: "React Movie App",
      description:
        "Socket.IO kullanarak anlık mesajlaşma özelliği sunan bir sohbet uygulaması.",
      image:
        "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Vite", "Html", "CSS", "Firebase"],
      githubLink: "https://github.com/arifshn/react-movie-app",
      demoLink: "https://demo.chatapp.com",
      category: "Frontend",
    },
    {
      title: "React Shopping List",
      description:
        "Açık hava durumu API'lerini kullanarak güncel hava durumu bilgilerini gösteren basit bir uygulama.",
      image:
        "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "API Integration", "Axios", "CSS"],
      githubLink: "https://github.com/arifshn/react-shopping-list",
      demoLink: "https://demo.weatherapp.com",
      category: "Frontend",
    },
    {
      title: "Load Balancer Java",
      description:
        "Load Balancer sistemini daha gelişmiş bir şekilde Java ve Kafka kullanarak geliştirdim. ",
      image:
        "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Jenkins", "Docker", "Git", "Bash Scripting"],
      githubLink: "https://github.com/arifshn/Load-Balancer-Java",
      demoLink: "https://demo.taskmanager.com",
      category: "DevOps",
    },
    {
      title: "Kafka PostgreSQL Entegrasyon",
      description:
        "Kafka kullanarak sipariş verilerini üreten ve PostgreSQL veritabanına kaydeden bir Java uygulaması",
      image:
        "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Kafka", "PostgreSQL", "Git", "Java", "Jenkins"],
      githubLink: "https://github.com/arifshn/Java-Project-2",
      demoLink: "",
      category: "DevOps",
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(allProjects.map((project) => project.category)),
  ];

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((project) => project.category === category)
      );
    }
  };

  return (
    <div
      id="projects"
      className={`bg-${theme} text-${
        isDark ? "light" : "dark"
      } min-vh-100 py-5`}
    >
      <div className="container">
        <h1 className="text-center mb-5 animate__animated animate__fadeInDown">
          Projelerim
        </h1>

        <div className="d-flex flex-wrap justify-content-center mb-5 gap-2 animate__animated animate__fadeIn animate__delay-1s">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn btn-lg rounded-pill px-4 py-2 filter-btn ${
                activeCategory === category ? "active-filter" : ""
              } ${isDark ? "btn-outline-light" : "btn-outline-dark"}`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredProjects.map((project, index) => (
            <ProjectItem
              key={project.title}
              project={project}
              isDark={isDark}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center mt-5">
            <p className="lead animate__animated animate__fadeIn animate__delay-1s">
              Seçili kategoriye ait proje bulunamadı.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
