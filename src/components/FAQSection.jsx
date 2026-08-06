import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are the requirements to become a VIP member?",
      answer: "VIP membership is currently strictly by invitation only or through our exclusive application process. Prospective members must demonstrate a history of high-stakes play and pass a background check to ensure the integrity of our club."
    },
    {
      question: "Are the tournaments open to the public?",
      answer: "While our daily cash games are reserved for members, select weekly and monthly grand tournaments are open to the public via a direct buy-in, subject to availability."
    },
    {
      question: "What is the dress code?",
      answer: "We enforce a strict smart elegant dress code. Gentlemen are required to wear collared shirts and closed shoes. Athletic wear, shorts, and flip-flops are strictly prohibited on the casino floor."
    },
    {
      question: "How fast are the cashouts processed?",
      answer: "We pride ourselves on instant liquidity. Cash, wire transfers, and select cryptocurrency cashouts are processed immediately upon request by our cage staff, 24/7."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h4 className="faq-subtitle">LOREM IPSUM</h4>
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
