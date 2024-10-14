import React, { useState } from "react";
import Header from '../Header';
import "../../assets/styles/ResearchStyle/SignInForm.css";
import { Link } from 'react-router-dom';
const SignInForm = () => {
  const [publicUser, setPublicUser] = useState({ email: "", mobile: "", password: "" });

  const handlePublicInputChange = (e) => {
    const { name, value } = e.target;
    setPublicUser({ ...publicUser, [name]: value });
  };

  const handlePublicLogin = () => {
    console.log("Public Login Details:", publicUser);
  };

  return (
    <div>
      <Header/>
    
    <div className="container-sign-in-form">
      {/* Public Login Form */}
      <div className="login-form public-login">
        <h2>Public Login</h2>
        <input className="input-signin-form"
          type="email"
          name="email"
          placeholder="Email ID"
          value={publicUser.email}
          onChange={handlePublicInputChange}
        />
        <input className="input-signin-form"
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={publicUser.mobile}
          onChange={handlePublicInputChange}
        />
        <input className="input-signin-form"
          type="password"
          name="password"
          placeholder="Password"
          value={publicUser.password}
          onChange={handlePublicInputChange}
        />
        <Link to="/research-profile">
          <button onClick={handlePublicLogin} className="button-signin">Sign In</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default SignInForm;
