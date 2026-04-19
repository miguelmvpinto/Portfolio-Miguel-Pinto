import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaChartLine,
  FaFileAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaTools,
  FaShieldAlt,
  FaCar,
  FaCogs,
  FaRocket,
} from "react-icons/fa";
import "./App.css";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [showCV, setShowCV] = useState(false);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("hero");

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    fetch("https://api.github.com/users/miguelmvpinto/events")
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setEvents(data.slice(0, 6));
        }
      })
      .catch((err) => {
        console.log("GitHub API failed:", err);
      });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <Analytics />
      <nav className="navbar">
        <div className="logo text-color font-mono font-bold text-lg">
          {"<dev>"}
        </div>

        <ul>
          <li
            className={active === "hero" ? "active" : ""}
            onClick={() => scrollToSection("#hero")}
          >
            <FaHome /> Home
          </li>

          <li
            className={active === "about" ? "active" : ""}
            onClick={() => scrollToSection("#about")}
          >
            <FaUser /> About
          </li>

          <li
            className={active === "tech" ? "active" : ""}
            onClick={() => scrollToSection("#tech")}
          >
            <FaCode /> Tech
          </li>

          <li
            className={active === "projects" ? "active" : ""}
            onClick={() => scrollToSection("#projects")}
          >
            <FaProjectDiagram /> Projects
          </li>

          <li
            className={active === "activity" ? "active" : ""}
            onClick={() => scrollToSection("#activity")}
          >
            <FaChartLine /> Activity
          </li>

          <li
            className={active === "contact" ? "active" : ""}
            onClick={() => scrollToSection("#contact")}
          >
            <FaEnvelope /> Contact
          </li>
        </ul>
      </nav>

      <section id="hero" className="section hero-section">
        <div className="hero-text">
          <p className="intro">Hi, my name is</p>

          <h1>
            <span className="name">Miguel </span>
            <span className="text-color">Pinto</span>
          </h1>

          <p className="description">
            I build web apps and interactive experiences. Passionate about clean
            code, great UX, and game development.
          </p>

          <div className="buttons">
            <button
              onClick={() => scrollToSection("#projects")}
              className="btn-primary"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-image">
          <div className="circle">
            <img src="profile.png" alt="profile" />
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-container">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>

            <p>
              Hey, I'm Miguel, a developer who likes building clean, modern, and
              interactive applications.
            </p>

            <p>
              I'm finishing my degree in Computer Engineering and have worked
              across both web and game development. I enjoy creating projects
              that are functional but also visually engaging and easy to use.
            </p>

            <p>
              I'm currently looking for opportunities to grow, learn, and
              contribute to real projects while continuing to push my limits as
              a developer.
            </p>
          </div>

          <div className="about-card">
            <h3>Quick Facts</h3>

            <ul>
              <li>
                <FaGraduationCap /> Final-year Computer Engineering student
              </li>

              <li>
                <FaLaptopCode /> Focused on Web & Game Development
              </li>

              <li>
                <FaTools /> Experience with JavaScript, Node.js, Unity
              </li>

              <li>
                <FaShieldAlt /> Background in Cybersecurity
              </li>

              <li>
                <FaCar /> Formula 1 and car enthusiast
              </li>

              <li>
                <FaCogs /> Tank & military tech enjoyer
              </li>

              <li>
                <FaRocket /> Always learning and building new projects
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="tech" className="section tech-section">
        <div className="tech-container">
          <h2 className="section-title">Technologies</h2>
          <p className="tech-subtitle">
            Tools and technologies I use to bring ideas to life.
          </p>

          <div className="tech-grid">
            <div className="tech-card">
              <img src="https://cdn.simpleicons.org/C/19e6d5" alt="C" />
              <span>C</span>
            </div>

            <div className="tech-card">
              <img
                src="https://cdn.simpleicons.org/python/19e6d5"
                alt="Python"
              />
              <span>Python</span>
            </div>

            <div className="tech-card">
              <img
                src="https://cdn.simpleicons.org/javascript/19e6d5"
                alt="JavaScript"
              />
              <span>JavaScript</span>
            </div>

            <div className="tech-card">
              <img src="https://cdn.simpleicons.org/mysql/19e6d5" alt="MySQL" />
              <span>MySQL</span>
            </div>

            <div className="tech-card">
              <img src="https://cdn.simpleicons.org/html5/19e6d5" alt="HTML" />
              <span>HTML</span>
            </div>

            <div className="tech-card">
              <img src="https://cdn.simpleicons.org/css/19e6d5" alt="CSS" />
              <span>CSS</span>
            </div>

            <div className="tech-card">
              <img
                src="https://cdn.simpleicons.org/nodedotjs/19e6d5"
                alt="Node.js"
              />
              <span>Node.js</span>
            </div>

            <div className="tech-card">
              <img src="https://cdn.simpleicons.org/unity/19e6d5" alt="Unity" />
              <span>Unity</span>
            </div>

            <div className="tech-card">
              <img
                src="https://cdn.simpleicons.org/godotengine/19e6d5"
                alt="Godot"
              />
              <span>Godot</span>
            </div>

            <div className="tech-card">
              <img
                src="https://cdn.simpleicons.org/github/19e6d5"
                alt="GitHub"
              />
              <span>GitHub</span>
            </div>

            <div className="tech-card">
              <img src="https://cdn.simpleicons.org/jira/19e6d5" alt="Jira" />
              <span>Jira</span>
            </div>

            <div className="tech-card">
              <img src="https://cdn.simpleicons.org/figma/19e6d5" alt="Figma" />
              <span>Figma</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="projects-container">
          <h2 className="section-title">Projects</h2>
          <p className="projects-subtitle">
            A selection of projects I've worked on recently.
          </p>

          <div className="projects-grid">
            <a
              href="https://github.com/miguelmvpinto/FormulaClicker"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <div className="project-card">
                <div className="project-image">
                  <img src="formula-clicker.jpg" alt="Formula Clicker" />
                </div>

                <div className="project-status dev">
                  <span className="dot"></span>
                  In Development
                </div>

                <div className="project-content">
                  <h3 style={{ color: "#19e6d5" }}>Formula Clicker</h3>
                  <p>
                    A 2D clicker game built with Godot, where you can choose
                    your path.
                  </p>

                  <div className="tags">
                    <span>Godot</span>
                    <span>GDScript</span>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/miguelmvpinto/MyTanks"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <div className="project-card">
                <div className="project-image">
                  <img src="MyTanks.png" alt="MyTanks" />
                </div>

                <div className="project-status dev">
                  <span className="dot"></span>
                  In Development
                </div>

                <div className="project-content">
                  <h3 style={{ color: "#19e6d5" }}>MyTanks</h3>
                  <p>
                    A Wikipedia about tanks, built with PHP. Explore different
                    tank models and their history.
                  </p>

                  <div className="tags">
                    <span>PHP</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/miguelmvpinto/Nobus-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <div className="project-card">
                <div className="project-image">
                  <img src="Nobus-bot.jpg" alt="Nobus bot" />
                </div>

                <div className="project-status live">
                  <span className="dot"></span>
                  Live
                </div>

                <div className="project-content">
                  <h3 style={{ color: "#19e6d5" }}>Nobus bot</h3>
                  <p>
                    A simple bot built with Python. It can perform administration
                    tasks and interact with users.
                  </p>

                  <div className="tags">
                    <span>Python</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="activity" className="section github-section">
        <div className="github-container">
          <h2 className="section-title">GitHub Activity</h2>
          <p className="projects-subtitle">
            The latest activity from my Gitub profile, showcasing my recent
            contributions and projects.
          </p>

          <div className="github-card">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=miguelmvpinto&theme=react-dark&line=19e6d5&point=19e6d5&area=true&color=19e6d5&title_color=19e6d5&hide_border=true"
              alt="GitHub Activity"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-container">
          <h2 className="section-title-contacts">Get In Touch</h2>
          <p>I'm always open to new opportunities and interesting projects.</p>

          <div className="contact-buttons">
            <button onClick={() => setShowModal(true)}>
              <FaEnvelope /> Gmail
            </button>

            <a
              href="https://github.com/miguelmvpinto"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/miguepinto/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <button className="contact-link" onClick={() => setShowCV(true)}>
              <FaFileAlt /> Curriculum
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Send me an email</h3>

            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea placeholder="Your message"></textarea>

            <div className="modal-buttons">
              <button className="btn-primary">Send</button>
              <button
                className="btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showCV && (
        <div className="modal-overlay" onClick={() => setShowCV(false)}>
          <div className="modal cv-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowCV(false)}>
              ✖
            </button>

            <iframe src="/CV_2026.pdf" title="CV" width="100%" height="100%" />
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-left">{"<dev />"}</div>

        <div className="footer-right">
          © 2026 Miguel Pinto. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
