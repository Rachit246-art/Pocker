import React from 'react';
import PageHeader from '../components/PageHeader';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="VIP Booking & Enquiries" />
      <div className="page-content animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="contact-page-details">
          
          <div className="contact-layout">
            <div className="vip-concierge">
              <h2>Player Support</h2>
              <p>For table reservations, event inquiries, or any other questions, our professional and friendly team is here to help.</p>
              
              <form className="concierge-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email address" />
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
                <button type="button" className="submit-btn">Send Request</button>
              </form>
            </div>

            <div className="location-details">
              <div className="location-item">
                <h3>Location & Transport</h3>
                <p><strong>New Royal Flush Poker Room,</strong></p>
                <p>Gold Tower, Near Konark Hotel</p>
                <p><em>*We provide a separate dining area for players to relax and enjoy meals peacefully.</em></p>
              </div>

              <div className="location-item">
                <h3>Direct Contact</h3>
                <p><strong>Support Team:</strong> +91 870 006 6132</p>
                <p><strong>Email:</strong> royalflushpokerroom2@gmail.com</p>
              </div>

              <div className="location-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.89725838575!2d73.81804241531742!3d15.48995328921102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0a2e0a297e5%3A0xc3f6050b4dcff4be!2sGoa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  title="Royal Flush Location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
