import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation';
import Home from './components/Home';
import Experience from './components/Experience';
import Work from './components/Work';
import Skills from './components/Skills';
import Blogs from './components/Blogs';
import './App.css';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>
{/* 
      <footer className="footer">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer> */}
      <Footer />
    </div>
  );
}