import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src="/logo.jpeg" alt="Club Logo" className="brand-logo" />
          </NavLink>
        </div>
        
        {/* Hamburger Icon */}
        <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/promotions" className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Promotions</NavLink>
          </li>
          <li>
            <NavLink to="/facilities" className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Facilities</NavLink>
          </li>
          <li>
            <NavLink to="/faq" className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `navbar-item ${isActive ? 'active' : ''}`} onClick={closeMenu}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
