import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/IPRStyle/IPRApplyNumSearch.css';

export default function SearchByApplication() {
  const [applicationNumber, setApplicationNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setApplicationNumber(e.target.value);
    setError(''); // Clear error on input change
  };

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:4000/ipr/appynum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ applicationNumber })
      });

      if (response.ok) {
        const patent = await response.json(); // Get the patent data from response
        navigate('/ipr-info', { state: { patent } }); // Pass patent data to info page
      } else {
        setError('Application number is invalid'); // Set error message if response is not ok
      }
    } catch (error) {
      console.error('Error in status request:', error);
      setError('An error occurred. Please try again.'); // Display general error message
    }
  };

  return (
    <div className="search-app-container">
      <h2 className="search-app-title">Check Application Status</h2>
      <input
        type="text"
        name="applicationNumber"
        className="search-app-input"
        placeholder="Enter Application Number"
        value={applicationNumber}
        onChange={handleChange}
      />
      <button onClick={handleSearch} className="search-app-button">Show Status</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
