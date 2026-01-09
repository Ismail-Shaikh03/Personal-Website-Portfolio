import React from 'react';
import './Skills.css';
import { useScrollAnimation } from './useScrollAnimation';

function Skills() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className={`skills-section ${isVisible ? 'visible' : ''}`} id="skills" ref={ref}>
      <div className="skills-container">
        <h2 className="skills-main-title">Skills & Technologies</h2>

        <div className="skills-categories">
          <div className="skill-category">
            <h4 className="category-title">Languages</h4>
            <div className="skills-list">
              <span>Python</span>
              <span>Java</span>
              <span>C</span>
              <span>C++</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>SQL</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bash</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="category-title">Frameworks & Libraries</h4>
            <div className="skills-list">
              <span>React.js</span>
              <span>Vite</span>
              <span>Tailwind CSS</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Spring Boot</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Scikit-learn</span>
              <span>PyTorch</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="category-title">Databases</h4>
            <div className="skills-list">
              <span>MySQL</span>
              <span>Google Cloud SQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="category-title">Tools & Technologies</h4>
            <div className="skills-list">
              <span>Git</span>
              <span>GitHub Actions</span>
              <span>Linux (Ubuntu)</span>
              <span>AWS EC2</span>
              <span>Route 53</span>
              <span>MySQL</span>
              <span>Google Cloud SQL</span>
              <span>RESTful APIs</span>
              <span>Selenium</span>
              <span>JSON</span>
              <span>npm</span>
              <span>Figma</span>
              <span>OpenAI API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

