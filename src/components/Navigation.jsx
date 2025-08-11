import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheet/nav.css";
import { motion } from "framer-motion";
import user from "../assets/user.jpg";

export default function Navigation({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <nav className="navbar d-flex flex-row justify-content-between">
          <div>
            <p className="signature-text mb-0 ps-1 ps-md-4">Utpanna</p>
          </div>

          <div className="nav-container ">
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/experience"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </NavLink>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/work"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </NavLink>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/blogs"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsOpen(false)}
                >
                  Blogs
                </NavLink>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/assets/utpanna pradhan cv 2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV
                </a>
              </motion.div>
            </div>

            <div className="nav-actions">
              <button
                className="hamburger"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </nav>
      </motion.nav>
    </>
  );
}
