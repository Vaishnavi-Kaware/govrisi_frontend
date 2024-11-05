import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

export default function IPRStatusPage() {
  const [patents, setPatents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the backend
    const fetchIPRData = async () => {
      try {
        const response = await fetch('http://localhost:4000/ipr/getIPRs'); // Backend route
        const data = await response.json();
        console.log('Fetched data:', data); // Log the response to inspect it
        setPatents(Array.isArray(data) ? data : []); // Ensure data is an array
      } catch (error) {
        console.error('Error fetching IPR data:', error);
      }
    };

    fetchIPRData(); // Call the function when the component mounts
  }, []);

  const handleRowClick = (patent) => {
    navigate(`/ipr-info`, { state: { patent } }); // Pass IPR data to the new page
  };


  return (
    <div>
      <Header />
      <div className="container-fluid my-4">
        <div className="card shadow">
          <div className="card-header text-center">
            <h2 className="mb-0">IPR Status</h2>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Applicant No.</th>
                  <th>Title</th> {/* Patent Name Column */}
                  <th>Applicant Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {patents.length > 0 ? (
                  patents.map((patent, index) => (
                    <tr
                      key={index}
                      onClick={() => handleRowClick(patent)} // Handle row click
                      className="table-row"
                    >
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
        </div>
      </div>
    </div>
  );
}