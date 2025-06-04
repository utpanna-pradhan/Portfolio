import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import "../stylesheet/Work.css";
import github from "../assets/github.svg";

const ProjectCard = ({ project, index, isInView }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      <div className="project-image-container">
        <img
          src={project.img}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
        <div className="project-overlay">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`Visit ${project.title} project`}
            >
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>

      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <br />
        {project.github_link && (
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} width={20} alt="GitHub" className="ms-2 me-2" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
