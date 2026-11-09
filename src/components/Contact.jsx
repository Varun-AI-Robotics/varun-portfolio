import {
  Code2,
  Linkedin,
  Mail,
  ArrowUpRight
} from "lucide-react";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-label">04 / GET IN TOUCH</div>

      <div className="contact-box">
        <div className="contact-glow" />

        <div className="contact-content">
          <span className="contact-overline">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's create
            <br />
            something <span className="gradient-text">amazing.</span>
          </h2>

          <p>
            I'm open to internships, collaborations, exciting projects,
            and opportunities in AI/ML and software development.
          </p>

          <a
            href="mailto:varunkum9898@gmail.com"
            className="primary-button"
          >
            Say hello <ArrowUpRight size={18} />
          </a>

          <div className="contact-socials">

            {/* GitHub */}
            <a
              href="https://github.com/Varun-AI-Robotics"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 /> GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/varun-kumar-98a90330a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin /> LinkedIn
            </a>

            {/* Email */}
            <a href="mailto:varunkum9898@gmail.com">
              <Mail /> Email
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
