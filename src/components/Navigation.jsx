import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/nav.css';
import { motion } from "framer-motion";


export default function Navigation({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
   
    <motion.nav
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <nav className="navbar d-flex flex-row justify-content-between" >
    <div>
           <p class="signature-text mb-0">Utpanna</p>
    </div>

      <div className="nav-container">
       
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/experience" 
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </NavLink>
          <NavLink 
            to="/work" 
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            Work
          </NavLink>
         
          <NavLink 
            to="/blogs" 
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
          Blogs
          </NavLink>
           <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            Contact 
          </NavLink> 
         
        </div>

        <div className="nav-actions">
        
          <button 
            className="hamburger" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>


</motion.nav>
    
    </>
  
  );
}