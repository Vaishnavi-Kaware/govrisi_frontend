// PatentTrack.jsx
import React from 'react';
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported

export default function PatentTrack() {
  // Extended dummy data for demonstration
  const patentTrackingData = [
    {
      name: 'Smart Home Automation System',
      statusUpdates: [
        { date: '2023-01-20', update: 'Filed patent application.' },
        { date: '2023-06-15', update: 'Responded to office action.' },
        { date: '2023-09-01', update: 'Awaiting examiner review.' },
      ],
      nextDue: '2024-01-15',
    },
    {
      name: 'Eco-Friendly Packaging',
      statusUpdates: [
        { date: '2023-03-12', update: 'Filed patent application.' },
        { date: '2023-10-01', update: 'Approved.' },
      ],
      nextDue: '2024-03-10',
    },
    {
      name: 'AI-Powered Chatbot',
      statusUpdates: [
        { date: '2023-04-20', update: 'Filed patent application.' },
        { date: '2023-07-15', update: 'Responded to office action.' },
        { date: '2023-09-30', update: 'Awaiting examiner review.' },
      ],
      nextDue: '2024-04-20',
    },
    {
      name: 'Wearable Health Monitor',
      statusUpdates: [
        { date: '2022-12-05', update: 'Filed patent application.' },
        { date: '2023-05-20', update: 'Responded to office action.' },
        { date: '2023-09-15', update: 'Approved.' },
      ],
      nextDue: '2024-12-05',
    },
    {
      name: 'Autonomous Delivery Drone',
      statusUpdates: [
        { date: '2023-02-10', update: 'Filed patent application.' },
        { date: '2023-08-15', update: 'Responded to office action.' },
        { date: '2023-11-01', update: 'Awaiting final review.' },
      ],
      nextDue: '2024-02-28',
    },
    {
      name: 'Solar-Powered Water Purification System',
      statusUpdates: [
        { date: '2022-09-20', update: 'Filed patent application.' },
        { date: '2023-04-05', update: 'Responded to office action.' },
        { date: '2023-08-10', update: 'Awaiting examiner review.' },
      ],
      nextDue: '2024-06-30',
    },
  ];

  return (
    <div>
      <Header />
      <div className="container-fluid my-4">
        <h2 className="text-center mb-4 font-weight-bold text-primary">Patent Tracking</h2>
        <div className="row">
          {patentTrackingData.map((patent, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card shadow h-100 border border-info">
                <div className="card-header text-center bg-primary text-white">
                  <h5 className="mb-0 font-weight-bold text-uppercase">{patent.name}</h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <span className="badge bg-info text-white">Next Due: {patent.nextDue}</span>
                  </div>
                  <ul className="list-group list-group-flush">
                    {patent.statusUpdates.map((update, updateIndex) => (
                      <li key={updateIndex} className="list-group-item">
                        <strong>{update.date}:</strong> {update.update}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .card {
          transition: transform 0.2s, background-color 0.2s, color 0.2s;
        }
        .card:hover {
          transform: scale(1.02);
          background-color: #e7f1ff; /* Change this to your desired hover background color */
          color: #000; /* Change this to your desired hover text color */
        }
        .card-header:hover {
          background-color: #0056b3; /* Change this to your desired hover header color */
        }
      `}</style>
    </div>
  );
}
