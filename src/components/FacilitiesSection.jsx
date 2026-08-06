import React from 'react';
import './FacilitiesSection.css';

const FacilitiesSection = () => {
  const facilities = [
    {
      id: 1,
      title: 'Fine Dining',
      description: 'Experience culinary masterpieces prepared by world-renowned chefs in an intimate, elegant setting.',
      image: '/facility1.png'
    },
    {
      id: 2,
      title: 'Private Suites',
      description: 'Exclusive, high-roller suites offering privacy, personalized service, and uncompromising luxury.',
      image: '/facility2.png'
    }
  ];

  return (
    <section className="facilities-section">
      <div className="facilities-header">
        <h4 className="facilities-subtitle">BEYOND GAMING</h4>
        <h2 className="facilities-title">WORLD-CLASS FACILITIES</h2>
        <div className="facilities-divider"></div>
      </div>
      
      <div className="facilities-container">
        {facilities.map((facility) => (
          <div 
            key={facility.id} 
            className="facility-panel"
            style={{ backgroundImage: `url(${facility.image})` }}
          >
            <div className="facility-overlay"></div>
            <div className="facility-content">
              <h3 className="facility-item-title">{facility.title}</h3>
              <p className="facility-item-desc">{facility.description}</p>
              <button className="facility-btn">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;
