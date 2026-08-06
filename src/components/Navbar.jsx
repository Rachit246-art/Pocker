import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/logo.jpeg" alt="Club Logo" className="brand-logo" />
        </div>
        
        {/* Hamburger Icon */}
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item active" onClick={toggleMenu}>Home</li>
          <li className="navbar-item" onClick={toggleMenu}>About</li>
          <li className="navbar-item" onClick={toggleMenu}>Facilities</li>
          <li className="navbar-item" onClick={toggleMenu}>Tournaments</li>
          <li className="navbar-item" onClick={toggleMenu}>Gallery</li>
          <li className="navbar-item" onClick={toggleMenu}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
