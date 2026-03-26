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
} from "react-icons/fa";
import heroImg from "./assets/hero.png";
import "./App.css";

import { useEffect, useState } from "react";

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
      <nav className="navbar">
        <div className="logo text-color font-mono font-bold text-lg">
          {"<dev />"}
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
              View Projects →
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
            <img src={heroImg} alt="profile" />
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-container">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>

            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum."
            </p>

            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
          </div>

          <div className="about-card">
            <h3>Quick Facts</h3>

            <ul>
              <li>🎓 CS degree with focus on Software Engineering</li>
              <li>💻 3+ years building web applications</li>
              <li>🎮 Game development (Unity & C#)</li>
              <li>🌐 Open source contributor</li>
              <li>📚 Always learning, always building</li>
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
              ☕<span>Java</span>
            </div>
            <div className="tech-card">
              JS<span>JavaScript</span>
            </div>
            <div className="tech-card">
              TS<span>TypeScript</span>
            </div>
            <div className="tech-card">
              C#<span>C#</span>
            </div>

            <div className="tech-card">
              🐍<span>Python</span>
            </div>
            <div className="tech-card">
              ⚛️<span>React</span>
            </div>
            <div className="tech-card">
              ⬢<span>Node.js</span>
            </div>
            <div className="tech-card">
              🎮<span>Unity</span>
            </div>

            <div className="tech-card">
              🗄️<span>SQL</span>
            </div>
            <div className="tech-card">
              🌿<span>Git</span>
            </div>
            <div className="tech-card">
              &lt;/&gt;<span>HTML/CSS</span>
            </div>
            <div className="tech-card">
              🐳<span>Docker</span>
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
            <div className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="" />
              <h3>Analytics Dashboard</h3>
              <p>
                A real-time data visualization dashboard for monitoring KPIs and
                business metrics.
              </p>
              <div className="tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
              </div>
            </div>

            <div className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="" />
              <h3>Shadow Realm</h3>
              <p>
                A 3D exploration game built with Unity featuring procedural
                terrain.
              </p>
              <div className="tags">
                <span>Unity</span>
                <span>C#</span>
                <span>Blender</span>
              </div>
            </div>

            <div className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="" />
              <h3>TaskFlow</h3>
              <p>A minimalist task management app with smart categorization.</p>
              <div className="tags">
                <span>React Native</span>
                <span>TypeScript</span>
                <span>Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="activity" className="section github-section">
        <div className="github-container">
          <h2 className="section-title">GitHub Activity</h2>

          <div className="github-card">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=miguelmvpinto&theme=react-dark"
              alt="GitHub Activity"
            />
          </div>

          <div className="github-activity">
            <h3>Recent Activity</h3>

            {events.length === 0 ? (
              <p>Loading activity...</p>
            ) : (
              <div className="activity-list">
                {events.map((event, index) => (
                  <div key={index} className="activity-card">
                    <span className="activity-type">{event.type}</span>
                    <p>{event.repo?.name}</p>
                  </div>
                ))}
              </div>
            )}
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

            <button className="btn-secondary" onClick={() => setShowCV(true)}>
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
        <p>&copy; 2026 Miguel Pinto. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
