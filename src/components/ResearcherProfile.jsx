import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/ResearcherProfile.css';
import govLogo from '../assets/images/gov-logo.png';
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.jpeg';
import img5 from '../assets/images/img5.jpeg';

const ResearcherProfile = () => {
  return (
    <div className="container-fluid researcher-page">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-secondary text-light sidebar p-4">
          <div className="text-center my-4">
            <div className="profile-circle d-flex justify-content-center align-items-center mx-auto mb-3">
              <span className="profile-letter">V</span>
            </div>
            <h5>Vaishnavi</h5>
          </div>
          <ul className="list-group">
            <li className="list-group-item bg-secondary text-light">Email: vaishnavi@example.com</li>
            <li className="list-group-item bg-secondary text-light">Username: vaishnavi123</li>
            <li className="list-group-item bg-secondary text-light">Role: Researcher</li>
            <li className="list-group-item bg-secondary text-light">Research Title: Enhancing Innovation</li>
            <li className="list-group-item bg-secondary text-light">Institute: SPPU</li>
            <li className="list-group-item bg-secondary text-light">Funding: Government Grant</li>
            <li className="list-group-item bg-secondary text-light">Research Duration: 2023-2025</li>
          </ul>
          <button className="btn btn-danger w-100 mt-4">Logout</button>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          {/* Header */}
          <header className="header d-flex align-items-center p-3" style={{ backgroundColor: '#0056b3', color: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <div className="d-flex align-items-center">
              <img src={govLogo} alt="Gujarat Government Logo" className="me-3" style={{ height: '80px', width: 'auto' }} />
              <div className="ms-2">
                <h5 className="m-0">Enhancing Research, IPR, Innovation & Start-ups in Gujarat</h5>
                <p className="m-0 small">Government of Gujarat Initiative</p>
              </div>
            </div>

            <div className="d-flex ms-auto">
              {[img1, img2, img3, img4, img5].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Image ${index + 2}`}
                  className="img-fluid mx-0" // Changed to mx-0 to remove space between images
                  style={{ height: '90px', width: '100px', transition: 'transform 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              ))}
            </div>
          </header>

          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#004080', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div className="container-fluid">
              <a className="navbar-brand text-white" href="#">
                Research Portal
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Research Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      Publications
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a className="dropdown-item" href="#">Settings</a></li>
                      <li><a className="dropdown-item" href="#">Help</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Research Information */}
          <div className="card my-4 p-4 shadow" style={{ backgroundColor: '#f8f9fa' }}>
            <h4 className="card-title">Research Information</h4>
            <div className="card-body">
              <p className="card-text"><strong>Title:</strong> Enhancing Research, IPR, Innovation & Start-ups in Gujarat</p>
              <p className="card-text"><strong>Description:</strong> This project aims to streamline and enhance the innovation landscape in Gujarat by promoting effective research practices and supporting start-ups in the AYUSH sector.</p>
              
              {/* Added fields */}
              <p className="card-text"><strong>Milestones:</strong> Initial Setup, Mid-Project Evaluation, Final Analysis</p>
              <p className="card-text"><strong>Funding and Resources:</strong> Rs. 50 Lakhs, Access to state-funded labs and libraries</p>
              <p className="card-text"><strong>Publications:</strong> 3 Papers Published in International Journals</p>
              <p className="card-text"><strong>Number of Researchers:</strong> 5</p>
              <ul>
                <li><strong>Name:</strong> Dr. A. Patel (Start Date: Jan 2023, End Date: Dec 2023)</li>
                <li><strong>Name:</strong> Dr. B. Mehta (Start Date: Feb 2023, End Date: Jan 2024)</li>
                <li><strong>Name:</strong> Dr. C. Kumar (Start Date: Mar 2023, End Date: Feb 2024)</li>
                <li><strong>Name:</strong> Dr. D. Joshi (Start Date: Apr 2023, End Date: Mar 2024)</li>
                <li><strong>Name:</strong> Dr. E. Shah (Start Date: May 2023, End Date: Apr 2024)</li>
              </ul>

              {/* Updated buttons */}
              <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-primary" title="View PDF">PDF View</button>
                <button className="btn btn-success" title="Update Research Information">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer text-center py-3" style={{ backgroundColor: '#0066cc', color: 'white' }}>
        <p>&copy; 2024 Gujarat Government</p>
        <p>Enhancing Research, IPR, Innovation & Start-ups</p>
        <p>Email: research.gujarat.gov.in | Phone: +91 123 456 7890</p>
      </div>
    </div>
  );
};

export default ResearcherProfile;  
