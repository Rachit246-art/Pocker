import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PromotionsPage from './pages/PromotionsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import FAQPage from './pages/FAQPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <FloatingWhatsApp />
      <Footer />
    </Router>
  );
}

export default App;
