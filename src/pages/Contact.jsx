import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "animate.css";

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mzzgleln", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setFormStatus("error");
        console.error("Form gönderim hatası:", data);
      }
    } catch (error) {
      setFormStatus("error");
      console.error("Ağ hatası:", error);
    }
  };

  return (
    <div
      id="contact"
      className={`bg-${theme} text-${
        isDark ? "light" : "dark"
      } min-vh-100 py-5 d-flex align-items-center`}
    >
      <div className="container">
        <h1 className="text-center mb-5 animate__animated animate__fadeInDown">
          İletişim
        </h1>

        <div className="row justify-content-center g-4">
          <div className="col-lg-5 col-md-6 animate__animated animate__fadeInLeft animate__delay-0-3s">
            <div
              className={`contact-info-card p-5 rounded shadow-lg h-100 d-flex flex-column justify-content-between ${
                isDark ? "bg-dark-card" : "bg-light-card"
              }`}
            >
              <div>
                <h3 className="mb-4 fw-bold" style={{ color: "#00ADB5" }}>
                  Bana Ulaşın
                </h3>
                <p className="lead mb-4">
                  Projeleriniz veya aklınızdaki herhangi bir konu hakkında
                  konuşmak için sabırsızlanıyorum. Mesajınızı göndermekten
                  çekinmeyin!
                </p>

                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope-fill display-6 me-3 text-primary"></i>
                  <div>
                    <h6 className="mb-0">Email</h6>
                    <p className="mb-0">
                      <a
                        href="mailto:arifsahin@example.com"
                        className={`text-decoration-none text-${
                          isDark ? "light" : "dark"
                        }`}
                      >
                        habibarifsahin@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-phone-fill display-6 me-3 text-primary"></i>
                  <div>
                    <h6 className="mb-0">Telefon</h6>
                    <p className="mb-0">
                      <a
                        href="tel:+905551234567"
                        className={`text-decoration-none text-${
                          isDark ? "light" : "dark"
                        }`}
                      >
                        +90 544 103 27 43
                      </a>
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt-fill display-6 me-3 text-primary"></i>
                  <div>
                    <h6 className="mb-0">Konum</h6>
                    <p className="mb-0">Mersin, Türkiye</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-top border-secondary-subtle">
                <h6 className="mb-3">Sosyal Medyada Beni Takip Edin:</h6>
                <div className="d-flex gap-4">
                  <a
                    href="https://github.com/arifshn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon-link fs-3 text-${
                      isDark ? "light" : "dark"
                    }`}
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arif-%C5%9Fahin-8890b6329/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon-link fs-3 text-${
                      isDark ? "light" : "dark"
                    }`}
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon-link fs-3 text-${
                      isDark ? "light" : "dark"
                    }`}
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-6 animate__animated animate__fadeInRight animate__delay-0-3s">
            <form
              onSubmit={handleSubmit}
              className={`p-5 rounded shadow-lg h-100 ${
                isDark ? "bg-dark-card" : "bg-light-card"
              }`}
            >
              <h3 className="mb-4 fw-bold" style={{ color: "#00ADB5" }}>
                Mesaj Bırakın
              </h3>
              <div className="mb-4">
                <label htmlFor="name" className="form-label fw-bold">
                  İsminiz
                </label>
                <input
                  type="text"
                  className={`form-control form-control-lg ${
                    isDark ? "form-control-dark" : ""
                  }`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız Soyadınız"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-bold">
                  Email Adresiniz
                </label>
                <input
                  type="email"
                  className={`form-control form-control-lg ${
                    isDark ? "form-control-dark" : ""
                  }`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-bold">
                  Mesajınız
                </label>
                <textarea
                  className={`form-control form-control-lg ${
                    isDark ? "form-control-dark" : ""
                  }`}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Buraya mesajınızı yazın..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 custom-contact-btn"
              >
                <i className="bi bi-send-fill me-2"></i> Mesajı Gönder
              </button>

              {formStatus === "success" && (
                <div
                  className="alert alert-success mt-4 animate__animated animate__fadeIn"
                  role="alert"
                >
                  Mesajınız başarıyla gönderildi! Teşekkür ederiz.
                </div>
              )}
              {formStatus === "error" && (
                <div
                  className="alert alert-danger mt-4 animate__animated animate__fadeIn"
                  role="alert"
                >
                  Mesajınız gönderilirken bir hata oluştu. Lütfen tekrar
                  deneyin.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
