import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.css';

const HeroSlider = () => {
  return (
    <div className="hero-container">
      <div className="hero-border-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="hero-swiper"
        >
          {/* Slide 1 - Layout 1 */}
          <SwiperSlide>
            <div className="slide-content slide-1">
              <div className="slide-overlay"></div>
              <div className="slide-text layout-1">
                <h3 className="l1-top-text">City's Most Trending</h3>
                <div className="spade-icon">♠</div>
                <h1 className="l1-main-title">GAMING CLUB</h1>
                <div className="l1-divider">
                  <span className="diamond">♦</span>
                  <p>FOR REAL PLAYERS & REAL WINS</p>
                  <span className="diamond">♦</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          {/* Slide 2 - Layout 2 */}
          <SwiperSlide>
            <div className="slide-content slide-2">
              <div className="slide-overlay-darker"></div>
              <div className="slide-text layout-2">
                <div className="l2-welcome-wrapper">
                  <span className="l2-line"></span>
                  <h4 className="l2-welcome">WELCOME TO</h4>
                  <span className="l2-line"></span>
                </div>
                <h1 className="l2-main-title">PREMIUM CASINO</h1>
                <div className="l2-suits">♠ ♦ ♣ ♥</div>
                <h3 className="l2-sub-title">EXPERIENCE THE THRILL OF</h3>
                <h2 className="l2-huge-text">GAMING</h2>
                <div className="l2-badge">
                  <div className="badge-inner">PREMIUM<br/>CLUB</div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Layout 3 (Light Theme) */}
          <SwiperSlide>
            <div className="slide-content slide-3">
              <div className="slide-overlay-light"></div>
              <div className="slide-text layout-3">
                <div className="l3-crown-icon">♔</div>
                <h3 className="l3-top-text">Your</h3>
                <h1 className="l3-main-title">One-Stop</h1>
                <h2 className="l3-sub-title">DESTINATION</h2>
                <div className="l3-suits-divider">
                  <span className="gold-suit">♠</span>
                  <span className="gold-suit">♦</span>
                  <span className="gold-suit">♣</span>
                  <span className="gold-suit">♥</span>
                </div>
                <div className="l3-box-text">
                  <p>For Live <span>Gaming Action</span></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
