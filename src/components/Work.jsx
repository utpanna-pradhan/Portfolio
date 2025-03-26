export default function Work() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online shopping solution.",
      tags: ["React", "Node.js", "MongoDB"]
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
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}