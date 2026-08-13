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
              <h2>VIP Concierge</h2>
              <p>For table reservations, private event bookings, and Black Diamond membership inquiries, please use our secure concierge form.</p>
              
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
                    <option>Table Reservation</option>
                    <option>Private Event</option>
                    <option>Membership Application</option>
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
                <p><strong>The Royal Flush Tower</strong></p>
                <p>123 High Roller Avenue<br/>Las Vegas, NV 89109</p>
                <p><em>*Valet parking is complimentary for all members. Helipad access requires 24hr notice.</em></p>
              </div>

              <div className="location-item">
                <h3>Direct Contact</h3>
                <p><strong>Concierge Desk:</strong> +1 (800) 555-P0KR</p>
                <p><strong>Email:</strong> vip@luxepokerclub.com</p>
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
