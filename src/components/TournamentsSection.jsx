import React from 'react';
import './TournamentsSection.css';

const TournamentsSection = () => {
  const tournaments = [
    {
      id: 1,
      date: 'AUG 15',
      time: '19:00 EST',
      title: 'Summer High Roller Classic',
      buyIn: '$5,000',
      prize: '$250,000 GTD'
    },
    {
      id: 2,
      date: 'AUG 22',
      time: '20:00 EST',
      title: 'Weekly Deepstack Bounty',
      buyIn: '$1,000',
      prize: '$50,000 GTD'
    },
    {
      id: 3,
      date: 'SEP 01',
      time: '14:00 EST',
      title: 'The Platinum Main Event',
      buyIn: '$10,000',
      prize: '$1,000,000 GTD'
    }
  ];

  return (
    <section className="tournaments-section" id="tournaments">
      <div className="tournaments-header">
        <h4 className="tournaments-subtitle">LOREM IPSUM</h4>
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
