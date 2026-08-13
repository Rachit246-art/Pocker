import React from 'react';
import { Link } from 'react-router-dom';
import './OffersSection.css';

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      title: 'High Stakes Tables',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/offer1.png',
      reverse: false
    },
    {
      id: 2,
      title: 'Exclusive VIP Lounge',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/offer2.png',
      reverse: true
    },
    {
      id: 3,
      title: 'Weekly Grand Tournaments',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/offer3.png',
      reverse: false
    }
  ];

  return (
    <section className="offers-section">
      <div className="offers-header">
        <h2 className="offers-subtitle">LOREM IPSUM</h2>
        <h1 className="offers-title">WHAT WE OFFER</h1>
        <div className="title-divider"></div>
      </div>
      
      <div className="offers-container">
        {offers.map((offer) => (
          <div key={offer.id} className={`offer-row ${offer.reverse ? 'reverse' : ''}`}>
            <div className="offer-image-wrapper">
              <img src={offer.image} alt={offer.title} className="offer-image" />
              <div className="image-overlay"></div>
            </div>
            <div className="offer-content">
              <span className="offer-number">0{offer.id}</span>
              <h3 className="offer-item-title">{offer.title}</h3>
              <p className="offer-item-desc">{offer.description}</p>
              <Link to="/promotions" className="offer-btn">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
