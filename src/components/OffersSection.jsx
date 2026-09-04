import React from 'react';
import { Link } from 'react-router-dom';
import './OffersSection.css';

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      title: 'ROE & PLO5 Action',
      description: 'Royal Flush offers a diverse range of games, including ₹5K and ₹10K ROE, ₹20K, ₹25K and ₹50K PLO5, along with higher-stakes action.',
      tableData: [
        { game: 'ROE', stakes: '₹5K & ₹10K' },
        { game: 'PLO5', stakes: '₹20K & ₹25K' },
        { game: 'High-Stakes PLO5', stakes: '₹50K' }
      ],
      image: '/Real images/premium_poker_game.jpg',
      reverse: false
    },
    {
      id: 2,
      title: 'VIP Ambience',
      description: 'Enjoy a professional, comfortable setting with our friendly team. We maintain strong player engagement to ensure you have a premium experience every time.',
      image: '/Real images/ChatGPT Image Sep 3, 2026, 11_25_23 AM.png',
      reverse: true
    },
    {
      id: 3,
      title: 'Dining & Cafe',
      description: 'Take a break from the action and relax in our inbuilt cafe. We provide a separate dining area for players to enjoy their meals peacefully without leaving the comfort of the club.',
      image: '/offer3_cafe.jpg',
      reverse: false
    }
  ];

  return (
    <section className="offers-section">
      <div className="offers-header">
        <h2 className="offers-subtitle">THE ACTION</h2>
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
              {offer.tableData && (
                <table className="offer-table">
                  <thead>
                    <tr>
                      <th>Game</th>
                      <th>Stakes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offer.tableData.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.game}</td>
                        <td>{row.stakes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <Link to="/promotions" className="offer-btn">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;
