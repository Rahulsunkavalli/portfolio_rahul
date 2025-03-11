import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSetActive = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={handleSetActive}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main>
        <section id="home" className="pt-20">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="projects" className="py-20 bg-gray-900">
          <Projects />
        </section>
        
        <section id="certifications" className="py-20">
          <Certifications />
        </section>
        
        <section id="contact" className="py-20 bg-gray-900">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;