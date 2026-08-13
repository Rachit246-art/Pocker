import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import OffersSection from '../components/OffersSection';
import AboutSection from '../components/AboutSection';
import FacilitiesSection from '../components/FacilitiesSection';
import FAQSection from '../components/FAQSection';
import GallerySection from '../components/GallerySection';

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      
      <div className="section-preview">
        <AboutSection />
        <div style={{ textAlign: 'center', paddingBottom: '4rem', backgroundColor: '#050505' }}>
          <Link to="/about" className="tourney-btn">Read Full Story</Link>
        </div>
      </div>

      <FeaturesSection />

      <div className="section-preview">
        <FacilitiesSection />
        <div style={{ textAlign: 'center', paddingBottom: '4rem', backgroundColor: '#080808' }}>
          <Link to="/facilities" className="tourney-btn">View All Facilities</Link>
        </div>
      </div>

      <div className="section-preview">
        <FAQSection />
        <div style={{ textAlign: 'center', paddingBottom: '4rem', backgroundColor: '#050505' }}>
          <Link to="/faq" className="tourney-btn">View All FAQs</Link>
        </div>
      </div>

      <div className="section-preview">
        <GallerySection />
        <div style={{ textAlign: 'center', paddingBottom: '4rem', backgroundColor: '#080808' }}>
          <Link to="/gallery" className="tourney-btn">View Full Gallery</Link>
        </div>
      </div>

      <OffersSection />
    </>
  );
};

export default HomePage;
