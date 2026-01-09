import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import { useActiveSection } from './useActiveSection';

function App() {
  const activeSection = useActiveSection();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="personal-profile-app">
      <nav className="header-navigation">
        <div className="navigation-menu">
          <p 
            onClick={() => scrollToSection('home')}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </p>
          <p 
            onClick={() => scrollToSection('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </p>
          <p 
            onClick={() => scrollToSection('skills')}
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </p>
          <p 
            onClick={() => scrollToSection('portfolio')}
            className={activeSection === 'portfolio' ? 'active' : ''}
          >
            Portfolio
          </p>
          <p 
            onClick={() => scrollToSection('resume')}
            className={activeSection === 'resume' ? 'active' : ''}
          >
            Resume
          </p>
          <p 
            onClick={() => scrollToSection('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </p>
        </div>
      </nav>
      
      <div className="main-content-area">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
      </div>

      {showBackToTop && (
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
