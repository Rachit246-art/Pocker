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
                <h2>The Main <span>Floor</span></h2>
                <p>Step into an atmosphere of high-energy gaming on our expansive main floor. Featuring 20 state-of-the-art poker tables outfitted with premium speed cloth and ergonomic seating, the main floor is the beating heart of our club.</p>
                <p>Every table is serviced by our professional, internationally trained dealers to ensure a seamless and fair game.</p>
                <ul className="facility-features">
                  <li>20 Custom-built Poker Tables</li>
                  <li>RFID Chip Tracking Technology</li>
                  <li>Tableside Food & Beverage Service</li>
                  <li>High-Definition Sporting Screens</li>
                </ul>
              </div>
              <div className="facility-image">
                <img src="/about.png" alt="Main Floor" />
              </div>
            </div>

            <div className="facility-row reverse">
              <div className="facility-text">
                <h2>The High Roller <span>Room</span></h2>
                <p>Reserved for our Black Diamond members and high-stakes cash games, the High Roller Room offers ultimate privacy and bespoke service. Tucked away behind frosted glass doors, this soundproofed sanctuary provides the ultimate environment for serious players.</p>
                <ul className="facility-features">
                  <li>Private Entrance and Restrooms</li>
                  <li>Dedicated Dedicated Concierge and Chef</li>
                  <li>No-Limit Action with Bespoke Stakes</li>
                  <li>Luxurious Leather Seating</li>
                </ul>
              </div>
              <div className="facility-image">
                <img src="/about.png" alt="High Roller Room" />
              </div>
            </div>

            <div className="facility-row">
              <div className="facility-text">
                <h2>The <span>Lounge & Bar</span></h2>
                <p>Take a break from the action in our luxurious lounge. Featuring a fully stocked bar with rare single-malt scotches, craft cocktails, and a curated cigar humidor, it is the perfect place to celebrate a win or commiserate a bad beat.</p>
                <ul className="facility-features">
                  <li>Premium Spirits & Handcrafted Cocktails</li>
                  <li>Walk-in Cigar Humidor</li>
                  <li>Live Jazz on Weekends</li>
                  <li>Gourmet Dining Menu</li>
                </ul>
              </div>
              <div className="facility-image">
                <img src="/about.png" alt="Lounge & Bar" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FacilitiesPage;
