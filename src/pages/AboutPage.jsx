import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About Us" subtitle="Welcome to Royal Flush" />
      <div className="page-content animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="about-page-details">
          
          <section className="heritage-section">
            <div className="heritage-text">
              <h2>About <span>Royal Flush</span></h2>
              <p>Royal Flush offers a diverse range of games, including ₹5K and ₹10K ROE, ₹20K, ₹25K and ₹50K PLO5, along with higher-stakes action. Our location is convenient, with ample parking and a separate dining area where players can relax and enjoy their meals peacefully. We also provide instant cashouts and maintain strong player engagement through a professional yet friendly team, creating a comfortable overall experience.</p>
              
              <h2 style={{marginTop: '2rem'}}>Why Players Choose <span>Royal Flush</span></h2>
              <p>Royal Flush stands out for its incredible player pool, exciting action, attractive bonuses, and friendly, welcoming environment. Our continuous engagement with players and strong relationships create a comfortable and memorable experience, encouraging players to extend their sessions and return regularly.</p>

              <h2 style={{marginTop: '2rem'}}>Tables & <span>Future Plans</span></h2>
              <p>Royal Flush currently focuses on maintaining a strong and consistent ₹5K and ₹10K ROE action, along with established ₹20K, ₹25K and ₹50K PLO5 tables and a sustained PLO5 quorum. Our next key focus is to build a strong and consistent Texas Hold’em quorum, Events and tournaments supported by attractive bonuses and regular player engagement to drive long-term participation and retention.</p>
            </div>
            <div className="heritage-image">
              <img src="/Real images/ChatGPT Image Sep 3, 2026, 11_23_24 AM.png" alt="Royal Flush Interior" />
            </div>
          </section>

          <section className="membership-tiers" style={{marginTop: '4rem'}}>
            <h2>Experience The Action</h2>
            <div className="tier-cards" style={{justifyContent: 'center'}}>
              <div className="tier-card">
                <h3>Join The Tables</h3>
                <div className="price">₹5K - ₹50K+<span> Stakes</span></div>
                <ul>
                  <li>Exciting ROE & PLO5 Action</li>
                  <li>Instant Cashouts</li>
                  <li>Ample Parking & Dining Area</li>
                  <li>Attractive Bonuses</li>
                </ul>
                <Link to="/contact" className="tier-btn" style={{ display: 'block', boxSizing: 'border-box' }}>Contact Us Now</Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default AboutPage;
