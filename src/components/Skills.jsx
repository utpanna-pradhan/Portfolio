import '../stylesheet/Work.css';
import { motion } from 'framer-motion';
export default function Skills() {
    const skills = [
       { name: "GenAI", level: 90 },
      { name: "Nextjs", level: 80 },
       { name: "Reactjs", level: 90 },
      { name: "Vuejs", level: 80 },
      { name: "Express", level: 70 },
      { name: "Django", level: 70 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 70 },
     
      
     
      { name: "API", level: 80 },
      { name: "JSON", level: 90 },
      { name: "AJAX", level: 80 },
       { name: "Jquery", level: 90 },
      { name: "TailwindCSS", level: 100 },
      { name: "Bootstrap5", level: 100 },
      { name: "JavaScript", level: 95 },
      { name: "CSS3", level: 100 },
      { name: "HTML5", level: 100 }
    ];
  
    return (
      <section className="page skills">
          <motion.h1 
               className="skill-title"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ 
                 duration: 0.8,
                 ease: [0.16, 1, 0.3, 1]
               }}
             >
               My Skills
             </motion.h1>
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