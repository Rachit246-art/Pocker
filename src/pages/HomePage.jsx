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
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      
      <div className="section-preview">
        <AboutSection />
        <div style={{ textAlign: 'center', paddingBottom: '4rem', backgroundColor: '#050505' }}>
          <Link to="/about" className="primary-btn">Discover Our Full Story</Link>
        </div>
      </div>

      <FeaturesSection />
      
      <OffersSection />

      <div className="section-preview">
        <FacilitiesSection />
        <div style={{ textAlign: 'center', paddingBottom: '4rem', backgroundColor: '#080808' }}>
          <Link to="/facilities" className="primary-btn">View All Facilities</Link>
        </div>
      </div>

      <div className="section-preview">
        <FAQSection />
        <div style={{ textAlign: 'center', paddingBottom: '4rem', backgroundColor: '#050505' }}>
          <Link to="/faq" className="primary-btn">View All FAQs</Link>
        </div>
      </div>

      <div className="section-preview">
        <GallerySection />
        <div style={{ textAlign: 'center', paddingBottom: '4rem', backgroundColor: '#080808' }}>
          <Link to="/gallery" className="primary-btn">View Full Gallery</Link>
        </div>
      </div>

      <TestimonialsSection />

      <div style={{ padding: '4rem 0', backgroundColor: '#050505', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--accent-color)', letterSpacing: '4px', fontSize: '1rem', textTransform: 'uppercase', marginBottom: '1rem' }}>STAY CONNECTED</h2>
        <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '2rem' }}>READY TO JOIN THE ELITE?</h3>
        <Link to="/contact" className="primary-btn">Contact Concierge</Link>
      </div>
    </>
  );
};

export default HomePage;
