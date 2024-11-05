import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/IPRStyle/IPRSearchFilter.css';

export default function SearchPage() {
  const [formData, setFormData] = useState({
    title: '',
    applicationNumber: '',
    applicantName: '',
    status: '',
    fromDate: '',
    toDate: ''
  });

  const navigate = useNavigate();

  const [patents, setPatents] = useState([]); // State to hold search results
  const [isLoading, setIsLoading] = useState(false); // State to manage loading status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = async () => {
    setIsLoading(true); // Set loading state
    try {
      const response = await fetch('http://localhost:4000/ipr/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        setPatents(data); // Update patents state with the fetched data
      } else {
        console.error('Error sending search request');
        setPatents([]); // Clear patents state on error
      }
    } catch (error) {
      console.error('Error in search request:', error);
      setPatents([]); // Clear patents state on error
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleRowClick = (patent) => {
    navigate(`/ipr-info`, { state: { patent } }); // Pass IPR data to the new page
  };


  return (
    <div className="search-container">
      <h2 className="search-title">Search IPR Records</h2>
      <div className="search-fields">
        <input
          type="text"
          name="title"
          className="search-input"
          placeholder="Search by Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="applicationNumber"
          className="search-input"
          placeholder="Search by Application Number"
          value={formData.applicationNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="applicantName"
          className="search-input"
          placeholder="Search by Applicant Name"
          value={formData.applicantName}
          onChange={handleChange}
        />
        <select name="status" className="search-select" value={formData.status} onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="Granted">Granted</option>
          <option value="Published">Published</option>
        </select>
        <label className="date-label">From Date</label>
        <input
          type="date"
          name="fromDate"
          className="search-date"
          value={formData.fromDate}
          onChange={handleChange}
          max={new Date().toISOString().split('T')[0]}
        />
        <label className="date-label">To Date</label>
        <input
          type="date"
          name="toDate"
          className="search-date"
          value={formData.toDate}
          onChange={handleChange}
          max={new Date().toISOString().split('T')[0]}
        />
      </div>
      <button onClick={handleSearch} className="search-button">Search</button>

      {/* Display results below the search button in a separate div */}
      <div className="results-container">
        {isLoading ? ( // Show loading state
          <p className="loading-message">Loading...</p>
        ) : (
          <div className="card-body">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Applicant No.</th>
                  <th>Title</th>
                  <th>Applicant Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {patents.length > 0 ? (
                  patents.map((patent, index) => (
                    <tr key={index} onClick={() => handleRowClick(patent)} className="table-row">
                      <td>{patent.applicationNumber}</td>
                      <td>{patent.title}</td>
                      <td>{new Date(patent.applicationDate).toLocaleDateString()}</td>
                      <td>
                        <span className="badge bg-success">{patent.status}</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No Data Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
