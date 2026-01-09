import React from 'react';
import './Resume.css';
import { useScrollAnimation } from './useScrollAnimation';

function Resume() {
  const [ref, isVisible] = useScrollAnimation();
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "New Jersey Institute of Technology",
      year: "Sep 2022 – May 2026",
      coursework: "Data Structures & Algorithms, Web Applications, Data Visualization, Object-Oriented Programming, Software Engineering, Discrete Mathematics, Operating Systems, Cybersecurity, Database Systems, Computer Networks"
    }
  ];

  const projects = [
    {
      title: "Strands",
      period: "Sep 2025 – Dec 2025",
      description: "Developed a production-grade frontend for a salon management platform using React (Vite), Tailwind CSS, and modular UI components while collaborating with backend developers using Node.js, Express.js, and MySQL.",
      achievements: [
        "Implemented JWT login flows, role-based dashboards, and core features including appointments, salon verification, loyalty tracking, reviews, and photo uploads with a fully responsive design.",
        "Integrated backend APIs and optimized filtering, sorting, and pagination, reducing unnecessary network requests by about 50% and improving page responsiveness.",
        "Built frontend CI/CD pipelines with GitHub Actions and developed Selenium UI tests with 90% coverage, reducing manual deployment time by 93% and deploying the application on AWS EC2 with Route 53 hosting."
      ],
      links: {
        demo: "strands.click",
        frontend: "github.com/rrojas1819/Strands-Frontend",
        backend: "github.com/rrojas1819/Strands-Backend"
      }
    },
    {
      title: "Coursify",
      period: "Mar 2025 – Jun 2025",
      description: "Developed an AI-powered schedule builder using React, Spring Boot, and MySQL, integrating RateMyProfessors data to personalize schedules and rank instructors by quality.",
      achievements: [
        "Implemented Fail2Ban with custom SSH and HTTP filters, reducing unauthorized traffic by 70% and automatically blocking 50+ malicious IP addresses.",
        "Reduced database infrastructure costs by 97% by migrating MySQL from Google Cloud SQL ($4/day) to a secure local server ($1/month)."
      ],
      links: {
        demo: "www.coursify1.com",
        code: "github.com/Ismail-Shaikh03/Coursify"
      }
    }
  ];

  const experience = [
    {
      title: "Team Lead Researcher",
      company: "New Jersey Institute of Technology",
      period: "Sep 2023 – Present",
      responsibilities: [
        "Researched 9 AI bias detection methods and analyzed ChatGPT outputs to identify age-related bias patterns.",
        "Mentored 5 new members through onboarding with tailored guidance and support."
      ],
      link: "dl.acm.org/doi/10.1145/3663547.3746464"
    },
    {
      title: "Web Intern",
      company: "Radiant Academy",
      period: "Sep 2022 – Jun 2023",
      responsibilities: [
        "Migrated the organization's website to a new hosting platform, improving data efficiency by 17%.",
        "Coordinated 20+ community events at a local youth center to boost engagement and participation."
      ]
    }
  ];

  const leadership = [
    {
      title: "Vice President",
      organization: "FinTech Club",
      period: "Sep 2023 – Sep 2024",
      responsibilities: [
        "Led a 30+ member club, overseeing committees, supporting the president, and ensuring smooth operations.",
        "Organized and hosted 25+ workshops, panels, and collaborative projects to drive member engagement."
      ]
    }
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner"
  ];

  return (
    <section className={`resume-section ${isVisible ? 'visible' : ''}`} id="resume" ref={ref}>
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                    </div>
                    {edu.coursework && (
                      <p className="item-coursework">Relevant Coursework: {edu.coursework}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-block">
            <h3 className="section-title">Projects</h3>
            <div className="timeline">
              {projects.map((proj, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{proj.title}</h4>
                    <p className="item-subtitle">{proj.period}</p>
                    <ul className="responsibilities">
                      <li className="item-description">{proj.description}</li>
                      {proj.achievements.map((ach, achIndex) => (
                        <li key={achIndex}>{ach}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      {proj.links.demo && (
                        <a href={`https://${proj.links.demo}`} target="_blank" rel="noreferrer" className="project-link">
                          {proj.links.demo}
                        </a>
                      )}
                      {proj.links.frontend && (
                        <a href={`https://${proj.links.frontend}`} target="_blank" rel="noreferrer" className="project-link">
                          {proj.links.frontend}
                        </a>
                      )}
                      {proj.links.backend && (
                        <a href={`https://${proj.links.backend}`} target="_blank" rel="noreferrer" className="project-link">
                          {proj.links.backend}
                        </a>
                      )}
                      {proj.links.code && (
                        <a href={`https://${proj.links.code}`} target="_blank" rel="noreferrer" className="project-link">
                          {proj.links.code}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                    {exp.link && (
                      <a href={`https://${exp.link}`} target="_blank" rel="noreferrer" className="project-link">
                        {exp.link}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-block">
            <h3 className="section-title">Leadership & Activities</h3>
            <div className="timeline">
              {leadership.map((lead, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{lead.title}</h4>
                    <p className="item-subtitle">{lead.organization} ({lead.period})</p>
                    <ul className="responsibilities">
                      {lead.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-block">
            <h3 className="section-title">Certifications</h3>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">{cert}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
