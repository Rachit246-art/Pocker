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
      title: "Incredible Player Pool",
      quote: "Royal Flush stands out for its incredible player pool and exciting action. The atmosphere is always friendly and welcoming.",
      author: "Marcus T.",
    },
    {
      id: 2,
      title: "Instant Cashouts",
      quote: "The professional yet friendly team makes every session comfortable. Plus, the instant cashouts are a huge bonus.",
      author: "Elena R.",
    },
    {
      id: 3,
      title: "Great Stakes",
      quote: "The ₹50K PLO5 games here are fantastic. I also love that there is ample parking and a separate dining area to relax.",
      author: "James W.",
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h4 className="testimonials-subtitle">WHAT PLAYERS SAY</h4>
        <h2 className="testimonials-title">TESTIMONIALS</h2>
        <div className="testimonials-divider"></div>
      </div>
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
