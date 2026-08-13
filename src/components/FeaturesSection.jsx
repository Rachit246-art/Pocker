import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    { icon: '🚗', title: 'Valid', subtitle: 'Parking' },
    { icon: '💸', title: 'Instant', subtitle: 'Cash Out' },
    { icon: '🔒', title: '100%', subtitle: 'Secure' },
    { icon: '👨‍💼', title: 'Professional', subtitle: 'Dealer' },
    { icon: '🍔', title: 'Fresh', subtitle: 'Food' },
    { icon: '☕', title: 'Inbuilt', subtitle: 'Cafe' },
    { icon: '🃏', title: 'Exclusive', subtitle: 'Poker' },
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">We've got you covered</h2>
      <div className="features-slider-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            968: { slidesPerView: 4 },
            1200: { slidesPerView: 6 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="features-swiper"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="feature-card">
                <div className="feature-icon-placeholder">
                  <span className="emoji-icon">{feature.icon}</span>
                </div>
                <div className="feature-text">
                  <span className="feature-title-text">{feature.title}</span>
                  <span className="feature-subtitle-text">{feature.subtitle}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturesSection;
