import React from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const photos = [
    { id: 1, src: '/gallery1.png', alt: 'Professional Dealer', className: 'gallery-tall' },
    { id: 4, src: '/offer1.png', alt: 'High Stakes Table', className: 'gallery-large' },
    { id: 3, src: '/about.png', alt: 'Club Entrance', className: '' },
    { id: 5, src: '/gallery3.png', alt: 'Premium Cocktails', className: '' },
    { id: 2, src: '/gallery2.png', alt: 'Luxury Chips', className: 'gallery-wide' },
    { id: 6, src: '/offer2.png', alt: 'VIP Lounge', className: 'gallery-wide' }
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
