import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <img src="/about.png" alt="About The Club" className="about-image" />
            <div className="about-gold-frame"></div>
          </div>
        </div>
        <div className="about-text-column">
          <h4 className="about-subtitle">OUR LEGACY</h4>
          <h2 className="about-title">A TRADITION OF <br/><span className="gold-text">EXCELLENCE</span></h2>
          <div className="about-divider"></div>
          <p className="about-description">
            Established with a vision to redefine luxury gaming, our club has been the premier destination for high-stakes excitement and unparalleled service. We blend the timeless allure of classic casino elegance with modern, world-class amenities.
          </p>
          <p className="about-description">
            Whether you are a seasoned professional looking for competitive tables or a guest seeking a lavish night out, we provide an environment where every detail is meticulously crafted for your enjoyment.
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
          <button className="about-btn">Discover Our History</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
