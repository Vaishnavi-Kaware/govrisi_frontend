import React, { useState } from "react";

const ResearchForm = () => {
  const [numResearchers, setNumResearchers] = useState(1);
  const [researchers, setResearchers] = useState([{ name: "", researchField: "", role: "" }]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    milestones: "",
    funding: "",
    collaborations: "",
    updates: "",
    publications: "",
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
    const file = e.target.files[0]; // Get the uploaded file
    setFormData({ ...formData, uploadedFile: file }); // Set the file in formData
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
    const num = parseInt(e.target.value) || 0;
    setNumResearchers(num);

    const newResearchers = [...researchers];

    while (newResearchers.length < num) {
      newResearchers.push({ name: "", researchField: "", role: "" });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    if (validateForm()) {
      console.log("Form Data:", formData);
      console.log("Researchers Data:", researchers.slice(0, numResearchers));
      // Reset form and loading state
      setFormData({
        title: "",
        description: "",
        milestones: "",
        funding: "",
        collaborations: "",
        updates: "",
        publications: "",
        status: "ongoing",
        institution: "",
        startDate: "",
        endDate: "",
        password: "",
        confirmPassword: "",
        uploadedFile: null,
      });
      setResearchers([{ name: "", researchField: "", role: "" }]);
      setNumResearchers(1);
      setErrors({});
    }

    setLoading(false); // Reset loading state after submission
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
            <label className="form-label">Milestones:</label>
            <textarea
              name="milestones"
              className="form-control"
              placeholder="Enter project milestones"
              value={formData.milestones}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Funding and Resources:</label>
            <textarea
              name="funding"
              className="form-control"
              placeholder="Enter funding and resources details"
              value={formData.funding}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Collaborations:</label>
            <textarea
              name="collaborations"
              className="form-control"
              placeholder="Enter collaborations details"
              value={formData.collaborations}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Updates:</label>
            <textarea
              name="updates"
              className="form-control"
              placeholder="Enter project updates"
              value={formData.updates}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Publications:</label>
            <textarea
              name="publications"
              className="form-control"
              placeholder="Enter project publications"
              value={formData.publications}
              onChange={handleInputChange}
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
                  placeholder="Enter role"
                  value={researcher.role}
                  onChange={(e) => handleResearchersChange(index, e)}
                />
              </div>
            </div>
          ))}
        </fieldset>

        <fieldset className="border p-3 mb-4">
          <legend className="w-auto">Project Duration</legend>

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
            />
            {errors.dateError && <p className="text-danger">{errors.dateError}</p>}
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
            {errors.passwordError && <p className="text-danger">{errors.passwordError}</p>}
          </div>
        </fieldset>

        <div className="mb-3">
          <label className="form-label">Upload Project File:</label>
          <input
            type="file"
            name="uploadedFile"
            className="form-control"
            onChange={handleFileChange}
          />
          {formData.uploadedFile && (
            <button type="button" className="btn btn-info mt-2" onClick={openFile}>
              View Uploaded File
            </button>
          )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ResearchForm;








// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ResearchForm = ({ addOngoingProject }) => {
//     const [projectName, setProjectName] = useState("");
//     const [status, setStatus] = useState("ongoing");
//     const [institution, setInstitution] = useState("");
//     const [startDate, setStartDate] = useState("");
//     const [endDate, setEndDate] = useState("");
//     const [fileView, setFileView] = useState(null);
//     const [researcherNames, setResearcherNames] = useState(["", "", ""]);

//     const handleResearcherNameChange = (index, value) => {
//         const updatedNames = [...researcherNames];
//         updatedNames[index] = value;
//         setResearcherNames(updatedNames);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = {
//             projectName,
//             status,
//             institution,
//             startDate,
//             endDate,
//             fileView,
//             researcherNames,
//         };

//         // Only add to ongoing projects if the status is ongoing
//         if (status === "ongoing") {
//             addOngoingProject({
//                 title: projectName,
//                 description: institution,
//                 startDate: startDate,
//             });
//         }

//         console.log("Form Data:", formData);
//         // Reset form fields if needed
//         setProjectName("");
//         setInstitution("");
//         setStartDate("");
//         setEndDate("");
//         setFileView(null);
//         setResearcherNames(["", "", ""]);
//     };

//     const getFileURL = () => {
//         return URL.createObjectURL(fileView);
//     };

//     return (
//         <div className="container mt-5">
//             <h2 className="text-center mb-4">Research Project Submission Form</h2>
//             <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
//                 <div className="mb-3">
//                     <label className="form-label">Project Name:</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={projectName}
//                         onChange={(e) => setProjectName(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Status:</label>
//                     <select
//                         className="form-select"
//                         value={status}
//                         onChange={(e) => setStatus(e.target.value)}
//                     >
//                         <option value="ongoing">Ongoing</option>
//                         <option value="completed">Completed</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Institution:</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={institution}
//                         onChange={(e) => setInstitution(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Start Date:</label>
//                     <input
//                         type="date"
//                         className="form-control"
//                         value={startDate}
//                         onChange={(e) => setStartDate(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">End Date:</label>
//                     <input
//                         type="date"
//                         className="form-control"
//                         value={endDate}
//                         onChange={(e) => setEndDate(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">File Upload:</label>
//                     <input
//                         type="file"
//                         className="form-control"
//                         onChange={(e) => setFileView(e.target.files[0])}
//                         required
//                     />
//                 </div>

//                 {fileView && (
//                     <div className="mb-3">
//                         <h5>Uploaded File:</h5>
//                         <a href={getFileURL()} target="_blank" rel="noopener noreferrer">
//                             {fileView.name}
//                         </a>
//                     </div>
//                 )}

//                 {researcherNames.map((name, index) => (
//                     <div className="mb-3" key={index}>
//                         <label className="form-label">Researcher Name {index + 1}:</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={name}
//                             onChange={(e) => handleResearcherNameChange(index, e.target.value)}
//                             required
//                         />
//                     </div>
//                 ))}

//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ResearchForm;















// //milestones 


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ResearchForm = ({ addOngoingProject }) => {
//     const [projectName, setProjectName] = useState("");
//     const [milestones, setMilestones] = useState(""); // New state for milestones
//     const [status, setStatus] = useState("ongoing");
//     const [institution, setInstitution] = useState("");
//     const [startDate, setStartDate] = useState("");
//     const [endDate, setEndDate] = useState("");
//     const [fileView, setFileView] = useState(null);
//     const [researcherNames, setResearcherNames] = useState(["", "", ""]);

//     const handleResearcherNameChange = (index, value) => {
//         const updatedNames = [...researcherNames];
//         updatedNames[index] = value;
//         setResearcherNames(updatedNames);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = {
//             projectName,
//             milestones, // Include milestones in the form data
//             status,
//             institution,
//             startDate,
//             endDate,
//             fileView,
//             researcherNames,
//         };

//         // Only add to ongoing projects if the status is ongoing
//         if (status === "ongoing") {
//             addOngoingProject({
//                 title: projectName,
//                 milestones: milestones, // Add milestones to ongoing project data
//                 description: institution,
//                 startDate: startDate,
//             });
//         }

//         console.log("Form Data:", formData);
//         // Reset form fields if needed
//         setProjectName("");
//         setMilestones(""); // Reset milestones
//         setInstitution("");
//         setStartDate("");
//         setEndDate("");
//         setFileView(null);
//         setResearcherNames(["", "", ""]);
//     };

//     const getFileURL = () => {
//         return URL.createObjectURL(fileView);
//     };

//     return (
//         <div className="container mt-5">
//             <h2 className="text-center mb-4">Research Project Submission Form</h2>
//             <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
//                 <div className="mb-3">
//                     <label className="form-label">Project Name:</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={projectName}
//                         onChange={(e) => setProjectName(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Milestones:</label>
//                     <textarea
//                         className="form-control"
//                         value={milestones}
//                         onChange={(e) => setMilestones(e.target.value)}
//                         required
//                     />
//                     <small className="form-text text-muted">List your milestones.</small>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Status:</label>
//                     <select
//                         className="form-select"
//                         value={status}
//                         onChange={(e) => setStatus(e.target.value)}
//                     >
//                         <option value="ongoing">Ongoing</option>
//                         <option value="completed">Completed</option>
//                     </select>
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Institution:</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={institution}
//                         onChange={(e) => setInstitution(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">Start Date:</label>
//                     <input
//                         type="date"
//                         className="form-control"
//                         value={startDate}
//                         onChange={(e) => setStartDate(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">End Date:</label>
//                     <input
//                         type="date"
//                         className="form-control"
//                         value={endDate}
//                         onChange={(e) => setEndDate(e.target.value)}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="form-label">File Upload:</label>
//                     <input
//                         type="file"
//                         className="form-control"
//                         onChange={(e) => setFileView(e.target.files[0])}
//                         required
//                     />
//                 </div>

//                 {fileView && (
//                     <div className="mb-3">
//                         <h5>Uploaded File:</h5>
//                         <a href={getFileURL()} target="_blank" rel="noopener noreferrer">
//                             {fileView.name}
//                         </a>
//                     </div>
//                 )}

//                 {researcherNames.map((name, index) => (
//                     <div className="mb-3" key={index}>
//                         <label className="form-label">Researcher Name {index + 1}:</label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             value={name}
//                             onChange={(e) => handleResearcherNameChange(index, e.target.value)}
//                             required
//                         />
//                     </div>
//                 ))}

//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ResearchForm;
