import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
// import '../stylesheet/Experience.css';
import '../stylesheet/Work.css';
import img1 from '../assets/Screenshot (595).png';
import img2 from '../assets/Screenshot (596).png';
import img3 from '../assets/Screenshot (597).png';
import img4 from '../assets/Screenshot (598).png';
import img5 from '../assets/Screenshot (599).png';
import img6 from '../assets/Screenshot (600).png';
import img7 from '../assets/Screenshot (601).png';
import img8 from '../assets/Screenshot (602).png';
import img9 from '../assets/Screenshot (603).png';
import img10 from '../assets/Screenshot (604).png';
import img11 from '../assets/428276273-20cabb62-0443-4081-a547-d02c55209650.png';
import img12 from '../assets/Screenshot (605).png';
import img13 from '../assets/Screenshot (606).png';
import img14 from '../assets/Screenshot (607).png';
import img15 from '../assets/Screenshot (608).png';
import img16 from '../assets/Screenshot (609).png';



// Project data
const projects = [
  { 
    id: 1, 
    img: img1,
    title: "Interior Design Website",
    description: "It's a fully responsive interior design website with a bunch of their work ,blogs and career section",
    tags: ["React js", "Framer-motion", "TailwindCSS","Bootstrap5"],
    link: "https://architectural-studio-lab.vercel.app/",
   github_link:"https://github.com/nitink3006/Architectural-Studio-Lab"
  },
  {
    id: 2,
    img: img2,
    title: "Heartitout Academy Page",
    description: "Interactive page displaying upcoming events",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap5", "Jquery"],
    link: "https://heartitout.in/academy/",
   
  },
  {
    id: 3,
    img: img3,
    title: "Reco Engine",
    description: "Finding the perfect therapist based on user input",
    tags: ["HTML", "CSS", "JavaScript", "Jquery", "Bootstrap5", "API"],
    link: "https://happyminds.in/therapist-recommendation/"
  },
  {
    id: 4,
    img: img4,
    title: "Heartit out Jiya Therapist",
    description: "AI featured therapist finder which will help you navigate and find the perfect match",
    tags: ["HTML", "CSS", "JavaScript","Bootstrap5","Jquery","API"],
    link: "https://heartitout.in/jiya-therapist-finder-demo/"
  },
  {
    id: 5,
    img: img5,
    title: "Heartitout Blog page",
    description: "Responsive heart it out Mental Health blog section categorized with mental health topics",
    tags: ["HTML", "CSS", "JavaScript","Bootstrap5","Jquery"],
    link: "https://heartitout.in/blogs/"
  },
      {
    id: 13,
    img: img13,
    title: "Bolt Portfolio",
    description: "It's a portfolio website built using Bolt, React, and Three.js, featuring smooth animations, interactive 3D elements, and a modern responsive design. It showcases projects and skills with an immersive and engaging user experience.",
    tags: ["React js","Bolt","Bootstrap5"],
    link: "https://bolt-portfolio-wheat.vercel.app/",
    github_link:"https://github.com/utpanna-pradhan/bolt-portfolio"
  },
  { 
    id: 6,
    img: img6,
    title: "GitHub Profile Analyzer",
    description: "Enter your github user name and it will return all of your git-hub contribution in calender and card format with pagination ",
    tags: ["React js","Bootstrap5","API","Typescript"],
    link: "https://github-profile-analyzer-navy.vercel.app/",
    github_link:"https://github.com/utpanna-pradhan/Github-Profile-Analyzer"
  },
   {
    id: 15,
    img: img15,
    title: "Virtual Pet Simulator",
    description: "Virtual Pet Simulator A fun interactive web application where users take care of a virtual pet. Users can feed, play with, and put the pet to sleep, while managing its hunger, happiness, and energy levels.",
    tags: ["HTML", "CSS", "JavaScript","Bootstrap5"],
    link: "https://utpanna-pradhan.github.io/Pet-simulator/",
   github_link:"https://github.com/utpanna-pradhan/Pet-simulator"
  },
    {
    id: 16,
    img: img16,
    title: "Digital E gramm panchayat",
    description: "Digital E Gram Panchayat is a project aimed at digitizing rural government services for better citizen engagement and ease of access.",
    tags: ["HTML", "CSS", "JavaScript","Firebase"],
    link: "https://utpanna-pradhan.github.io/Digital_E_GramPanchayat/",
    github_link:"https://github.com/utpanna-pradhan/Digital_E_GramPanchayat"
  },
    {
    id: 9,
    img: img9,
    title: "Text Manipulation Editor",
    description: "A Text Manipulation Editor that allows users to transform text with features like copy, uppercase, lowercase, capitalize, bold, and italic etc.",
    tags: ["React js"],
    link: "https://utpanna-pradhan.github.io/Text_Manipulation_Editor/",
   github_link:"https://github.com/utpanna-pradhan/Text_Manipulation_Editor"
  },
    {
    id: 11,
    img: img11,
    title: "User Management",
    description: "It includes functionality for login, pagination, search,alert,modal, edit, and delete operations ",
    tags: ["React js", "Axios", "Bootstrap5"],
    link: "https://user-management-3zba.vercel.app/",
    github_link:"https://github.com/utpanna-pradhan/User-management"
  },
      {
    id: 12,
    img: img12,
    title: "Weather API",
    description: "It allows users to search for any city and view real-time weather information",
    tags: ["HTML", "CSS", "JavaScript","API","Bootstrap5"],
    link: "https://utpanna-pradhan.github.io/weatherAPI/",
    github_link:"https://github.com/utpanna-pradhan/weatherAPI"

  },
  {
    id: 7,
    img: img7,
    title: "Static Chat App",
    description: "A static chat app that features a clean UI for seamless message display.",
    tags: ["React js", "Bootstrap5 ", "Redux"],
    link: "https://utpanna-pradhan.github.io/Chat_app/",
     github_link:"https://github.com/utpanna-pradhan/Chat_app"
  },
  {
    id: 8,
    img: img8,
    title: "Vue project",
    description: "A Vue.js application where selecting a category triggers an API call to fetch relevant data, displayed using cards also it has interactive Owl Carousel. This project highlights dynamic content loading, smooth category-based filtering, and responsive carousel integration.",
    tags: ["vue js","Bootstrap5","API"],
    link: "https://utpanna-pradhan.github.io/Vue/",
    github_link:"https://github.com/utpanna-pradhan/Vue"
  },




   

  {
    id: 10,
    img: img10,
    title: "Form Validation",
    description: "A Form Validation project that validates user inputs in real-time for fields like name, email, password, and more. It demonstrates custom error handling, input feedback, and dynamic UI updates without using any libraries.",
    tags: ["HTML", "CSS", "Vanilla js"],
    link: "https://utpanna-pradhan.github.io/Formvalidation/",
     github_link:"https://github.com/utpanna-pradhan/Formvalidation"
  },
    {
    id: 14,
    img: img14,
    title: "Dynamic Meet link change",
    description: "A simple web application that dynamically displays a meeting link based on the email entered. The meeting link updates in real-time, allowing different users to get personalized links.",
    tags: ["HTML", "CSS", "JavaScript","Bootstrap5"],
    link: "https://utpanna-pradhan.github.io/Dynamic-link-change/",
     github_link:"https://github.com/utpanna-pradhan/Dynamic-link-change"
  },
   


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
    <section className="work-section p-4">
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