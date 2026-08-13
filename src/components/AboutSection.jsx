import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <img src="/about.png" alt="About The Club" className="about-image" />
            <div className="about-gold-frame"></div>
          </div>
        </div>
        <div className="about-text-column">
          <h4 className="about-subtitle">LOREM IPSUM</h4>
          <h2 className="about-title">A TRADITION OF <br/><span className="gold-text">EXCELLENCE</span></h2>
          <div className="about-divider"></div>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="about-stats">
             <div className="about-stat-item">
               <span className="about-stat-number">15+</span>
               <span className="about-stat-text">Years of Legacy</span>
             </div>
             <div className="about-stat-item">
               <span className="about-stat-number">24/7</span>
               <span className="about-stat-text">Premium Service</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
