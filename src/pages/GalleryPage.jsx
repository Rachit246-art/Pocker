import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import './GalleryPage.css';

const galleryData = [
  {
    src: "/gallery1.png",
    title: "ROE Action",
    desc: "Intense ₹5K & ₹10K ROE games"
  },
  {
    src: "/offer1.png",
    title: "High-Stakes PLO5",
    desc: "Established ₹50K PLO5 tables"
  },
  {
    src: "/about.png",
    title: "Dining & Convenience",
    desc: "Separate dining area for a peaceful break"
  },
  {
    src: "/gallery3.png",
    title: "Incredible Player Pool",
    desc: "Strong engagement and relationships"
  },
  {
    src: "/gallery2.png",
    title: "Tournaments",
    desc: "Upcoming Texas Hold'em events"
  },
  {
    src: "/offer2.png",
    title: "Professional Team",
    desc: "Friendly staff ensuring instant cashouts"
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
