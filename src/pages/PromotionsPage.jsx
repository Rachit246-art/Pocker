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
              <span className="featured-badge">Limited Time Offer</span>
              <h2>The Million Dollar <span>Freeroll</span></h2>
              <p>For a limited time, players who log 100 hours of cash game action in our main floor or VIP rooms will earn a seat to our exclusive Million Dollar Freeroll event. No buy-in, pure profit, and the ultimate bragging rights.</p>
              <Link to="/contact" className="promo-btn" style={{alignSelf: 'flex-start', display: 'inline-block'}}>Opt In Now</Link>
            </div>
            <div className="featured-promo-image">
              {/* Empty div for background styling and decorative pseudo-element */}
            </div>
          </div>

          <div className="promo-grid">
            <div className="promo-card">
              <div className="promo-icon">🎁</div>
              <h3 className="promo-title">Welcome Bonus</h3>
              <p className="promo-desc">Join the club today and receive a luxurious matched bonus on your first deposit, along with complimentary access to the lounge.</p>
              <div className="promo-value">100% Match</div>
              <Link to="/contact" className="promo-btn" style={{ display: 'block', boxSizing: 'border-box' }}>Claim Offer</Link>
            </div>

            <div className="promo-card" style={{ animationDelay: '0.2s' }}>
              <div className="promo-icon">💎</div>
              <h3 className="promo-title">High Roller Reload</h3>
              <p className="promo-desc">For our Black Diamond members. Enjoy a massive reload bonus every weekend, deposited directly into your club account.</p>
              <div className="promo-value">Up to $5K</div>
              <Link to="/contact" className="promo-btn" style={{ display: 'block', boxSizing: 'border-box' }}>Claim Offer</Link>
            </div>

            <div className="promo-card" style={{ animationDelay: '0.4s' }}>
              <div className="promo-icon">🏎️</div>
              <h3 className="promo-title">The Grand Giveaway</h3>
              <p className="promo-desc">Earn raffle tickets for every hour played at cash tables. At the end of the month, one lucky member drives away in a luxury sports car.</p>
              <div className="promo-value">Win a Porsche</div>
              <Link to="/contact" className="promo-btn" style={{ display: 'block', boxSizing: 'border-box' }}>Learn More</Link>
            </div>
          </div>

          <div className="vip-promo-section">
            <h2>Invitation Only</h2>
            <p>Our most exclusive promotions, private cash game invites, and high-stakes tournament entries are reserved for our Black Diamond and Platinum tier members. Discretion and unparalleled luxury await.</p>
            <Link to="/contact" className="promo-btn">Inquire with Concierge</Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default PromotionsPage;
