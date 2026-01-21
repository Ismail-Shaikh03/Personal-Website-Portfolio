import React from 'react';
import './InProgress.css';
import { useScrollAnimation } from './useScrollAnimation';

function InProgress() {
  const [ref, isVisible] = useScrollAnimation();

  const inProgressProjects = [
    {
      title: 'Fraud Detection System - Hybrid Fraud Detection Platform',
      description: 'A production-ready hybrid fraud detection system that combines rule-based scoring, statistical analysis, and machine learning to evaluate transaction risk in real-time. The system processes transactions, calculates risk scores, and automatically creates alerts for high-risk transactions requiring analyst review. Features include a React dashboard for transaction monitoring, Spring Boot backend for transaction processing, and a Python FastAPI ML service using Isolation Forest for anomaly detection. The system implements 7 explainable fraud detection rules, statistical deviation scoring, and risk aggregation with configurable weights.',
      technologies: [
        'React', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL',
        'Python', 'FastAPI', 'scikit-learn', 'Docker', 'Nginx'
      ],
      progress: 75,
      codeLink: 'https://github.com/Ismail-Shaikh03/Fraud-Detection'
    }
  ];

  return (
    <section className={`in-progress-section ${isVisible ? 'visible' : ''}`} id="in-progress" ref={ref}>
      <h2 className="in-progress-title">In Progress</h2>
      
      {inProgressProjects.length > 0 ? (
        <div className="in-progress-grid">
          {inProgressProjects.map((project, index) => (
            <article 
              key={index} 
              className="in-progress-card"
              style={{ '--progress': `${project.progress}%` }}
            >
              <div className="in-progress-badge">In Progress</div>
              <div className="progress-percentage" style={{ bottom: `calc(${project.progress}% - 12px)` }}>
                {project.progress}%
              </div>
              <div className="progress-divider" style={{ bottom: `${project.progress}%` }}></div>
              <div className="in-progress-body">
                <h3 className="in-progress-name">{project.title}</h3>
                <p className="in-progress-desc">{project.description}</p>
                
                <div className="in-progress-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                
                <div className="in-progress-actions">
                  {project.codeLink && (
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-outline"
                    >
                      Source Code
                    </a>
                  )}
                </div>
                
                {project.expectedCompletion && (
                  <p className="expected-completion">Expected: {project.expectedCompletion}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="in-progress-empty">
          <p>Currently working on exciting new projects. Check back soon!</p>
        </div>
      )}
    </section>
  );
}

export default InProgress;
