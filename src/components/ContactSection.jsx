import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-info-column">
          <h4 className="contact-subtitle">CONTACT US</h4>
          <h2 className="contact-title">RESERVE YOUR <span className="gold-text">SEAT</span></h2>
          <div className="contact-divider"></div>
          
          <p className="contact-description">
            Join our incredible player pool and engage in exciting action. Reach out to reserve your seat at our ROE or PLO5 tables.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="contact-icon">📍</span>
              <div className="contact-text">
                <strong>New Royal Flush Poker Room,</strong>
                <span>Gold Tower, Near Konark Hotel</span>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <span className="contact-icon">📞</span>
              <div className="contact-text">
                <strong>Support Team</strong>
                <span>+91 870 006 6132</span>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <span className="contact-icon">✉️</span>
              <div className="contact-text">
                <strong>Direct Email</strong>
                <span>royalflushpokerroom2@gmail.com</span>
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
                  <option>Table Reservation (ROE / PLO5)</option>
                  <option>Future Events & Tournaments</option>
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
