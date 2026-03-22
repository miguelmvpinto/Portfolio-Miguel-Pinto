import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo text-color font-mono font-bold text-lg">
          {"<dev />"}
        </div>
        <ul>
          <li onClick={() => scrollToSection("#hero")} className="text-color">
            Home
          </li>
          <li onClick={() => scrollToSection("#about")}>About</li>
          <li onClick={() => scrollToSection("#tech")}>Tech</li>
          <li onClick={() => scrollToSection("#projects")}>Projects</li>
          <li onClick={() => scrollToSection("#contact")}>Contact</li>
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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum."
            </p>

            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat."
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

      <section id="tech" className="section">
        <h1>Technologies</h1>
      </section>

      <section id="projects" className="section">
        <h1>Projects</h1>
      </section>

      <section id="contact" className="section">
        <h1>Contact</h1>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Miguel Pinto. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
