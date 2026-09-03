import React from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const photos = [
    { id: 1, src: '/Real images/IMG_2949.jpg', alt: 'Professional Dealer', className: 'gallery-tall' },
    { id: 4, src: '/Real images/ChatGPT Image Sep 3, 2026, 11_21_58 AM.png', alt: 'High Stakes Table', className: 'gallery-large' },
    { id: 3, src: '/Real images/ChatGPT Image Sep 3, 2026, 11_09_18 AM.png', alt: 'Table Action', className: 'gallery-wide' },
    { id: 2, src: '/Real images/ChatGPT Image Sep 3, 2026, 11_18_06 AM.png', alt: 'Luxury Chips', className: 'gallery-tall' },
    { id: 5, src: '/offer3_cafe.jpg', alt: 'Premium Cocktails', className: '' },
    { id: 6, src: '/Real images/ChatGPT Image Sep 3, 2026, 11_16_20 AM.png', alt: 'Cards Action', className: '' }
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <h4 className="gallery-subtitle">OUR ENVIRONMENT</h4>
        <h2 className="gallery-title">A GLIMPSE <span className="gold-text">INSIDE</span></h2>
        <div className="gallery-divider"></div>
      </div>
      
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className={`gallery-item ${photo.className}`}>
            <img src={photo.src} alt={photo.alt} className="gallery-image" />
            <div className="gallery-overlay">
              <span className="gallery-icon">+</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
