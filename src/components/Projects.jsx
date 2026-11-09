import { ArrowUpRight, Code2 } from "lucide-react";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section-label">02 / SELECTED WORK</div>
      <div className="section-heading">Featured <span className="gradient-text">projects.</span></div>
      <p className="section-description">A collection of experiments and applications across AI, automation, and software development.</p>
      <div className="project-grid">
        {projects.map(project => (
          <article className="project-card" key={project.id}>
            <div className={`project-art ${project.color}`}>
              <span className="project-number">{project.id}</span>
              <div className="project-logo">{project.icon}</div>
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-content">
              <div className="project-title-row">
                <h3>{project.name}</h3>
                <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}><ArrowUpRight /></a>
              </div>
              <p>{project.description}</p>
              <div className="tech-stack">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
              <a className="github-link" href={project.github} target="_blank" rel="noreferrer"><Code2 size={16} /> VIEW REPOSITORY</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}