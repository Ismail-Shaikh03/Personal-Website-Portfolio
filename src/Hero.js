import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">Ismail Shaikh</h1>
          <h2 className="hero-title">Software Engineer</h2>
          <p className="hero-tagline">
            Building scalable applications and AI-driven solutions. 
            Passionate about turning ideas into impactful products.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-hero btn-primary-hero"
              onClick={() => scrollToSection('portfolio')}
            >
              View My Work
            </button>
            <button 
              className="btn-hero btn-secondary-hero"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;

