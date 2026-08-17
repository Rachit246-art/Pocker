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
                <p><strong>Royal Flush</strong></p>
                <p>Conveniently located with ample parking available.</p>
                <p><em>*We provide a separate dining area for players to relax and enjoy meals peacefully.</em></p>
              </div>

              <div className="location-item">
                <h3>Direct Contact</h3>
                <p><strong>Support Team:</strong> +91 (800) 555-FLUSH</p>
                <p><strong>Email:</strong> support@royalflush.com</p>
              </div>

              <div className="location-map">
                [ Interactive Map ]
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactPage;
