import React from "react";
import "../assets/styles/Footer.css"; // Assuming your CSS file is in assets/style

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h4>Contact Information</h4>
          <p>Phone: +1 234 567 890</p>
          <p>Email: contact@government.org</p>
        </div>

        <div className="footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms and Conditions</a></li>
          </ul>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; 2024 Government of [Country]. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
