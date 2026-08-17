import React from 'react';
import './TournamentsSection.css';

const TournamentsSection = () => {
  const tournaments = [
    {
      id: 1,
      date: 'DAILY',
      time: '24/7',
      title: 'ROE Action & PLO5',
      buyIn: '₹5K+',
      prize: 'High Action'
    },
    {
      id: 2,
      date: 'WEEKENDS',
      time: 'Evening',
      title: 'High-Stakes PLO5',
      buyIn: '₹50K',
      prize: 'Massive Pots'
    },
    {
      id: 3,
      date: 'COMING SOON',
      time: 'TBA',
      title: 'Texas Hold’em Championship',
      buyIn: 'TBA',
      prize: 'Attractive Bonuses'
    }
  ];

  return (
    <section className="tournaments-section" id="tournaments">
      <div className="tournaments-header">
        <h4 className="tournaments-subtitle">THE ACTION</h4>
        <h2 className="tournaments-title">UPCOMING <span className="gold-text">TOURNAMENTS</span></h2>
        <div className="tournaments-divider"></div>
      </div>
      
      <div className="tournaments-schedule">
        {tournaments.map((tourney) => (
          <div key={tourney.id} className="tournament-row">
            <div className="tourney-datetime">
              <span className="tourney-date">{tourney.date}</span>
              <span className="tourney-time">{tourney.time}</span>
            </div>
            
            <div className="tourney-info">
              <h3 className="tourney-name">{tourney.title}</h3>
              <span className="tourney-buyin">Buy-in: {tourney.buyIn}</span>
            </div>
            
            <div className="tourney-prize-container">
              <span className="tourney-prize-label">Prize Pool</span>
              <span className="tourney-prize">{tourney.prize}</span>
            </div>
            
            <div className="tourney-action">
              <button className="tourney-btn">Register Now</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="tournaments-footer">
        <button className="tourney-btn-outline">View Full Schedule</button>
      </div>
    </section>
  );
};

export default TournamentsSection;
