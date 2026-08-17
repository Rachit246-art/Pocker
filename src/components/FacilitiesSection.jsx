import React from 'react';
import { Link } from 'react-router-dom';
import './FacilitiesSection.css';

const FacilitiesSection = () => {
  const facilities = [
    {
      id: 1,
      title: 'Separate Dining',
      description: 'Relax away from the tables and enjoy your meals peacefully in our dedicated dining area.',
      image: '/facility1.png'
    },
    {
      id: 2,
      title: 'Ample Parking',
      description: 'Extremely convenient location offering ample parking for a stress-free visit.',
      image: '/facility2.png'
    }
  ];

  return (
    <section className="facilities-section" id="facilities">
      <div className="facilities-header">
        <h4 className="facilities-subtitle">AMENITIES</h4>
        <h2 className="facilities-title">COMFORT & CONVENIENCE</h2>
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
              <Link to="/facilities" className="facility-btn">Explore</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesSection;
