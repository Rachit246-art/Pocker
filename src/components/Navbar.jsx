import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          <li className="navbar-item" onClick={() => scrollToSection('home')}>Home</li>
          <li className="navbar-item" onClick={() => scrollToSection('about')}>About</li>
          <li className="navbar-item" onClick={() => scrollToSection('facilities')}>Facilities</li>
          <li className="navbar-item" onClick={() => scrollToSection('tournaments')}>Tournaments</li>
          <li className="navbar-item" onClick={() => scrollToSection('gallery')}>Gallery</li>
          <li className="navbar-item" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
