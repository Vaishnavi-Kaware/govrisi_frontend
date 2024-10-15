// IPRStatusPage.jsx
import React from 'react';
import Header from './Header';

export default function IPRStatusPage() {
  // Sample data for demonstration; you can replace it with real data
  const patents = [
    {
      name: 'Smart Home Automation System',
      applicant: 'John Doe',
      filingDate: '2023-01-15',
      status: 'Pending',
      lastUpdated: '2023-09-01',
      nextDue: '2024-01-15'
    },
    {
      name: 'Eco-Friendly Packaging',
      applicant: 'Jane Smith',
      filingDate: '2023-03-10',
      status: 'Approved',
      lastUpdated: '2023-10-01',
      nextDue: '2024-03-10'
    },
    {
      name: 'AI-Powered Chatbot',
      applicant: 'Alice Johnson',
      filingDate: '2023-04-20',
      status: 'Under Review',
      lastUpdated: '2023-10-05',
      nextDue: '2024-04-20'
    },
    {
      name: 'Wearable Health Monitor',
      applicant: 'Bob Brown',
      filingDate: '2022-12-05',
      status: 'Approved',
      lastUpdated: '2023-09-15',
      nextDue: '2024-12-05'
    },
    {
      name: 'Blockchain-Based Voting System',
      applicant: 'Charlie Davis',
      filingDate: '2023-02-28',
      status: 'Rejected',
      lastUpdated: '2023-09-20',
      nextDue: 'N/A'
    },
    {
      name: 'Renewable Energy Storage',
      applicant: 'Diana Evans',
      filingDate: '2023-07-10',
      status: 'Pending',
      lastUpdated: '2023-10-01',
      nextDue: '2024-07-10'
    },
    {
      name: 'Augmented Reality Glasses',
      applicant: 'Ethan Foster',
      filingDate: '2023-08-15',
      status: 'Approved',
      lastUpdated: '2023-10-10',
      nextDue: '2024-08-15'
    },
    {
      name: 'Smart Agriculture Solutions',
      applicant: 'Grace Harris',
      filingDate: '2023-09-05',
      status: 'Pending',
      lastUpdated: '2023-09-30',
      nextDue: '2024-09-05'
    },
    // Add more patent records as needed
  ];

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
                  <th>Patent Name</th> {/* Patent Name Column */}
                  <th>Applicant Name</th>
                  <th>Filing Date</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                  <th>Next Due</th>
                </tr>
              </thead>
              <tbody>
                {patents.map((patent, index) => (
                  <tr key={index}>
                    <td>{patent.name}</td> {/* Display Patent Name */}
                    <td>{patent.applicant}</td>
                    <td>{patent.filingDate}</td>
                    <td>
                      <span className={`badge ${patent.status === 'Approved' ? 'bg-success' : patent.status === 'Pending' ? 'bg-warning' : 'bg-danger'}`}>
                        {patent.status}
                      </span>
                    </td>
                    <td>{patent.lastUpdated}</td>
                    <td>{patent.nextDue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
