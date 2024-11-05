import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../assets/styles/IPRStyle/IPRInfoPage.css';// Import CSS for styling

export default function IPRInfoPage() {
  const { state } = useLocation(); // Retrieve the passed data
  const patent = state?.patent || {}; // Destructure IPR data

  const openFileFromServer = async (fileId) => {
    try {
      const response = await fetch(`http://localhost:4000/ipr/open/file/${fileId}`, {
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

  return (
    <div className="ipr-info-container">
      <h1 className="ipr-title">{patent.title}</h1>
      <div className="ipr-details">
        <p><strong>Applicant Name:</strong> {patent.applicantName}</p>
        <p><strong>Application Number:</strong> {patent.applicationNumber}</p>
        <p><strong>Status:</strong> {patent.status}</p>
        <p><strong>Application Date:</strong> {new Date(patent.applicationDate).toLocaleDateString()}</p>
        <p><strong>Publication Date:</strong> {new Date(patent.publicationDate).toLocaleDateString()}</p>
        <p><strong>Description:</strong> {patent.description}</p>
        <p><strong>Email:</strong> {patent.email}</p>

        <h3 className="inventors-heading">Inventors</h3>
        <ul className="inventors-list">
          {patent.inventors.map((inventor, index) => (
            <li key={index}>
              <p><strong>Name:</strong> {inventor.name}</p>
              <p><strong>Email:</strong> {inventor.email}</p>
            </li>
          ))}
        </ul>

        <div className="pdf-buttons">
          <button className="btn btn-primary" onClick={() => openFileFromServer(patent.certificateFileId)}>
            View IPR Certificate
          </button>
          <button className="btn btn-secondary" onClick={() => openFileFromServer(patent.inventionFileId)}>
            View Invention Information PDF
          </button>
        </div>
      </div>
    </div>
  );
}
