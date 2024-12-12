import React, { useState } from "react";
import "./Header.css"; // Ensure the CSS is imported correctly

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">

      </div>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        &#9776; {/* Hamburger icon */}
      </button>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Art</a>
        <a href="#">Newsletters</a>
        <a href="#">Videos</a>
        <a href="#">Events</a>
        <a href="#">Members</a>
      </nav>
    </header>
  );
};

export default Header;
