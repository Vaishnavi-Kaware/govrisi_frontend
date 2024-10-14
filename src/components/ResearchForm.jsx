import React, { useState } from "react";
import axios from "axios";


const ResearchForm = () => {
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
    const file = e.target.files[0];// Get the uploaded file
    if (file) {
      setFormData((prev) => ({
        ...prev,
        projectFile: file,
        uploadedFile: file, // Also set it to uploadedFile
      }));
    }
 // Set the file in formData
  };

  // Function to open the uploaded file
  const openFile = () => {
    const fileUrl = URL.createObjectURL(formData.uploadedFile);
    window.open(fileUrl); // Open the file in a new tab
  };

  const openFileFromServer = async () => {
    try {
      const response = await fetch(`http://localhost:4000/open/file`);
      if (!response.ok) {
        throw new Error("Failed to fetch the file");
      }
  
      const blob = await response.blob(); // Convert the response to a Blob
      const fileUrl = URL.createObjectURL(blob); // Create a URL for the file
  
      window.open(fileUrl); // Open the file in a new tab
    } catch (error) {
      console.error("Error opening file:", error);
    }
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
    const num = parseInt(e.target.value) || 0;
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
    const newErrors = {};

    // Validate start and end date
    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);

    if (startDate >= endDate) {
      newErrors.dateError = "Start date must be before the end date.";
    }

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      newErrors.passwordError = "Password and Confirm Password must match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (validateForm()) {
      try {
        const submissionData = new FormData();
  
        // Append form fields to FormData
        
        submissionData.append("formData", JSON.stringify(formData));
  
        // Append researchers array as JSON
        submissionData.append("researchers", JSON.stringify(researchers.slice(0, numResearchers)));
  
        // Append the uploaded file
        submissionData.append("projectFile", formData.projectFile);
  
        const response = await fetch("http://localhost:4000/research/registration", {
          method: "POST",
          body: submissionData, // No need to set Content-Type header
        });
  
        if (response.ok) {
          // Reset form state
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
          setResearchers([{ name: "",remail:"" ,researchField: "", role: "" }]);
          setNumResearchers(1);
          setErrors({});
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error during submission:", error);
      }
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
            <input type="file" name="projectFile" className="form-control" onChange={handleFileChange} />
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
      <button
          type="button"
          className="btn btn-secondary"
          onClick={() => openFileFromServer()} // Pass the file ID
        >
          View File from Database
        </button>

    </div>
  );
};

export default ResearchForm;
