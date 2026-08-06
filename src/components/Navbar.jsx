import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>CLUB LOGO</h2>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item active">Home</li>
          <li className="navbar-item">How to Play <span className="dropdown-arrow">▼</span></li>
          <li className="navbar-item">FAQs</li>
          <li className="navbar-item">Contact Us</li>
          <li className="navbar-item">Safety Center</li>
        </ul>
        <div className="navbar-actions">
          <div className="store-button play-store">Play Store</div>
          <div className="store-button app-store">App Store</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
