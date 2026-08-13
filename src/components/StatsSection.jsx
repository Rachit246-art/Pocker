import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { id: 1, value: '10K+', label: 'Active Players', delay: '0.1s' },
    { id: 2, value: '50+', label: 'Daily Tournaments', delay: '0.3s' },
    { id: 3, value: '24/7', label: 'VIP Action', delay: '0.5s' },
    { id: 4, value: '10+', label: 'Years of Trust', delay: '0.7s' },
  ];

  return (
    <section className="stats-section">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
      
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">THE NUMBERS SPEAK</h2>
          <p className="stats-subtitle">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <div className="stat-card animate-slide-up" style={{ animationDelay: stat.delay }}>
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
