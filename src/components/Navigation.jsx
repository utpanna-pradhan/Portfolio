import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span>MyPortfolio</span>
        </div>
        
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
            to="/skills" 
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </NavLink>
        </div>

        <div className="nav-actions">
          <button 
            className="toggle-btn" 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
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
  );
}