import { ArrowUpRight, BrainCircuit, Code2, Cpu, UserRound } from "lucide-react";

export default function Hero() {
  return (
    <section className="section hero" id="home">
      <div className="hero-content">
        <div className="availability"><span className="pulse" /> AVAILABLE FOR OPPORTUNITIES</div>
        <p className="hero-intro">HELLO, I'M VARUN KUMAR</p>
        <h1>Building the<br /><span className="gradient-text">Future with AI.</span></h1>
        <h3>AI/ML Engineer <span>•</span> Software Developer</h3>
        <p className="hero-description">
          I build intelligent applications, machine-learning systems, and innovative software
          solutions that transform ideas into useful real-world experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="primary-button">Explore projects <ArrowUpRight size={18} /></a>
          <a href="#contact" className="secondary-button">Contact me</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/Varun-AI-Robotics" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><UserRound /></a>
          <a href="mailto:your-email@example.com" aria-label="Email"><ArrowUpRight /></a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="glow-circle" />
        <div className="profile-card">
          <div className="profile-top"><span>PORTFOLIO / 2026</span><span className="status">● ONLINE</span></div>
          <div className="profile-image-container">
            <img
              src="/public/profile.jpeg"
              alt="Varun Kumar"
              className="profile-image"
            />
          </div>
          <h2>Varun Kumar</h2>
          <p>AI / ML ENGINEER</p>
          <div className="profile-bottom"><span>CURIOUS BY DESIGN</span><BrainCircuit size={20} /></div>
        </div>
        <div className="floating-card card-one"><BrainCircuit /><span>Artificial Intelligence</span></div>
        <div className="floating-card card-two"><Code2 /><span>Software Development</span></div>
        <div className="floating-card card-three"><Cpu /><span>Machine Learning</span></div>
      </div>
      <a className="hero-scroll" href="#about">SCROLL TO EXPLORE ↓</a>
    </section>
  );
}