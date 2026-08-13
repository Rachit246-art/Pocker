import React from 'react';
import PageHeader from '../components/PageHeader';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About Us" subtitle="The Legacy of High Stakes" />
      <div className="page-content animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="about-page-details">
          
          <section className="heritage-section">
            <div className="heritage-text">
              <h2>A Tradition of <span>Excellence</span></h2>
              <p>Founded in 2008, our Poker Club was established with a singular vision: to provide the ultimate luxury gaming experience for the world's most discerning players. We believe that poker is more than just a game; it is an art form, a battle of wits, and a social experience that deserves a setting of unparalleled elegance.</p>
              <p>Every detail of our club, from the bespoke felt on our tables to the ambient lighting and premium concierge service, has been meticulously designed to ensure your time with us is nothing short of extraordinary.</p>
              <p>Whether you are joining us for a casual evening in the lounge or a high-stakes showdown in the VIP room, you will experience the pinnacle of luxury gaming.</p>
            </div>
            <div className="heritage-image">
              <img src="/about.png" alt="Club Interior" />
            </div>
          </section>

          <section className="membership-tiers">
            <h2>Membership Tiers</h2>
            <div className="tier-cards">
              <div className="tier-card">
                <h3>Gold Member</h3>
                <div className="price">$5,000<span>/yr</span></div>
                <ul>
                  <li>Access to main floor tables</li>
                  <li>Complimentary premium beverages</li>
                  <li>Priority tournament registration</li>
                  <li>Monthly member-only events</li>
                </ul>
                <button className="tier-btn">Apply Now</button>
              </div>
              
              <div className="tier-card">
                <h3>Black Diamond</h3>
                <div className="price">$25,000<span>/yr</span></div>
                <ul>
                  <li>Exclusive High Roller Room access</li>
                  <li>24/7 Personal Concierge</li>
                  <li>Complimentary fine dining</li>
                  <li>Private table booking</li>
                  <li>VIP helicopter transfer service</li>
                </ul>
                <button className="tier-btn">Inquire for Details</button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default AboutPage;
