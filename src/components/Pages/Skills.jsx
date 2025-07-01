export const Skills = () => {
    const skills = [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Git & GitHub",
      "Postman",
      "HTML5",
      "CSS3",
    ];
  
    return (
        <section id="skills" className="skills-section">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  };