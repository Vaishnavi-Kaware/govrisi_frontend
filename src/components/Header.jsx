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
        <h1></h1>
      </div>

      {/* Center Section for Future Additions */}
      <div className="header-center-first">
        <h1>Gujarat government</h1>
        <p><h1>Research/IPR/Start-ups Portal</h1></p> 
        {/* You can add more elements here */}
      </div>
      

      
    </header>
  );
};

export default Header;
