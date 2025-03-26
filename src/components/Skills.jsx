export default function Skills() {
    const skills = [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "CSS", level: 80 },
      { name: "Node.js", level: 75 }
    ];
  
    return (
      <section className="page skills">
        <h1>My Skills</h1>
        <div className="skills-container">
          {skills.map(skill => (
            <div key={skill.name} className="skill-item">
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span>{skill.level}%</span>
            </div>
          ))}
        </div>
      </section>
    );
  }