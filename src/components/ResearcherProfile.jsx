import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ResearcherProfile = () => {
  const [projectName, setProjectName] = useState("");
  const [status, setStatus] = useState("ongoing");
  const [institution, setInstitution] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fileView, setFileView] = useState(null);
  const [researcherNames, setResearcherNames] = useState(["", "", ""]);

  const handleResearcherNameChange = (index, value) => {
    const updatedNames = [...researcherNames];
    updatedNames[index] = value;
    setResearcherNames(updatedNames);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      projectName,
      status,
      institution,
      startDate,
      endDate,
      fileView,
      researcherNames,
    };
    console.log("Form Data:", formData);
  };

  const getFileURL = () => {
    return URL.createObjectURL(fileView);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Researcher Profile</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <div className="mb-3">
          <label className="form-label">Project Name:</label>
          <input
            type="text"
            className="form-control"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Status:</label>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Institution:</label>
          <input
            type="text"
            className="form-control"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Start Date:</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">End Date:</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">File Upload:</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFileView(e.target.files[0])}
            required
          />
        </div>

        {fileView && (
          <div className="mb-3">
            <h5 className="mt-2">Uploaded File:</h5>
            <a href={getFileURL()} target="_blank" rel="noopener noreferrer">
              {fileView.name}
            </a>
          </div>
        )}

        {researcherNames.map((name, index) => (
          <div key={index} className="mb-3">
            <label className="form-label">Researcher Name {index + 1}:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => handleResearcherNameChange(index, e.target.value)}
              required
            />
          </div>
        ))}

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ResearcherProfile;
