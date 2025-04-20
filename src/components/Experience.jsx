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
      title: "Frontend Developer Intern",
      period: "Heart it out (Dec 2024-Present)",
      description: "Currently i am developing responsive, user-friendly websites like:Event pages , Academy page , Reco engine , Feedback form , Therapist profile , multiple forms in Elementor , News letters , blogs etc . I collaborate with the team to enhance UI/UX , ensure seamless responsiveness across devices. Through this role, Iam gaining hands-on experience in front-end development and modernweb technologies.",
      tags: ["React", "JavaScript", "Vuejs", "Bootstrap","API","Jquery","AJAX","Wordpress","Elementor","Oxygen Builder","CSS3","HTML5","POSTHOG","POSTMAN"],
      icon: "💻"
    },
    {
      id: 2,
      title: "Fullstack Developer Intern",
      period: "Unified Mentor(OCt 2024 - Dec 2024)",
      description: "Here I developed Full stack projects like:E-Gram Panchayat – A web-based system built to digitalize local governance services.Pet Simulator – An interactive application designed to simulate pet care and feeding",
      tags: ["Reactjs","Jquery","JavaScript","Bootstrap5", "CSS3", "HTML5"],
      icon: "🌐"
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      period: "Salesqueen (June 2024- Sep 2024)",
      description: "I developed fully responsive websites like Smart Hospital , Asset management ,HR record , Internview schedule , Candidate profile , Recruitment channel etc. Collaborated closely withthe development team and testers to ensure high-quality, user-friendly webexperiences",
      tags: ["HTML5","CSS3","JavaScript", "jQuery", "Bootstrap",],
      icon: "👨‍💻"
    },
    {
      id: 4,
      title: "Web Developer Intern",
      period: "Solar Secure (Apr 2024 - May 2024)",
      description: "I developed FastFood Ecommerce website and several small projects like todo-list, Quiz games , Covid status ,Form validation , Counter ,Calculator etc . Gained hands-on experience in front-end and back-end development.",
      tags: ["HTML","CSS", "JavaScript","AJAX","API","Nodejs" ],
      icon: "🎓"
    },
    {
      id: 4,
      title: "Web Developer Intern",
      period: "Oretes PVT LTD",
      description: "I developed a COVID-19 tracking website with features like real-time casetracking, vaccination slot availability, ICU ,oxygen cylinder and hospital status,with essential COVID-19 information and prevention . Built .Tthis project focused on providing userswith critical health data and resources .",
      tags: ["Django","Python","HTML","CSS", "JavaScript" ],
      icon: "💻"
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