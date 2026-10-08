import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="logo">Yash.</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              B.Tech IT Student · Software Developer
            </div>

            <p className="hero-intro">Hello, I'm</p>

            <h1>
              Yash <span>Vishnoi</span>
            </h1>

            <h2>Software Developer | AI/ML Enthusiast</h2>

            <p className="hero-description">
              I build practical software applications and intelligent systems
              across backend development, AI, computer vision, and data-driven
              engineering.
            </p>

            <div className="hero-focus">
              <span>Java</span>
              <span>Python</span>
              <span>React</span>
              <span>Backend</span>
              <span>Computer Vision</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Projects <span>↗</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className="hero-metrics">
              <div>
                <strong>01</strong>
                <span>Featured AI Project</span>
              </div>
              <div>
                <strong>05+</strong>
                <span>Core AI / CV Tools</span>
              </div>
              <div>
                <strong>2027</strong>
                <span>Graduation</span>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/yvishnoi30"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/yash-vishnoi-9082012b0/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="mailto:yvishnoi30@gmail.com">Email ↗</a>
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span></span>
            Scroll to explore
          </a>
        </section>

        <section id="about" className="section">
          <div className="section-label">01 · ABOUT ME</div>

          <div className="section-heading">
            <h2>Building software with purpose.</h2>
            <p>
              I enjoy turning ideas into practical, reliable, and intelligent
              software solutions.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am a final-year B.Tech Information Technology student at
                Galgotias College of Engineering and Technology, focused on
                software development, backend systems, AI, and computer vision.
              </p>
              <p>
                My main project is an Automatic Number Plate Recognition
                system for Indian vehicles, combining object detection,
                tracking, OCR, GPU acceleration, and temporal recognition
                logic into a real-time pipeline.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-card">
                <span>01</span>
                <h3>Software Development</h3>
                <p>Building structured and practical applications.</p>
              </div>
              <div className="highlight-card">
                <span>02</span>
                <h3>AI & Computer Vision</h3>
                <p>Working with real-time intelligent systems.</p>
              </div>
              <div className="highlight-card">
                <span>03</span>
                <h3>Problem Solving</h3>
                <p>Learning, experimenting, and improving continuously.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section focus-section">
          <div className="section-label">02 · WHAT I WORK WITH</div>

          <div className="focus-grid">
            <div className="focus-panel focus-blue">
              <span className="panel-number">01</span>
              <h3>Software Development</h3>
              <p>
                Building applications and backend services with a focus on
                clean structure, APIs, and practical functionality.
              </p>
              <div className="panel-tags">
                <span>Java</span>
                <span>Spring</span>
                <span>Node.js</span>
                <span>React</span>
                <span>REST APIs</span>
              </div>
            </div>

            <div className="focus-panel focus-violet">
              <span className="panel-number">02</span>
              <h3>AI & Computer Vision</h3>
              <p>
                Developing intelligent vision pipelines for detection,
                tracking, OCR, and real-time recognition.
              </p>
              <div className="panel-tags">
                <span>PyTorch</span>
                <span>OpenCV</span>
                <span>PaddleOCR</span>
                <span>CUDA</span>
                <span>ByteTrack</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">03 · TECHNOLOGIES</div>

          <div className="section-heading">
            <h2>Tools I use to build.</h2>
            <p>A practical stack spanning development, AI, data, and tooling.</p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span className="skill-index">01</span>
              <h3>Languages</h3>
              <div className="tag-list">
                <span>Java</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>SQL</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>

            <div className="skill-card">
              <span className="skill-index">02</span>
              <h3>Development</h3>
              <div className="tag-list">
                <span>Spring</span>
                <span>Node.js</span>
                <span>React</span>
                <span>REST APIs</span>
                <span>MySQL</span>
                <span>MongoDB</span>
              </div>
            </div>

            <div className="skill-card">
              <span className="skill-index">03</span>
              <h3>AI / Computer Vision</h3>
              <div className="tag-list">
                <span>PyTorch</span>
                <span>OpenCV</span>
                <span>RF-DETR</span>
                <span>PaddleOCR</span>
                <span>ByteTrack</span>
                <span>ONNX Runtime</span>
              </div>
            </div>

            <div className="skill-card">
              <span className="skill-index">04</span>
              <h3>Tools</h3>
              <div className="tag-list">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>CUDA</span>
                <span>Maven</span>
                <span>Tomcat</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-label">04 · MY WORK</div>

          <div className="section-heading">
            <h2>Projects that solve real problems.</h2>
            <p>
              Selected work focused on practical software engineering and
              intelligent systems.
            </p>
          </div>

          <article className="featured-project">
            <div className="project-glow"></div>

            <div className="project-top">
              <div>
                <span className="project-label">FEATURED PROJECT</span>
                <h3>Automatic Number Plate Recognition</h3>
                <p className="project-subtitle">
                  Real-time Indian vehicle number plate detection and
                  recognition system.
                </p>
              </div>

              <a
                href="https://github.com/yvishnoi30/ANPR-India"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub ↗
              </a>
            </div>

            <div className="anpr-pipeline">
              <div className="pipeline-step">
                <span>01</span>
                <strong>Detect</strong>
                <small>RF-DETR</small>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step">
                <span>02</span>
                <strong>Track</strong>
                <small>ByteTrack</small>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step">
                <span>03</span>
                <strong>Read</strong>
                <small>PaddleOCR</small>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step">
                <span>04</span>
                <strong>Recognize</strong>
                <small>Temporal Logic</small>
              </div>
            </div>

            <div className="project-details">
              <div>
                <h4>What it does</h4>
                <p>
                  Detects Indian number plates from video, tracks vehicles,
                  extracts plate text with OCR, and improves recognition using
                  quality-aware and temporal consistency logic.
                </p>
              </div>

              <div>
                <h4>Key highlights</h4>
                <ul>
                  <li>GPU-accelerated real-time processing</li>
                  <li>Vehicle/plate tracking with ByteTrack</li>
                  <li>OCR quality filtering and temporal consensus</li>
                  <li>Indian registration format validation</li>
                </ul>
              </div>
            </div>

            <div className="project-tags">
              <span>Python</span>
              <span>PyTorch</span>
              <span>RF-DETR</span>
              <span>PaddleOCR</span>
              <span>OpenCV</span>
              <span>CUDA</span>
              <span>ByteTrack</span>
              <span>ONNX Runtime</span>
            </div>
          </article>

          <div className="projects-grid">
            <article className="project-card">
              <span className="project-number">02</span>
              <h3>Facial Recognition Attendance System</h3>
              <p>
                A Python and OpenCV based attendance system using facial
                recognition to automate identification and attendance
                recording.
              </p>
              <div className="project-tags">
                <span>Python</span>
                <span>OpenCV</span>
                <span>Face Recognition</span>
              </div>
            </article>

            <article className="project-card">
              <span className="project-number">03</span>
              <h3>Blood Donor Management System</h3>
              <p>
                A web-based application for managing donor information,
                blood groups, and donor records using a structured database.
              </p>
              <div className="project-tags">
                <span>PHP</span>
                <span>MySQL</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </article>
          </div>
        </section>

        <section className="strengths-strip">
          <div>
            <span>01</span>
            <strong>Problem Solver</strong>
          </div>
          <div>
            <span>02</span>
            <strong>Engineering Mindset</strong>
          </div>
          <div>
            <span>03</span>
            <strong>Continuous Learner</strong>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-label">05 · EDUCATION</div>

          <div className="section-heading">
            <h2>Academic journey.</h2>
            <p>My academic background from school to engineering.</p>
          </div>

          <div className="education-grid">
            <article className="education-card education-main">
              <div className="education-year">2023 — 2027</div>
              <h3>B.Tech in Information Technology</h3>
              <p className="education-institute">
                Galgotias College of Engineering and Technology
              </p>
              <p className="education-university">
                Dr. A.P.J. Abdul Kalam Technical University (AKTU)
              </p>

              <div className="education-score">
                <span>CGPA</span>
                <strong>8.68</strong>
              </div>

              <div className="education-status">Currently in Final Year</div>
            </article>

            <article className="education-card">
              <div className="education-year">Class 12</div>
              <h3>Senior Secondary</h3>
              <p className="education-institute">CBSE</p>
              <p className="education-university">
                Central Board of Secondary Education
              </p>

              <div className="education-score">
                <span>Percentage</span>
                <strong>88.6%</strong>
              </div>
            </article>

            <article className="education-card">
              <div className="education-year">Class 10</div>
              <h3>Secondary School</h3>
              <p className="education-institute">CBSE</p>
              <p className="education-university">
                Central Board of Secondary Education
              </p>

              <div className="education-score">
                <span>Percentage</span>
                <strong>94.5%</strong>
              </div>
            </article>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="section-label">06 · CERTIFICATIONS</div>

          <div className="section-heading">
            <h2>Learning beyond the classroom.</h2>
            <p>Certifications that reflect my continued technical learning.</p>
          </div>

          <div className="cert-grid">
            <a
              href="https://www.hackerrank.com/certificates/4187df2a8628"
              target="_blank"
              rel="noreferrer"
              className="cert-card"
            >
              <span>HACKERRANK</span>
              <h3>Java Certification</h3>
              <p>View certificate ↗</p>
            </a>

            <a
              href="https://www.hackerrank.com/certificates/a4d44c972ffe"
              target="_blank"
              rel="noreferrer"
              className="cert-card"
            >
              <span>HACKERRANK</span>
              <h3>SQL Certification</h3>
              <p>View certificate ↗</p>
            </a>

            <a
              href="https://drive.google.com/file/d/1ny5czfEiCDqgNxDc-KdEZk_0wn3kflfZ/view"
              target="_blank"
              rel="noreferrer"
              className="cert-card"
            >
              <span>APNA COLLEGE</span>
              <h3>DSA with Java</h3>
              <p>View certificate ↗</p>
            </a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-glow"></div>

          <div className="contact-content">
            <div className="section-label">07 · GET IN TOUCH</div>
            <h2>Let's build something meaningful.</h2>
            <p>
              I'm open to opportunities, collaborations, and interesting
              software or AI projects.
            </p>

            <a href="mailto:yvishnoi30@gmail.com" className="btn btn-primary">
              Send Me an Email <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Yash.</strong>
          <span>Software Developer · AI/ML Enthusiast</span>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/yvishnoi30"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yash-vishnoi-9082012b0/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:yvishnoi30@gmail.com">Email</a>
        </div>

        <p>© 2026 Yash Vishnoi</p>
      </footer>
    </div>
  );
}

export default App;
