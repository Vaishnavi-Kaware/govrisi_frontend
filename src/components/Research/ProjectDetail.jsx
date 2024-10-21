// ProjectDetail.js
import '../../assets/styles/ResearchStyle/ProjectDetail.css'; // Import the CSS file for styling
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams(); // Get project ID from URL parameters
  const [project, setProject] = useState(null); // State to hold project data
  const [researchers, setResearchers] = useState([]); // State to hold researchers' data
  const [loading, setLoading] = useState(true); // State for loading state
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        console.log('Project ID:', projectId); // Check projectId
        const response = await fetch(`http://localhost:4000/research/projectDetail/${projectId}`);
        if (!response.ok) throw new Error('Failed to fetch project details');
        const data = await response.json();
        setProject(data.project);
        setResearchers(data.researchers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]); // Run effect when projectId changes

  const openFileFromServer = async (fileId) => {
    try {
      const response = await fetch(`http://localhost:4000/open/file/${fileId}`, {
        method: 'GET',
        credentials: 'include', // Send cookies for authentication
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch the file');
      }
  
      const blob = await response.blob(); // Convert to Blob
      const fileUrl = URL.createObjectURL(blob); // Create a downloadable URL
  
      window.open(fileUrl); // Open the file in a new tab
    } catch (error) {
      console.error('Error opening file:', error);
    }
  };

  if (loading) return <p>Loading...</p>; // Show loading state
  if (error) return <p>Error: {error}</p>; // Show error if occurred

  if (!project) {
    return <p>Project not found!</p>; // If no project found
  }

  return (
    <div className="project-detail">
      <h1 className="project-title">{project.title}</h1>
      <p className="project-description">{project.description}</p>
      <p className="project-institution">Institution: {project.institution}</p>
      <p className="project-status">Status: {project.status}</p>
      <p className="project-dates">Start Date: {project.start.split("T")[0]}</p>
      <p className="project-dates">End Date: {project.end.split("T")[0]}</p>
      <p className="project-email">Email: {project.email}</p>

      <h2>Researchers:</h2>
      <div className="researchers">
        {researchers.map((researcher, index) => (
          <div className="researcher-card" key={index}>
            <p><strong>Name:</strong> {researcher.name}</p>
            <p><strong>Role:</strong> {researcher.role}</p>
            <p><strong>Field:</strong> {researcher.field}</p>
            <p><strong>Email:</strong> {researcher.email}</p>
          </div>
        ))}
      </div>

      <button
              type="button"
              className="pdf-button"
              onClick={() => openFileFromServer(project.fileId)} // Pass fileId from user data
            >
              View File
            </button>
    </div>
  );
};

export default ProjectDetail;
