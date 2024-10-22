import React, { useState } from "react";
import Header from "../Header";
import "../../assets/styles/ResearchStyle/SignInForm.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate} from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [publicUser, setPublicUser] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({}); 
  const [showPassword, setShowPassword] = useState(false); 

  // Handle input changes
  const handlePublicInputChange = (e) => {
    const { name, value } = e.target;
    setPublicUser({ ...publicUser, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when the user starts typing
  };

  // Validate fields before submission
  const validateFields = () => {
    let valid = true;
    const newErrors = {};

    if (!publicUser.username.trim()) {
      newErrors.username = "Username is required.";
      valid = false;
    }

    if (!publicUser.password.trim()) {
      newErrors.password = "Password is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle login on button click
  const handlePublicLogin = async () => {
    if (!validateFields()) return; // Stop if validation fails

    try {
      const response = await fetch("http://localhost:4000/research/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(publicUser),
        credentials: "include", // Ensure cookies are sent with request
      });

      if (response.ok) {
        // Redirect to profile page if login is successful
        navigate("/research-profile");
      } else {
        const error = await response.json();
        setErrors({ form: error.message || "Invalid credentials." });
      }
    } catch (err) {
      setErrors({ form: `An error occurred. Please try again. ${err}` });
    }
  };
  return (
    <div>
      <Header />

      <div className="container-sign-in-form">
        {/* Public Login Form */}
        <div className="login-form public-login">
          <h2>Login</h2>

          <input
            className={`input-signin-form ${errors.username ? "error" : ""}`}
            type="text"
            name="username"
            placeholder="Enter Username"
            value={publicUser.username}
            onChange={handlePublicInputChange}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}

          <div className="password-wrapper">
          <input
            className={`input-signin-form ${errors.password ? "error" : ""}`}
            type={showPassword ? "text" : "password"} // Toggle type
            name="password"
            placeholder="Enter Password"
            value={publicUser.password}
            onChange={handlePublicInputChange}
          />
          <span 
            className="eye-icon" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
          {errors.password && <p className="error-text">{errors.password}</p>}

          {errors.form && <p className="error-text">{errors.form}</p>}

          <button onClick={handlePublicLogin} className="button-signin">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
