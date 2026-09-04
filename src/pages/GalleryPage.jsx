import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import './GalleryPage.css';

const galleryData = [
  {
    src: "/Gallery section/IMG_2993.JPG",
    title: "Action at the Tables",
    desc: "Intense gameplay and focus"
  },
  {
    src: "/Gallery section/IMG_3012.JPG",
    title: "High-Stakes Thrills",
    desc: "Premium poker experience"
  },
  {
    src: "/Gallery section/IMG_3031.JPG",
    title: "Vibrant Atmosphere",
    desc: "Exciting games round the clock"
  },
  {
    src: "/Gallery section/IMG_3034.JPG",
    title: "Incredible Player Pool",
    desc: "Strong engagement and relationships"
  },
  {
    src: "/Gallery section/IMG_3036.JPG",
    title: "Tournaments",
    desc: "Upcoming Texas Hold'em events"
  },
  {
    src: "/Gallery section/IMG_3080.JPG",
    title: "Professional Environment",
    desc: "Friendly staff and fair play"
  },
  {
    src: "/Gallery section/Screenshot 2026-09-04 164706.png",
    title: "Gallery Moment",
    desc: "Exclusive poker action"
  },
  {
    src: "/Gallery section/Screenshot 2026-09-04 165111.png",
    title: "Premium Tables",
    desc: "Luxury gaming experience"
  },
  {
    src: "/Gallery section/Screenshot 2026-09-04 165632.png",
    title: "The Poker Room",
    desc: "Where the action happens"
  },
  {
    src: "/Gallery section/Screenshot 2026-09-04 165714.png",
    title: "Player Engagement",
    desc: "Building a strong community"
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
