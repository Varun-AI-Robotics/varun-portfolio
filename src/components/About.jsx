import { GraduationCap, Target, Lightbulb } from "lucide-react";

const details = [
  { Icon: GraduationCap, title: "Education", text: "B.Tech CSE (AI & ML)", sub: "Galgotias University" },
  { Icon: Target, title: "Career goal", text: "Machine Learning Engineer", sub: "AI / ML development" },
  { Icon: Lightbulb, title: "Interests", text: "AI, ML & innovation", sub: "Building real-world projects" }
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-label">01 / ABOUT ME</div>
      <div className="section-heading">About <span className="gradient-text">me.</span></div>
      <div className="about-grid">
        <div className="about-main">
          <h2>Turning curiosity<br />into <span className="gradient-text">creation.</span></h2>
          <p>I'm Varun Kumar, a Computer Science student specializing in Artificial Intelligence and Machine Learning.</p>
          <p>I enjoy building practical applications using Python, Java, machine learning, and modern web technologies. My approach combines problem-solving, experimentation, and continuous learning.</p>
          <p>My goal is to become a skilled ML Engineer and contribute to products that make technology more intelligent and useful.</p>
        </div>
        <div className="about-details">
          {details.map(({ Icon, title, text, sub }) => (
            <div className="detail-card" key={title}>
              <Icon />
              <div><h3>{title}</h3><p>{text}</p><small>{sub}</small></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}