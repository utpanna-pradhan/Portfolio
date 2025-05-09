export default function Skills() {
    const skills = [
      { name: "Nextjs", level: 80 },
      { name: "Express", level: 70 },
      { name: "GenAI", level: 90 },
      { name: "Python", level: 80 },
      { name: "Reactjs", level: 90 },
      { name: "Vuejs", level: 80 },
      { name: "API", level: 80 },
      { name: "JSON", level: 90 },
      { name: "AJAX", level: 80 },
      { name: "TailwindCSS", level: 100 },
      { name: "Bootstrap5", level: 100 },
      { name: "JavaScript", level: 95 },
      { name: "CSS3", level: 100 },
      { name: "HTML5", level: 100 }
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