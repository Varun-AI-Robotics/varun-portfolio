import { Code2, BrainCircuit, Globe, Database } from "lucide-react";
import { skills } from "../data/skills.js";

const icons = [Code2, BrainCircuit, Globe, Database];

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-label">03 / TECHNICAL EXPERTISE</div>
      <div className="section-heading">My <span className="gradient-text">toolkit.</span></div>
      <p className="section-description">Technologies and tools I use to transform ideas into applications.</p>
      <div className="skills-grid">
        {skills.map((item, index) => {
          const Icon = icons[index];
          return (
            <div className="skill-card" key={item.category}>
              <div className="skill-icon"><Icon size={25} /></div>
              <h3>{item.category}</h3>
              <div className="skill-tags">{item.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}