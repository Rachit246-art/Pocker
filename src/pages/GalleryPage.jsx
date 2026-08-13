import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import './GalleryPage.css';

const galleryData = [
  {
    src: "/about.png",
    title: "The Final Table",
    desc: "Intense action during the Diamond Classic"
  },
  {
    src: "/about.png",
    title: "Premium Chips",
    desc: "Our bespoke ceramic chips"
  },
  {
    src: "/about.png",
    title: "The Lounge",
    desc: "Exclusive drinks and cigars"
  },
  {
    src: "/about.png",
    title: "Main Floor Action",
    desc: "20 tables running 24/7"
  },
  {
    src: "/about.png",
    title: "Victory",
    desc: "A new champion is crowned"
  },
  {
    src: "/about.png",
    title: "Professional Dealers",
    desc: "Internationally trained staff"
  }
];

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <PageHeader title="Gallery" subtitle="Moments of Glory" />
      <div className="page-content animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="gallery-page-details">
          
          <div className="masonry-grid">
            {galleryData.map((item, index) => (
              <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
                <img src={item.src} alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          
          <button className="lightbox-nav prev" onClick={showPrev}>&#10094;</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryData[selectedIndex].src} 
              alt={galleryData[selectedIndex].title} 
              className="lightbox-image animate-fade-in" 
              key={selectedIndex} /* Forces animation to replay on change */
            />
            <div className="lightbox-caption">
              <h3>{galleryData[selectedIndex].title}</h3>
              <p>{galleryData[selectedIndex].desc}</p>
            </div>
          </div>

          <button className="lightbox-nav next" onClick={showNext}>&#10095;</button>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
