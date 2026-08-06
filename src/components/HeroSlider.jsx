import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './HeroSlider.css';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: '/Banner 1.png'
    },
    {
      id: 2,
      image: '/text-banner-2.png'
    }
  ];

  return (
    <div className="hero-slider-container" id="home">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-image-container">
              <img src={slide.image} alt={`Banner ${slide.id}`} className="slide-image" />
              <div className="slide-overlay-minimal"></div>
              
              {/* CSS Overlay for Slide 3 */}
              {slide.title && (
                <div className="css-banner-overlay-wrapper">
                  <div className="css-banner-overlay">
                    <h2 className="css-banner-title">{slide.title}</h2>
                    <h3 className="css-banner-subtitle">{slide.subtitle}</h3>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
