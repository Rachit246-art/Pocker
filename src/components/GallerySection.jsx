import React from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const photos = [
    { id: 1, src: '/Gallery section/IMG_2993.JPG', alt: 'Action at the Tables', className: 'gallery-tall' },
    { id: 2, src: '/Gallery section/IMG_3012.JPG', alt: 'High Stakes Table', className: 'gallery-large' },
    { id: 3, src: '/Gallery section/IMG_3031.JPG', alt: 'Vibrant Atmosphere', className: 'gallery-wide' },
    { id: 4, src: '/Gallery section/IMG_3034.JPG', alt: 'Incredible Player Pool', className: 'gallery-tall' },
    { id: 5, src: '/Gallery section/IMG_3036.JPG', alt: 'Tournaments', className: '' },
    { id: 6, src: '/Gallery section/IMG_3080.JPG', alt: 'Professional Environment', className: '' },
    { id: 7, src: '/Gallery section/Screenshot 2026-09-04 164706.png', alt: 'Gallery Image 7', className: 'gallery-large' },
    { id: 8, src: '/Gallery section/Screenshot 2026-09-04 165111.png', alt: 'Gallery Image 8', className: 'gallery-wide' },
    { id: 9, src: '/Gallery section/Screenshot 2026-09-04 165632.png', alt: 'Gallery Image 9', className: 'gallery-tall' },
    { id: 10, src: '/Gallery section/Screenshot 2026-09-04 165714.png', alt: 'Gallery Image 10', className: '' }
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
