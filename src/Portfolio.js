import React from 'react';
import './Portfolio.css';
import { useScrollAnimation } from './useScrollAnimation';

function Portfolio() {
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      title: 'Strands',
      project_image: `/strands-logo-new.png`,
      description:
        'Strands is a comprehensive web application that unifies salon owners, employees, customers, and administrators in a single platform to streamline salon management operations. The platform addresses the challenge where salons handle scheduling, appointments, and staff management through separate systems, enabling customers to book and pay online, providing salon owners with unified dashboards for staff and revenue management, and offering administrators tools for salon verification and performance analytics. Built with React (Vite), Tailwind CSS, React Router, and Axios on the frontend, and Node.js with Express.js, MySQL, JWT authentication, and bcrypt encryption on the backend. The application features role-based dashboards, appointment management, loyalty tracking, reviews, and photo uploads with a fully responsive design, deployed on AWS EC2 with Route 53. Includes frontend CI/CD pipelines with GitHub Actions and Selenium UI tests with 90% coverage.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'GitHub Actions', 'Selenium', 'AWS EC2', 'Route 53'],
      demoLink: 'https://strands.click',
      codeLink: 'https://github.com/rrojas1819/Strands-Frontend',
      frontendLink: 'https://github.com/rrojas1819/Strands-Frontend',
      backendLink: 'https://github.com/rrojas1819/Strands-Backend'
    },
    {
      title: 'Coursify – AI Schedule Builder',
      project_image: `/Coursify.png`,
      description:
        'A hackathon project that demonstrates how AI can assist students in academic planning. This AI-powered schedule builder helps students automatically generate and optimize their class schedules by leveraging OpenAI\'s Assistant API. The application intelligently populates schedule fields and provides personalized course recommendations, making the scheduling process more efficient and intuitive. Built with a modern tech stack including React (Vite) for the frontend, Node.js for the backend, and MySQL hosted on Google Cloud SQL for database management. The project integrates OpenAI\'s Assistant API to provide intelligent scheduling assistance, automating the traditionally time-consuming process of course registration and schedule planning.',
      technologies: ['React', 'Vite', 'Node.js', 'MySQL', 'Google Cloud SQL', 'OpenAI Assistant'],
      demoLink: 'https://www.coursify1.com',
      codeLink: 'https://github.com/Ismail-Shaikh03/Coursify'
    },
    {
      title: 'Taste of Worlds – Recipe Web App',
      project_image: `/TasteofWorlds.png`,
      description:
        'Taste of Worlds is a full-stack web application that allows users to explore and discover international meals from various cuisines around the globe. The platform provides an intuitive interface where users can search, filter, and view detailed information about meals categorized by region, type, and ingredients. Built as a hands-on learning project, this application emphasizes clean code practices, RESTful API development, and scalable deployment. Users can browse an extensive collection of international recipes, view detailed meal descriptions with ingredients and preparation instructions, and use advanced search and filtering options for seamless navigation. The application features a fully deployed backend RESTful API using Node.js and Express, securely hosted on AWS EC2 with optimized MySQL database queries for efficient data retrieval.',
      technologies: ['Node.js', 'Express.js', 'MySQL', 'AWS EC2', 'HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://youtu.be/VDM5Tn_ZImE',
      codeLink: 'https://github.com/Ismail-Shaikh03/Taste-of-Worlds'
    },
    {
      title: 'House of Health – Doctor Office Portal',
      project_image: `/HouseOfHealth.png`,
      description:
        'House of Health is a comprehensive doctor office portal built using PHP, HTML, CSS, JavaScript, SQL, and MySQL. This full-stack web application enables seamless management of patient information, appointments, and medical procedures. The platform features secure user authentication for personalized access, comprehensive patient management with create, search, and update capabilities, efficient appointment scheduling with booking, viewing, and cancellation functionality, procedure management for scheduling and canceling medical procedures, and a receptionist search feature for quick information retrieval. All features are integrated to ensure smooth and efficient operation of the medical office workflow.',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'SQL', 'MySQL'],
      demoLink: 'https://web.njit.edu/~is385/MainPortal4.html',
      codeLink: 'https://github.com/Ismail-Shaikh03/House-of-Health'
    }
  ];

  return (
    <section className={`portfolio ${isVisible ? 'visible' : ''}`} id="portfolio" ref={ref}>
        <h2 className="portfolioTitle">Portfolio</h2>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <article key={i} className="project-card">
              <div className="project-media">
                {p.project_image ? (
                  <img src={p.project_image} alt={p.title} />
                ) : (
                  <div className="img-placeholder">No Image</div>
                )}
              </div>

              <div className="project-body">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-desc">{p.description}</p>

                <div className="project-tech">
                  {p.technologies.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={p.demoLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                  {p.frontendLink && p.backendLink ? (
                    <>
                      <a href={p.frontendLink} target="_blank" rel="noreferrer" className="btn btn-outline">
                        Frontend
                      </a>
                      <a href={p.backendLink} target="_blank" rel="noreferrer" className="btn btn-outline">
                        Backend
                      </a>
                    </>
                  ) : (
                    <a href={p.codeLink} target="_blank" rel="noreferrer" className="btn btn-outline">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
  );
}

export default Portfolio;
