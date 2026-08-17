import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import './PromotionsPage.css';

const PromotionsPage = () => {
  return (
    <>
      <PageHeader title="Exclusive Promotions" subtitle="Elevate Your Game" />
      <div className="page-content animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="promotions-page-details">
          
          <div className="featured-promo">
            <div className="featured-promo-text">
              <span className="featured-badge">Upcoming Feature</span>
              <h2>Texas Hold'em <span>Events</span></h2>
              <p>Our next key focus is to build a strong and consistent Texas Hold’em quorum. Get ready for exciting events and tournaments supported by attractive bonuses designed to drive long-term participation and retention.</p>
              <Link to="/contact" className="promo-btn" style={{alignSelf: 'flex-start', display: 'inline-block'}}>Opt In Now</Link>
            </div>
            <div className="featured-promo-image">
              {/* Empty div for background styling and decorative pseudo-element */}
            </div>
          </div>

          <div className="promo-grid">
            <div className="promo-card">
              <div className="promo-icon">🎁</div>
              <h3 className="promo-title">Attractive Bonuses</h3>
              <p className="promo-desc">Royal Flush stands out for its attractive bonuses. Join the action at our ROE or PLO5 tables to start earning today.</p>
              <div className="promo-value">Instant Rewards</div>
              <Link to="/contact" className="promo-btn" style={{ display: 'block', boxSizing: 'border-box' }}>Claim Offer</Link>
            </div>

            <div className="promo-card" style={{ animationDelay: '0.2s' }}>
              <div className="promo-icon">🤝</div>
              <h3 className="promo-title">Player Engagement</h3>
              <p className="promo-desc">Our continuous engagement with players and strong relationships create a comfortable and memorable experience for everyone.</p>
              <div className="promo-value">VIP Treatment</div>
              <Link to="/contact" className="promo-btn" style={{ display: 'block', boxSizing: 'border-box' }}>Learn More</Link>
            </div>

            <div className="promo-card" style={{ animationDelay: '0.4s' }}>
              <div className="promo-icon">💸</div>
              <h3 className="promo-title">Instant Cashouts</h3>
              <p className="promo-desc">We respect your time and winnings. Enjoy seamless, instant cashouts from our professional yet friendly team.</p>
              <div className="promo-value">Zero Delay</div>
              <Link to="/contact" className="promo-btn" style={{ display: 'block', boxSizing: 'border-box' }}>Play Now</Link>
            </div>
          </div>

          <div className="vip-promo-section">
            <h2>Extend Your Sessions</h2>
            <p>At Royal Flush, we encourage players to extend their sessions and return regularly by offering a welcoming environment, dedicated dining area, and ample parking to ensure peace of mind.</p>
            <Link to="/contact" className="promo-btn">Join The Action</Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default PromotionsPage;
