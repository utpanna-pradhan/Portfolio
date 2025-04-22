import p1 from '../assets/p1.png';

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
      img:p1,
      title: "Heartitout Blog page",
      description: "Heart it out's blog page",
      tags: ["HTML","CSS", "JavaScript","Bootstrap5","Jquery"]
    },
    {
      id: 2,
      img:p1,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS, ", "JavaScript"]
    },
    {
      id: 2,
      img:p1,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"]
    },
    {
      id: 2,
      img:p1,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"]
    },
    {
      id: 2,
      img:p1,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"]
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
          <div className="gallery-item" key={project.id}>
            <img src={project.img} alt={project.title} />
           
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.tags}</p>
              <a href={project.src} target='_blank' className='text-white'>Link</a>
             
            </div>
          </div>
        ))}
      </div>
     
     
    </section>
  );
}