import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    { icon: '🃏', title: '24/7 Live', subtitle: 'Card Games' },
    { icon: '🍔', title: 'Unlimited', subtitle: 'Food & Drinks' },
    { icon: '💸', title: 'Instant', subtitle: 'Cashouts' },
    { icon: '🛋️', title: 'Exclusive VIP', subtitle: 'Poker Lounge' },
    { icon: '👨‍💼', title: 'Professional', subtitle: 'Dealers' },
    { icon: '💆', title: 'Massage', subtitle: 'Lounge' },
    { icon: '🔒', title: '100% Secure', subtitle: 'Environment' },
    { icon: '🚗', title: 'Complimentary', subtitle: 'Valet Parking' },
    { icon: '📶', title: 'High-Speed', subtitle: 'Free Wi-Fi' },
    { icon: '🎵', title: 'Weekend', subtitle: 'Live Entertainment' },
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
