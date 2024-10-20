import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const ResearchForm = () => {
  const navigate = useNavigate();
  const [numResearchers, setNumResearchers] = useState(1);
  const [researchers, setResearchers] = useState([{ name: "",remail:"", researchField: "", role: "" }]);
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
    <div className="container mt-4">
      <div className="text-center mb-4">
        <h1>Enhancing Research, IPR, Innovation & Start-ups in Gujarat</h1>
      </div>

      <h2 className="mb-4 text-center">Fill out the details of your research project below:</h2>

      <form onSubmit={handleSubmit}>
        <fieldset className="border p-3 mb-4">
          <legend className="w-auto">Project Details</legend>

          <div className="mb-3">
            <label className="form-label">Project Title:</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter project title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          {errors.title && <p className="text-danger">{errors.title}</p>}

          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              name="description"
              className="form-control"
              placeholder="Enter project description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status:</label>
            <select
              name="status"
              className="form-select"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Institution:</label>
            <input
              type="text"
              name="institution"
              className="form-control"
              placeholder="Enter your institution name"
              value={formData.institution}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Start Date:</label>
            <input
              type="date"
              name="startDate"
              className="form-control"
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">End Date:</label>
            <input
              type="date"
              name="endDate"
              className="form-control"
              value={formData.endDate}
              onChange={handleInputChange}
              required
            />
          </div>

          {errors.dateError && <p className="text-danger">{errors.dateError}</p>}

        </fieldset>

        <fieldset className="border p-3 mb-4">
          <legend className="w-auto">Project Researchers</legend>

          <div className="mb-3">
            <label className="form-label">Number of Researchers:</label>
            <input
              type="number"
              className="form-control"
              value={numResearchers}
              onChange={handleNumResearchersChange}
              min="1"
              max="10"
            />
          </div>

          {researchers.slice(0, numResearchers).map((researcher, index) => (
            <div key={index}>
              <div className="mb-3">
                <label className="form-label">Researcher {index + 1} Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter researcher's name"
                  value={researcher.name}
                  onChange={(e) => handleResearchersChange(index, e)}
                  required
                />
              </div>

              <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="remail"
              className="form-control"
              placeholder="Enter researcher's email"
              value={researcher.remail}
              onChange={(e) => handleResearchersChange(index, e)}
              required
            />
          </div>

              <div className="mb-3">
                <label className="form-label">Research Field:</label>
                <input
                  type="text"
                  name="researchField"
                  className="form-control"
                  placeholder="Enter research field"
                  value={researcher.researchField}
                  onChange={(e) => handleResearchersChange(index, e)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Role:</label>
                <input
                  type="text"
                  name="role"
                  className="form-control"
                  placeholder="Enter researcher's role"
                  value={researcher.role}
                  onChange={(e) => handleResearchersChange(index, e)}
                />
              </div>
            </div>
          ))}
        </fieldset>

        <fieldset className="border p-3 mb-4">
          <legend className="w-auto">Other Information</legend>

          {/* Add username input */}
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>

          {errors.passwordError && <p className="text-danger">{errors.passwordError}</p>}

          <div className="mb-3">
    <label className="form-label">Upload File:</label>
    <input 
      type="file" 
      name="projectFile" 
      className={`form-control ${errors.fileError ? "is-invalid" : ""}`}
      onChange={handleFileChange} 
    />
    {errors.fileError && <div className="invalid-feedback">{errors.fileError}</div>}
  </div>

  {formData.uploadedFile && (
    <button type="button" className="btn btn-secondary" onClick={openFile}>
      View Uploaded File
    </button>
  )}
        </fieldset>

        <div className="text-center">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

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