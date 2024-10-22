import React, { useState } from "react";
import '../../assets/styles/ResearchStyle/ResearchForm.css';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const ResearchForm = () => {
  const navigate = useNavigate();
  const [numResearchers, setNumResearchers] = useState(1);
  const [researchers, setResearchers] = useState([{ name: "",remail:"", researchField: "", role: "" }]);
  const [showPassword, setShowPassword] = useState(false); // For password field
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    email: "", // Add email field
    username: "", // Add username field
    description: "",
    status: "ongoing",
    institution: "",
    startDate: "",
    endDate: "",
    password: "",
    confirmPassword: "",
    uploadedFile: null, // To hold the uploaded file
  });
  const [errors, setErrors] = useState({}); // State to hold validation errors
  const [loading, setLoading] = useState(false); // State to track loading status

  // Handle general form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          fileError: "File size should not exceed 1MB.",
        }));
        setFormData((prev) => ({
          ...prev,
          projectFile: null, // Reset the file if invalid
        }));
      } else {
        setErrors((prev) => ({ ...prev, fileError: "" }));
        setFormData((prev) => ({
          ...prev,
          projectFile: file,
        }));
      }
    }
  };
  

  // Function to open the uploaded file
  const openFile = () => {
    const fileUrl = URL.createObjectURL(formData.uploadedFile);
    window.open(fileUrl); // Open the file in a new tab
  };
  

  // Handle researchers change
  const handleResearchersChange = (index, e) => {
    const { name, value } = e.target;
    const updatedResearchers = [...researchers];
    updatedResearchers[index][name] = value;
    setResearchers(updatedResearchers);
  };

  // Adjust number of researcher forms
  const handleNumResearchersChange = (e) => {
    const num = parseInt(e.target.value) || 1;
    setNumResearchers(num);

    const newResearchers = [...researchers];

    while (newResearchers.length < num) {
      newResearchers.push({ name: "",remail:"", researchField: "", role: "" });
    }

    if (newResearchers.length > num) {
      newResearchers.splice(num);
    }

    setResearchers(newResearchers);
  };

  const validateForm = () => {
    const errors = {};
    const usernameRegex = /^[A-Za-z0-9_]{1,15}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
  
    // Required field validations
    if (!formData.title) errors.title = "Title is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.projectFile) errors.fileError = "Please upload a valid project file.";
    if (!formData.username) errors.usernameError = "Username is required.";
    if (!formData.password) errors.passwordError = "Password is required.";
    if (!formData.confirmPassword) errors.passwordError = "Confirm Password is required.";
    if (!formData.startDate) errors.dateError = "Start date is required.";
    if (!formData.endDate) errors.dateError = "End date is required.";
  
    // Additional Date Validation
    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    if (startDate >= endDate) errors.dateError = "Start date must be before the end date.";
  
    // Password Validation
    if (formData.password && !passwordRegex.test(formData.password)) {
      errors.passwordError =
        "Password must contain 1 uppercase letter, 1 symbol, no spaces, 1 number, and be 8-15 chars long.";
    } else if (formData.password !== formData.confirmPassword) {
      errors.passwordError = "Password and Confirm Password must match.";
    }
  
    // Username Validation
    if (formData.username && !usernameRegex.test(formData.username)) {
      errors.usernameError = "Username can be max 15 chars and contain only letters, numbers, or underscores.";
    }
  
    setErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if there are no errors
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!validateForm()) {
      setLoading(false); // Stop loading if validation fails
      return;
    }
  
    try {
      const submissionData = new FormData();
  
      // Append form fields and file to FormData
      submissionData.append("formData", JSON.stringify(formData));
      submissionData.append("researchers", JSON.stringify(researchers.slice(0, numResearchers)));
      submissionData.append("projectFile", formData.projectFile);
  
      const response = await fetch("http://localhost:4000/research/registration", {
        method: "POST",
        body: submissionData,
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Reset form fields on successful submission
        setFormData({
          title: "",
          email: "",
          username: "",
          status: "ongoing",
          institution: "",
          startDate: "",
          endDate: "",
          password: "",
          confirmPassword: "",
          projectFile: null,
        });
  
        setResearchers([{ name: "", remail: "", researchField: "", role: "" }]);
        setNumResearchers(1);
        setErrors({});
  
        // Redirect to login page
        navigate("/signIn");
      } else {
        alert(result.message || "Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  
    setLoading(false);
  };
  

  return (
    <div className="app-wrapper">
  <div className="form-container mt-4">
    <div className="header-container text-center mb-4">
      <h1 className="app-title">
        Enhancing Research, IPR, Innovation & Start-ups in Gujarat
      </h1>
    </div>

    <h2 className="form-heading mb-4 text-center">Fill out the details of your research project below:</h2>

    <form className="research-form" onSubmit={handleSubmit}>
      <fieldset className="form-section border p-3 mb-4">
        <legend className="legend-text">Project Details</legend>

        <div className="input-group mb-3">
          <label className="input-label">Project Title:</label>
          <input
            type="text"
            name="title"
            className="text-input"
            placeholder="Enter project title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        {errors.title && <p className="error-text">{errors.title}</p>}

        <div className="input-group mb-3">
          <label className="input-label">Description:</label>
          <textarea
            name="description"
            className="text-area"
            placeholder="Enter project description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-label">Status:</label>
          <select
            name="status"
            className="select-input"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="input-group mb-3">
          <label className="input-label">Institution:</label>
          <input
            type="text"
            name="institution"
            className="text-input"
            placeholder="Enter your institution name"
            value={formData.institution}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-label">Email:</label>
          <input
            type="email"
            name="email"
            className="text-input"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-label">Start Date:</label>
          <input
            type="date"
            name="startDate"
            className="date-input"
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-label">End Date:</label>
          <input
            type="date"
            name="endDate"
            className="date-input"
            value={formData.endDate}
            onChange={handleInputChange}
            required
          />
        </div>

        {errors.dateError && <p className="error-text">{errors.dateError}</p>}
      </fieldset>

      <fieldset className="form-section border p-3 mb-4">
        <legend className="legend-text">Project Researchers</legend>

        <div className="input-group mb-3">
          <label className="input-label">Number of Researchers:</label>
          <input
            type="number"
            className="number-input"
            value={numResearchers}
            onChange={handleNumResearchersChange}
            min="1"
            max="10"
          />
        </div>

        {researchers.slice(0, numResearchers).map((researcher, index) => (
          <div key={index} className="researcher-container">
            <div className="input-group mb-3">
              <label className="input-label">Researcher {index + 1} Name:</label>
              <input
                type="text"
                name="name"
                className="text-input"
                placeholder="Enter researcher's name"
                value={researcher.name}
                onChange={(e) => handleResearchersChange(index, e)}
                required
              />
            </div>

            <div className="input-group mb-3">
              <label className="input-label">Email:</label>
              <input
                type="email"
                name="remail"
                className="text-input"
                placeholder="Enter researcher's email"
                value={researcher.remail}
                onChange={(e) => handleResearchersChange(index, e)}
                required
              />
            </div>

            <div className="input-group mb-3">
              <label className="input-label">Research Field:</label>
              <input
                type="text"
                name="researchField"
                className="text-input"
                placeholder="Enter research field"
                value={researcher.researchField}
                onChange={(e) => handleResearchersChange(index, e)}
              />
            </div>

            <div className="input-group mb-3">
              <label className="input-label">Role:</label>
              <input
                type="text"
                name="role"
                className="text-input"
                placeholder="Enter researcher's role"
                value={researcher.role}
                onChange={(e) => handleResearchersChange(index, e)}
              />
            </div>
          </div>
        ))}
      </fieldset>

      <fieldset className="form-section border p-3 mb-4">
        <legend className="legend-text">Other Information</legend>

        <div className="input-group mb-3">
          <label className="input-label">Username:</label>
          <input
            type="text"
            name="username"
            className="text-input"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group mb-3">
        <label className="input-label">Password:</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password
            name="password"
            className="text-input"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      <div className="input-group mb-3">
        <label className="input-label">Confirm Password:</label>
        <div className="password-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"} // Toggle for confirm password
            name="confirmPassword"
            className="text-input"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

        {errors.passwordError && <p className="error-text">{errors.passwordError}</p>}

        <div className="input-group mb-3">
          <label className="input-label">Upload File:</label>
          <input
            type="file"
            name="projectFile"
            className={`file-input ${errors.fileError ? "is-invalid" : ""}`}
            onChange={handleFileChange}
          />
          {errors.fileError && <div className="error-feedback">{errors.fileError}</div>}
        </div>

        {formData.uploadedFile && (
          <button type="button" className="view-file-button" onClick={openFile}>
            View Uploaded File
          </button>
        )}
      </fieldset>

      <div className="submit-container text-center">
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default ResearchForm;

{/* <button
          type="button"
          className="btn btn-secondary"
          onClick={() => openFileFromServer()} // Pass the file ID
        >
          View File from Database
        </button> */}

        // const openFileFromServer = async () => {
        //   try {
        //     const response = await fetch(`http://localhost:4000/open/file`);
        //     if (!response.ok) {
        //       throw new Error("Failed to fetch the file");
        //     }
        
        //     const blob = await response.blob(); // Convert the response to a Blob
        //     const fileUrl = URL.createObjectURL(blob); // Create a URL for the file
        
        //     window.open(fileUrl); // Open the file in a new tab
        //   } catch (error) {
        //     console.error("Error opening file:", error);
        //   }
        // };