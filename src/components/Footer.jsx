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

        <div className="vertical-line"></div>

        {/* Right Side - Social Media Icons */}
        <div className="social-icons">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-twitter"></i>{/* Replace with X icon */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:example@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

