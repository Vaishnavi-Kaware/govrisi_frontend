import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "../assets/images/gov-logo.png"; 
import "../assets/styles/Footer.css"; // Assuming your CSS file is in assets/style

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr className="footer-line" />
      <div className="footer-content">
        {/* Left Side - Image */}
        <div className="footer-image">
          <img src={Logo} alt="Footer Logo" />
        </div>

        {/* Link Section - Organized in 3 rows and 3 columns */}
        <div className="footer-links-grid">
          <a href="/research" className="footer-link">Research</a>
          <a href="/ipr" className="footer-link">IPR</a>
          <a href="/startup" className="footer-link">Startups</a>
          <a href="/innovation" className="footer-link">Innovation</a>
          <a href="/address" className="footer-link">Address</a>
          <a href="/file-ipr" className="footer-link">File IPR</a>
          <a href="/register-startup" className="footer-link">Register Start-Up</a>
          <a href="/funding" className="footer-link">Funding</a>
          <a href="/collaborations" className="footer-link">Collaborations</a>
        </div>

        {/* Right Side - Social Media Icons */}
        <div className="social-icons">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>{/* Replace with X icon */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:example@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          {/* Google Icon */}
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
