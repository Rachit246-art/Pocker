import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Marcus T.",
      title: "VIP Member since 2018"
    },
    {
      id: 2,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Elena R.",
      title: "Professional Player"
    },
    {
      id: 3,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "James W.",
      title: "Tournament Champion"
    }
  ];

  return (
    <section className="testimonials-section">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="testimonials-swiper"
      >
        {testimonials.map((test) => (
          <SwiperSlide key={test.id}>
            <div className="testimonial-slide">
              <div className="quote-mark">"</div>
              <p className="testimonial-quote">{test.quote}</p>
              <div className="testimonial-author-box">
                <div className="author-divider"></div>
                <h4 className="testimonial-author">{test.author}</h4>
                <span className="testimonial-title">{test.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
