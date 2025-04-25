import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.png';


import '../stylesheet/Work.css';
export default function Work() {
  const projects = [
    {
      id: 1,
      img:p1,
   
      title: "Interior Design website",
      description: "Fully responsive interior design website",
      tags: ["React", "Framer-motion","TailwindCSS"],
      src:"https://architectural-studio-lab.vercel.app/"
    },
    {
      id: 2,
      img:p2,
      title: "Heartitout Academy page",
      description: "It shows all upcomming events",
      tags: ["HTML","CSS", "JavaScript","Bootstrap5","Jquery"]
    },
    {
      id: 3,
      img:p3,
      title: "Reco Engine",
      description: "It helps to find perfect Therapist based on your input",
      tags: ["HTML, CSS , JavaScript , Jquery , Bootstrap5 , API "]
    },
    {
      id: 4,
      img:p4,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"]
    },
    {
      id: 5,
      img:p5,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"]
    },
    {
      id: 6,
      img:p6,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"],
      src:"https://github-profile-analyzer-navy.vercel.app/"
    },
    {
      id: 7,
      img:p7,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"],
      src:"https://utpanna-pradhan.github.io/Chat_app/"
    },
    {
      id: 8,
      img:p8,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"],
      src:"https://heartitout.in/jiya-therapist-finder-demo/"
    }
  ];

  return (
    <section className="gallery-section">
     
      <h1>My Projects</h1>
      {/* <div className="grid-item">
     
     
        
        <div className='Work_content '>
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          <a href={project.src} target="_blank">
          <button>Link</button>
          </a> 
          </div>
        ))}
        </div>
       
      </div> */}

<div className="gallery-grid">
 
        {projects.map((project) => (
           <a href={project.src} target='_blank' >
          <div className="gallery-item" key={project.id}>
            <img src={project.img} alt={project.title} />
           
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.tags}</p>
              {/* <a href= target='_blank' className='text-white'>Link</a> */}
            
            </div>
          </div>
          </a>
        ))}
        
      </div>
    
     
    </section>
  );
}