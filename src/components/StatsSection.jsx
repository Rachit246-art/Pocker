import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { id: 1, value: '10K+', label: 'Active Players', offset: '0px' },
    { id: 2, value: '50+', label: 'Daily Tournaments', offset: '40px' },
    { id: 3, value: '$5M+', label: 'Total Winnings', offset: '-20px' },
    { id: 4, value: '10+', label: 'Years of Trust', offset: '20px' },
  ];

  return (
    <section className="stats-section">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
      
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">THE NUMBERS SPEAK</h2>
          <p className="stats-subtitle">Join the city's most trusted gaming community.</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <div className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
              {index < stats.length - 1 && <div className="stat-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
