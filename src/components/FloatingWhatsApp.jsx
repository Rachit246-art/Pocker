import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/1234567890" 
      className="floating-whatsapp"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="whatsapp-icon-container">
        {/* Simple SVG icon for WhatsApp */}
        <svg viewBox="0 0 32 32" className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2a13 13 0 0 0-11 20l-2 7 7-2a13 13 0 1 0 6-25zm0 24a11 11 0 0 1-5-1l-4 1 1-4a11 11 0 1 1 8 4zm6-7c-.3-.2-1.7-.8-2-.9-.3-.1-.4-.2-.6 0-.2.3-.8 1-1 1.2-.2.2-.4.3-.7.1-.3-.2-1.2-.5-2.3-1.4-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6s-1.3-3.2-1.8-4.4c-.4-1.2-.9-1-1.2-1h-1c-.3 0-.9.1-1.3.6s-1.7 1.6-1.7 4c0 2.3 1.7 4.5 1.9 4.8.2.3 3.3 5 8 7 1.1.5 2 .8 2.7 1 .1 0 .2 0 .3 0 .8 0 1.5-.3 2-1s.8-1.5.8-2c0-.2-.1-.4-.4-.5z"/>
        </svg>
      </div>
      <span className="whatsapp-tooltip">VIP Concierge</span>
    </a>
  );
};

export default FloatingWhatsApp;
