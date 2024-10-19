import React, { useState } from "react";
import Header from "../Header";
import "../../assets/styles/ResearchStyle/SignInForm.css";
import { useNavigate} from "react-router-dom";

const SignInForm = ({ setIsAuthenticated }) => {
  const navigate=useNavigate();
  const [publicUser, setPublicUser] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({}); // To track validation errors

  const handlePublicInputChange = (e) => {
    const { name, value } = e.target;
    setPublicUser({ ...publicUser, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when the user starts typing
  };

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

  const handlePublicLogin = async () => {
    if (!validateFields()) return; // Stop if validation fails

    try {
      const response = await fetch("http://localhost:4000/research/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(publicUser),
        credentials: "include",
      });

      if (response.ok) {
        setIsAuthenticated(true);
        navigate("/research-profile");
        // Redirect or handle successful login logic here
      } else {
        const error = await response.json();
        setErrors({ form: error.message });
      }
    } catch (err) {
      setErrors({ form: "An error occurred. Please try again." });
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

          <input
            className={`input-signin-form ${errors.password ? "error" : ""}`}
            type="password"
            name="password"
            placeholder="Enter Password"
            value={publicUser.password}
            onChange={handlePublicInputChange}
          />
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
