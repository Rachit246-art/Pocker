import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What games are currently available?",
      answer: "We offer a diverse range of games, including ₹5K and ₹10K ROE, as well as higher stakes action with ₹20K, ₹25K and ₹50K PLO5 tables."
    },
    {
      question: "Are there any future tournaments planned?",
      answer: "Yes! Our next key focus is to build a strong and consistent Texas Hold’em quorum. We are planning exciting events and tournaments supported by attractive bonuses."
    },
    {
      question: "What amenities do you offer?",
      answer: "We ensure a comfortable and memorable experience with a separate dining area to relax and enjoy meals peacefully, along with ample parking for your convenience."
    },
    {
      question: "How fast are the cashouts processed?",
      answer: "We respect your winnings and provide instant cashouts managed by our professional yet friendly team."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h4 className="faq-subtitle">GET ANSWERS</h4>
        <h2 className="faq-title">FREQUENTLY ASKED <span className="gold-text">QUESTIONS</span></h2>
        <div className="faq-divider"></div>
      </div>
      
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
