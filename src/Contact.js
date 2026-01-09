import React from 'react';
import './Contact.css';
import { useScrollAnimation } from './useScrollAnimation';

function Contact() {
  const [ref, isVisible] = useScrollAnimation();
  const contactInfo = [
    {
      title: 'Email',
      detail: 'ismailsshaikh03@gmail.com',
      link: 'mailto:ismailsshaikh03@gmail.com',
      icon: '📧'
    },
    {
      title: 'Phone',
      detail: '(201) 800-3345',
      link: 'tel:+12018003345',
      icon: '📱'
    }
  ];

  return (
    <section className={`contact-section ${isVisible ? 'visible' : ''}`} id="contact" ref={ref}>
      <div className="contact-container">
        <h3 className="info-title">Contact Information</h3>
        
        <div className="contact-cards-wrapper">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <div className="contact-icon-wrapper">
                <span className="contact-icon">{info.icon}</span>
              </div>
              <div className="contact-details">
                <strong className="contact-label">{info.title}</strong>
                {info.link ? (
                  <a href={info.link} className="contact-value">{info.detail}</a>
                ) : (
                  <span className="contact-value">{info.detail}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="social-media">
          <h4 className="social-title">Follow Me</h4>
          <div className="social-links">
            <a href="https://github.com/Ismail-Shaikh03" className="social-link github" target="_blank" rel="noreferrer">
              <span className="social-icon">🐙</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ismailshaikh03" className="social-link linkedin" target="_blank" rel="noreferrer">
              <span className="social-icon">💼</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
