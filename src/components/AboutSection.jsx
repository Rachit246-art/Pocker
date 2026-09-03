import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <img src="/Real images/ChatGPT Image Sep 3, 2026, 11_25_23 AM.png" alt="About Royal Flush" className="about-image" />
            <div className="about-gold-frame"></div>
          </div>
        </div>
        <div className="about-text-column">
          <h4 className="about-subtitle">WELCOME TO ROYAL FLUSH</h4>
          <h2 className="about-title">ABOUT <span className="gold-text">US</span></h2>
          <div className="about-divider"></div>
          <p className="about-description">
            Royal Flush stands out for its incredible player pool, exciting action, attractive bonuses, and friendly, welcoming environment. Our continuous engagement with players and strong relationships create a comfortable and memorable experience, encouraging players to extend their sessions and return regularly.
          </p>
          <p className="about-description">
            We offer a diverse range of games, including ₹5K and ₹10K ROE, ₹20K, ₹25K and ₹50K PLO5, along with higher-stakes action. Our location is convenient, with ample parking and a separate dining area.
          </p>
          <div className="about-stats">
             <div className="about-stat-item">
               <span className="about-stat-number">₹5K+</span>
               <span className="about-stat-text">Stakes Action</span>
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
