import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Use</a>
      </div>
      <p>© 2024 Manga and Anime Society Kharagpur. All Rights Reserved.</p>
      <div className="social-icons">
        <a href="#facebook">📘</a>
        <a href="#twitter">🐦</a>
        <a href="#instagram">📸</a>
      </div>
    </footer>
  );
};

export default Footer;
