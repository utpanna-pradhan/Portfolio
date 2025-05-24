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
       { name: "Wordpress", level: 90 },
       { name: "Elementor", level: 90 },
      { name: "TailwindCSS", level: 100 },
      { name: "Bootstrap5", level: 100 },
      { name: "JavaScript", level: 95 },
      { name: "CSS3", level: 100 },
      { name: "HTML5", level: 100 },
        { name: 'Problem Solving', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Teamwork', level: 90 },
    { name: 'Time Management', level: 80 },
    { name: 'Adaptability', level: 85 },
    { name: 'Creativity', level: 95 },
    ];

      const softskills = [
     { name: 'Adaptability', level: 95 },
     { name: 'Communication', level: 90 },
     { name: 'Teamwork', level: 90 },
     { name: 'Creativity', level: 80 },
      { name: 'Problem Solving', level: 80 },
    
    
    { name: 'Time Management', level: 80 },
    
    
    ];

    return (
      <div className='d-flex flex-row  align-items-flex-start justify-content-around'>
           <section className="page skills w-50 ms-4 me-4" >
          <motion.h1 
               className="skill-title"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ 
                 duration: 0.8,
                 ease: [0.16, 1, 0.3, 1]
               }}
             >
              Technical Skills
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

       <section className="page softskills w-50 ms-4 me-4">
          <motion.h1 
               className="skill-title"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ 
                 duration: 0.8,
                 ease: [0.16, 1, 0.3, 1]
               }}
             >
             Soft Skills
             </motion.h1>
        <div className="skills-container">
          {softskills.map(skill => (
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
      
      </div>
 

      
    );
  }