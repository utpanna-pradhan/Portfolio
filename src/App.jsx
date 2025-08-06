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
import Contact from './components/Contact';

export default function App() {


  return (
    <div className="app" >
   
           <Navbar  />
      
      <main className="main-content ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
       
   

      <Footer />
    </div>
  );
}