import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

import logo from "../assets/logo.png"

const Navigation = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = ["Home", "Experience", "Work", "Contact", "Skills"];

  return (
    <nav className="navbar navbar-expand-md fixed-top bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <motion.a
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="navbar-brand fw-bold text-dark"
          href="#"
        >
        <img src={logo} alt="" width={40} height={40} />
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="navbar-toggler border-0"
          type="button"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navbar Collapse */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className="nav-item"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  className="nav-link text-dark fw-semibold"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-outline-dark ms-3"
          >
            {darkMode ? <Sun size={20} className="text-warning" /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
