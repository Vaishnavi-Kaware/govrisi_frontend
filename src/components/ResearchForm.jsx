import React, { useState } from "react";
import '../assets/styles/ResearchForm.css'; // Import the CSS file

const ResearchForm = () => {
  const [numResearchers, setNumResearchers] = useState(1); // Default is 1 researcher
  const [researchers, setResearchers] = useState([{ name: "", email: "", researchField: "", role: "" }]);
  const [formData, setFormData] = useState({
    title: "",
    username: "", // Added username to the state
    email: "", // Added email to the state
    description: "",
    status: "ongoing",
    institution: "",
    startDate: "",
    endDate: "",
    password: "", // Added password to the state
    confirmPassword: "", // Added confirmPassword to the state
  });

  // Handle general form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle adding new researcher fields
  const handleResearchersChange = (index, e) => {
    const { name, value } = e.target;
    const updatedResearchers = [...researchers];
    updatedResearchers[index][name] = value;
    setResearchers(updatedResearchers);
  };

  // Adjust number of researcher forms
  const handleNumResearchersChange = (e) => {
    const num = parseInt(e.target.value) || 0; // Default to 0 if input is invalid
    setNumResearchers(num);

    const newResearchers = [...researchers];
    
    // Add new researcher fields if the user adds more
    while (newResearchers.length < num) {
      newResearchers.push({ name: "", email: "", researchField: "", role: "" });
    }

    // Remove extra researcher fields if the user reduces the number
    if (newResearchers.length > num) {
      newResearchers.splice(num);
    }

    setResearchers(newResearchers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Researchers Data:", researchers.slice(0, numResearchers));
  };

  return (
    <div>
    <div className="App">
      <h1>Enhancing Research, IPR, Innovation & Start-ups in Gujarat</h1>
    </div>

    <form onSubmit={handleSubmit}>
      <h2>Project Form</h2>
      
      <label>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />

      <label>Username:</label> {/* New Username Field */}
      <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />

      <label>Email:</label> {/* New Email Field */}
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

      <label>Description:</label>
      <input type="file" name="description" required />

      <label>Status:</label>
      <select name="status" value={formData.status} onChange={handleInputChange}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>

      <label>Institution:</label>
      <input type="text" name="institution" value={formData.institution} onChange={handleInputChange} required />

      <label>Start Date:</label>
      <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} required />

      <label>End Date:</label>
      <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} required />

      <label>Password:</label> {/* New Password Field */}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />

      <label>Confirm Password:</label> {/* New Confirm Password Field */}
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        required
      />

      <label>Number of Researchers:</label>
      <input
        type="number"
        name="numResearchers"
        value={numResearchers}
        onChange={handleNumResearchersChange}
        min="1"
        required
      />

      {/* Display researcher forms based on the number of researchers */}
      {[...Array(numResearchers)].map((_, index) => (
        <div className="researcher-section" key={index}>
          <h3>Researcher {index + 1}</h3>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={researchers[index].name}
            onChange={(e) => handleResearchersChange(index, e)}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={researchers[index].email}
            onChange={(e) => handleResearchersChange(index, e)}
            required
          />

          <label>Research Field:</label>
          <input
            type="text"
            name="researchField"
            value={researchers[index].researchField}
            onChange={(e) => handleResearchersChange(index, e)}
            required
          />

          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={researchers[index].role}
            onChange={(e) => handleResearchersChange(index, e)}
            required
          />
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ResearchForm;
