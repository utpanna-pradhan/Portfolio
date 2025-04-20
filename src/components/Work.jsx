import w1 from '../assets/dif.jpg';
import '../stylesheet/Work.css';
export default function Work() {
  const projects = [
    {
      id: 1,
      title: "Interior Design website",
      description: "Fully responsive interior design website",
      tags: ["React", "Framer-motion","TailwindCSS"],
      src:"https://architectural-studio-lab.vercel.app/"
    },
    {
      id: 2,
      title: "Heartitout Blog page",
      description: "Heart it out's blog page",
      tags: ["HTML","CSS", "JavaScript","Bootstrap5","Jquery"]
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A customizable portfolio template for creatives.",
      tags: ["HTML/CSS", "JavaScript"]
    }
  ];

  return (
    <section className="page work">
      <h1>My Projects</h1>
      <div className="projects-grid">
      <div className='img_work'>
      <img src={w1} alt="" />
        </div>  
        <div className='Work_content d-none'>
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
       
      </div>
    </section>
  );
}