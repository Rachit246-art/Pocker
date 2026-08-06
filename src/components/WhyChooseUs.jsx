import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="wcu-section">
      <div className="wcu-header">
        <h4 className="wcu-subtitle">THE PREMIUM CHOICE</h4>
        <h2 className="wcu-title">WHY CHOOSE US</h2>
        <div className="wcu-divider"></div>
      </div>
      
      <div className="wcu-bento-grid">
        {/* Large Featured Box */}
        <div className="wcu-card wcu-large wcu-bg-image">
          <div className="wcu-card-overlay"></div>
          <div className="wcu-card-content">
            <div className="wcu-icon">🛡️</div>
            <h3>Uncompromising Security</h3>
            <p>Your peace of mind is our top priority. We employ military-grade encryption and state-of-the-art surveillance systems to ensure that your experience is 100% secure, transparent, and fair at all times.</p>
          </div>
        </div>
        
        {/* Medium Box Top Right */}
        <div className="wcu-card wcu-medium">
          <div className="wcu-card-content">
            <div className="wcu-icon">💎</div>
            <h3>Exclusive Rewards</h3>
            <p>Our VIP program offers unmatched perks, from dedicated concierges to private tournaments and high-value cashback on your play.</p>
          </div>
        </div>

        {/* Medium Box Bottom Right */}
        <div className="wcu-card wcu-medium wcu-darker">
          <div className="wcu-card-content">
            <div className="wcu-icon">⚡</div>
            <h3>Instant Payouts</h3>
            <p>We believe your winnings belong to you instantly. Enjoy zero-delay processing and frictionless withdrawals anytime.</p>
          </div>
        </div>
        
        {/* Wide Box Bottom */}
        <div className="wcu-card wcu-wide">
           <div className="wcu-card-content horizontal">
             <div className="wcu-wide-text">
               <h3>World-Class Customer Support</h3>
               <p>Available 24/7/365, our dedicated support team is trained to handle any request with the utmost discretion and efficiency.</p>
             </div>
             <div className="wcu-wide-action">
               <button className="wcu-btn">Contact Concierge</button>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
