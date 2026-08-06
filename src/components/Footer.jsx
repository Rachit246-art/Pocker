import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-icon">♠</span>
            <span className="logo-text">ROYALE</span>
          </div>
          <p className="footer-about">
            The world's premier destination for high-stakes gaming, unparalleled luxury, and exclusive entertainment.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">IN</a>
            <a href="#" className="social-icon">TW</a>
            <a href="#" className="social-icon">FB</a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">THE CLUB</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">VIP Membership</a></li>
            <li><a href="#">Private Suites</a></li>
            <li><a href="#">Fine Dining</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">GAMING</h4>
          <ul className="footer-links">
            <li><a href="#">High Stakes Poker</a></li>
            <li><a href="#">Tournaments</a></li>
            <li><a href="#">Table Games</a></li>
            <li><a href="#">House Rules</a></li>
          </ul>
        </div>
        
        <div className="footer-col newsletter-col">
          <h4 className="footer-heading">EXCLUSIVE UPDATES</h4>
          <p className="newsletter-text">Subscribe to receive invitations to private events and tournaments.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="button">Subscribe</button>
          </form>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Real Gaming Club. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
