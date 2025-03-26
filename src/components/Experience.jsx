import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import '../stylesheet/Experience.css';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        }); 
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      period: "Heart it out (Dec 2024-Present)",
      description: "Developing responsive user interfaces with React, implementing state management solutions, and optimizing frontend performance.",
      tags: ["React", "TypeScript", "Redux", "GraphQL"],
      icon: "💻"
    },
    {
      id: 2,
      title: "Web Developer",
      period: "Digital Agency (2021-2024)",
      description: "Built responsive websites for various clients, implemented CMS integrations, and improved site performance metrics.",
      tags: ["JavaScript", "WordPress", "CSS3", "PHP"],
      icon: "🌐"
    },
    {
      id: 3,
      title: "Junior Developer",
      period: "Tech Solutions (2019-2021)",
      description: "Collaborated on web application development, fixed UI bugs, and contributed to feature implementation.",
      tags: ["HTML5", "jQuery", "Bootstrap", "REST APIs"],
      icon: "👨‍💻"
    },
    {
      id: 4,
      title: "Intern",
      period: "Startup Inc. (Summer 2018)",
      description: "Learned web development fundamentals, assisted senior developers, and completed small feature implementations.",
      tags: ["HTML/CSS", "Git", "Responsive Design"],
      icon: "🎓"
    }
  ];

  // Animation variants for each card
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="page experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        My Professional Journey
      </motion.h1>

      <div className="timeline" ref={timelineRef}>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            className="timeline-item"
            custom={i}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div className="timeline-marker">
              <motion.span 
                className="emoji"
                initial={{ scale: 0, rotate: -30 }}
                animate={isVisible ? { 
                  scale: 1, 
                  rotate: 0,
                  transition: { 
                    delay: i * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 12
                  }
                } : {}}
              >
                {exp.icon}
              </motion.span>
            </motion.div>

            <motion.div 
              className="timeline-content"
              variants={contentVariants}
            >
              <motion.h3 variants={contentVariants}>{exp.title}</motion.h3>
              <motion.p className="period" variants={contentVariants}>
                {exp.period}
              </motion.p>
              <motion.p className="description" variants={contentVariants}>
                {exp.description}
              </motion.p>
              <motion.div className="tags" variants={contentVariants}>
                {exp.tags.map((tag, j) => (
                  <motion.span 
                    key={tag}
                    className="tag"
                    custom={j}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.15 + 0.2 + j * 0.05
                      }
                    } : {}}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}