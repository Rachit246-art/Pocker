import React from 'react';
import './OffersSection.css';

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      title: 'High Stakes Tables',
      description: 'Experience the ultimate thrill at our premium high stakes tables, featuring professional dealers, uninterrupted service, and a discreet, luxurious atmosphere designed for serious players.',
      image: '/offer1.png',
      reverse: false
    },
    {
      id: 2,
      title: 'Exclusive VIP Lounge',
      description: 'Relax and unwind in our private VIP lounge. Enjoy complimentary top-tier cuisine, premium beverages, and a quiet sanctuary away from the main floor action.',
      image: '/offer2.png',
      reverse: true
    },
    {
      id: 3,
      title: 'Weekly Grand Tournaments',
      description: 'Compete against the best in our weekly grand tournaments. With massive prize pools, structured blinds, and a competitive environment, it is the perfect stage to showcase your skills.',
      image: '/offer3.png',
      reverse: false
    }
  ];

  return (
    <section className="offers-section">
      <div className="offers-header">
        <h2 className="offers-subtitle">DISCOVER</h2>
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
              <button className="offer-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
