import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import OffersSection from './components/OffersSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import FacilitiesSection from './components/FacilitiesSection';
import TournamentsSection from './components/TournamentsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <StatsSection />
        <FeaturesSection />
        <OffersSection />
        <AboutSection />
        <WhyChooseUs />
        <FacilitiesSection />
        <TournamentsSection />
        <GallerySection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
