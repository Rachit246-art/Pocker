import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The level of service and attention to detail here is simply unmatched. It is my preferred destination for high-stakes play.",
      author: "Marcus T.",
      title: "VIP Member since 2018"
    },
    {
      id: 2,
      quote: "From the private suites to the fine dining, every aspect of this club exudes luxury and professionalism.",
      author: "Elena R.",
      title: "Professional Player"
    },
    {
      id: 3,
      quote: "A truly world-class environment. The tournaments are incredibly well-structured and the dealers are flawless.",
      author: "James W.",
      title: "Tournament Champion"
    }
  ];

  return (
    <section className="testimonials-section">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
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
