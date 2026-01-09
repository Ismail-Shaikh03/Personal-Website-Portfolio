import React from 'react';
import './About.css';
import { useScrollAnimation } from './useScrollAnimation';

function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div className={`about-section ${isVisible ? 'visible' : ''}`} id="about" ref={ref}>
      <h2 className="aboutTitle">About Me</h2>

      <div className="about-container">
        <div className="photo">
          <img src="/AboutMe.jpg" alt="Me" />
        </div>

        <div className="about-text">
          <p>
            I am Ismail Shaikh, a senior Computer Science student at the New Jersey Institute of Technology with a strong interest in software development, cloud infrastructure, and AI-driven solutions. I enjoy building practical, scalable applications that solve real-world problems, such as my project Coursify, an AI-powered schedule builder hosted on AWS. I am passionate about learning new technologies, improving systems through automation, and creating tools that make a meaningful impact.
          </p>
          <p>
            I love turning ideas into real products and continuously learning modern tooling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
