import React, { useState } from "react";
import "../assets/styles/SignInForm.css";

const SignInForm = () => {
  const [publicUser, setPublicUser] = useState({ email: "", mobile: "", password: "" });
  const [adminUser, setAdminUser] = useState({ email: "", mobile: "", password: "" });

  const handlePublicInputChange = (e) => {
    const { name, value } = e.target;
    setPublicUser({ ...publicUser, [name]: value });
  };

  const handleAdminInputChange = (e) => {
    const { name, value } = e.target;
    setAdminUser({ ...adminUser, [name]: value });
  };

  const handlePublicLogin = () => {
    console.log("Public Login Details:", publicUser);
  };

  const handleAdminLogin = () => {
    console.log("Admin Login Details:", adminUser);
  };

  return (
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
        <button onClick={handlePublicLogin} className="button-signin">Sign In</button>
      </div>

      {/* Admin Login Form */}
      <div className="login-form admin-login">
        <h2>Admin Login</h2>
        <input className="input-signin-form"
          type="email"
          name="email"
          placeholder="Email ID"
          value={adminUser.email}
          onChange={handleAdminInputChange}
        />
        <input className="input-signin-form"
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={adminUser.mobile}
          onChange={handleAdminInputChange}
        />
        <input className="input-signin-form"
          type="password"
          name="password"
          placeholder="Password"
          value={adminUser.password}
          onChange={handleAdminInputChange}
        />
        <button onClick={handleAdminLogin} className="button-signin">Sign In</button>
      </div>
    </div>
  );
};

export default SignInForm;
