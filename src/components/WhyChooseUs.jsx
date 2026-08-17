import React from 'react';
import { Link } from 'react-router-dom';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="wcu-section">
      <div className="wcu-header">
        <h4 className="wcu-subtitle">ROYAL FLUSH</h4>
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
            <p>We ensure a secure and friendly environment for all our players, creating a comfortable and memorable experience.</p>
          </div>
        </div>
        
        {/* Medium Box Top Right */}
        <div className="wcu-card wcu-medium">
          <div className="wcu-card-content">
            <div className="wcu-icon">💎</div>
            <h3>Exclusive Rewards</h3>
            <p>Enjoy attractive bonuses, regular promotions, and exceptional player engagement designed to extend your sessions.</p>
          </div>
        </div>

        {/* Medium Box Bottom Right */}
        <div className="wcu-card wcu-medium wcu-darker">
          <div className="wcu-card-content">
            <div className="wcu-icon">⚡</div>
            <h3>Instant Payouts</h3>
            <p>We respect your winnings and offer instant cashouts managed by our professional and welcoming team.</p>
          </div>
        </div>
        
        {/* Wide Box Bottom */}
        <div className="wcu-card wcu-wide">
           <div className="wcu-card-content horizontal">
             <div className="wcu-wide-text">
               <h3>World-Class Customer Support</h3>
               <p>Our continuous engagement with players and strong relationships ensure you always receive VIP treatment and dedicated support.</p>
             </div>
             <div className="wcu-wide-action">
               <Link to="/contact" className="wcu-btn">Contact Concierge</Link>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
