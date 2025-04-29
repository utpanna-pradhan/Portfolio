import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import '../stylesheet/Experience.css';
import { ExternalLink } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Interior Design Website",
    description: "Fully responsive interior design website",
    tags: ["React", "Framer-motion", "TailwindCSS"],
    link: "https://architectural-studio-lab.vercel.app/"
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Heartitout Academy Page",
    description: "Interactive page displaying upcoming events",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap5", "jQuery"],
    link: "#"
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Reco Engine",
    description: "Finding the perfect therapist based on user input",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap5", "API"],
    link: "#"
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Creative Portfolio",
    description: "A customizable portfolio template for creatives",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Digital Agency Site",
    description: "Modern website for a digital marketing agency",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "GitHub Profile Analyzer",
    description: "Tool to analyze and visualize GitHub profiles",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github-profile-analyzer-navy.vercel.app/"
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Real-time Chat App",
    description: "Instant messaging app with modern interface",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://utpanna-pradhan.github.io/Chat_app/"
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/7675860/pexels-photo-7675860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Therapist Finder",
    description: "Interactive tool to connect with mental health professionals",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://heartitout.in/jiya-therapist-finder-demo/"
  }
];

const Work = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isInView, setIsInView] = useState(false);

  // Extract unique tags for filter options
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.tags.includes(filter)
      );
      setFilteredProjects(filtered);
    }
  };

  useEffect(() => {
    // Set in view after a small delay to trigger animations
    const timer = setTimeout(() => {
      setIsInView(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="work-section">
      <div className="work-container">
        <motion.h1 
          className="work-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          My Work
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <ProjectFilter 
            filters={allTags}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </motion.div>

        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;