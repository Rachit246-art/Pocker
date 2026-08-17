import React from 'react';
import PageHeader from '../components/PageHeader';
import './FacilitiesPage.css';

const FacilitiesPage = () => {
  return (
    <>
      <PageHeader title="Our Facilities" subtitle="Luxury at Every Turn" />
      <div className="page-content animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="facilities-page-details">
          
          <div className="facility-showcase">
            <div className="facility-row">
              <div className="facility-text">
                <h2>The <span>Tables</span></h2>
                <p>Experience the excitement of our diverse game offerings on the main floor. We currently focus on maintaining strong and consistent ₹5K and ₹10K ROE action, along with a sustained PLO5 quorum.</p>
                <p>Enjoy our incredible player pool and exciting action in a friendly and welcoming environment where you can extend your sessions comfortably.</p>
                <ul className="facility-features">
                  <li>₹5K and ₹10K ROE Tables</li>
                  <li>Comfortable, Ergonomic Seating</li>
                  <li>Professional & Friendly Team</li>
                  <li>Instant Cashout Desk</li>
                </ul>
              </div>
              <div className="facility-image">
                <img src="/tables_main_floor.jpg" alt="Main Tables" />
              </div>
            </div>

            <div className="facility-row reverse">
              <div className="facility-text">
                <h2>High-Stakes <span>PLO5</span></h2>
                <p>For those seeking higher stakes, Royal Flush offers established ₹20K, ₹25K, and ₹50K PLO5 tables. Engage in intense action with strong player pools while enjoying premium service.</p>
                <ul className="facility-features">
                  <li>₹20K, ₹25K, and ₹50K PLO5</li>
                  <li>Exciting High-Stakes Action</li>
                  <li>Dedicated Support</li>
                  <li>Attractive Bonuses</li>
                </ul>
              </div>
              <div className="facility-image">
                <img src="/high_stakes_plo5.jpg" alt="High Stakes PLO5" />
              </div>
            </div>

            <div className="facility-row">
              <div className="facility-text">
                <h2>Dining & <span>Convenience</span></h2>
                <p>We believe in creating a comfortable overall experience. Our location is extremely convenient, featuring ample parking for all players. Step away from the tables and relax in our separate dining area.</p>
                <ul className="facility-features">
                  <li>Separate Dining Area</li>
                  <li>Peaceful Environment</li>
                  <li>Ample Parking Facilities</li>
                  <li>Strong Player Relationships</li>
                </ul>
              </div>
              <div className="facility-image">
                <img src="/dining_convenience.jpg" alt="Dining & Convenience" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FacilitiesPage;
