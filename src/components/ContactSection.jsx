import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-info-column">
          <h4 className="contact-subtitle">LOREM IPSUM</h4>
          <h2 className="contact-title">RESERVE YOUR <span className="gold-text">SEAT</span></h2>
          <div className="contact-divider"></div>
          
          <p className="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="contact-icon">📍</span>
              <div className="contact-text">
                <strong>The Grand Casino Royale</strong>
                <span>100 Luxury Avenue, VIP District<br/>Las Vegas, NV 89109</span>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <span className="contact-icon">📞</span>
              <div className="contact-text">
                <strong>Concierge Desk</strong>
                <span>+1 (800) 555-CLUB</span>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-text">
                <strong>Direct Email</strong>
                <span>vip@realgamingclub.luxury</span>
              </div>
            </div>
          </div>
          
          <div className="contact-map-image">
            <img src="/map.png" alt="Location Map" />
          </div>
        </div>
        
        <div className="contact-form-column">
          <div className="contact-form-glass">
            <h3>Request an Invitation</h3>
            <form className="luxury-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Inquiry Type</label>
                <select>
                  <option>VIP Membership</option>
                  <option>Private Suite Booking</option>
                  <option>Tournament Registration</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="How can we assist you?"></textarea>
              </div>
              <button type="button" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
