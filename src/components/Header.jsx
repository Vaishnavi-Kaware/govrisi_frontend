import React from "react";
import "../assets/styles/Header.css";
import logo from "../assets/images/profile-img.png";  // Add the correct path to your logo image
import profile from "../assets/images/gov-logo.png"; // Add the correct path to your profile image

const Header = () => {
  return (
    <header className="header">
      {/* Left Section for Profile */}
      <div className="header-left">
        <img src={profile} alt="Profile" className="profile-icon" />
      </div>

      {/* Center Section for Future Additions */}
      <div className="header-center">
        <h1>Header Area</h1>
        {/* You can add more elements here */}
      </div>

      {/* Right Section for Logo */}
      <div className="header-right">
        <img src={logo} alt="Government Logo" className="logo-icon" />
      </div>
    </header>
  );
};

export default Header;
