import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="wcu-section">
      <div className="wcu-header">
        <h4 className="wcu-subtitle">LOREM IPSUM</h4>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        
        {/* Medium Box Top Right */}
        <div className="wcu-card wcu-medium">
          <div className="wcu-card-content">
            <div className="wcu-icon">💎</div>
            <h3>Exclusive Rewards</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        {/* Medium Box Bottom Right */}
        <div className="wcu-card wcu-medium wcu-darker">
          <div className="wcu-card-content">
            <div className="wcu-icon">⚡</div>
            <h3>Instant Payouts</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        
        {/* Wide Box Bottom */}
        <div className="wcu-card wcu-wide">
           <div className="wcu-card-content horizontal">
             <div className="wcu-wide-text">
               <h3>World-Class Customer Support</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
