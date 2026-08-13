import React from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/about">VIP Membership</Link></li>
            <li><Link to="/facilities">Private Suites</Link></li>
            <li><Link to="/facilities">Fine Dining</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">GAMING</h4>
          <ul className="footer-links">
            <li><Link to="/facilities">High Stakes Poker</Link></li>
            <li><Link to="/faq">Tournaments</Link></li>
            <li><Link to="/gallery">Table Games</Link></li>
            <li><Link to="/faq">House Rules</Link></li>
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
        <div className="footer-legal">
          <Link to="/faq">Privacy Policy</Link>
          <span className="separator">|</span>
          <Link to="/faq">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
