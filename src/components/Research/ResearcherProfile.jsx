import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/ResearchStyle/ResearcherProfile.css';
import govLogo from '../../assets/images/gov-logo.png';
import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpeg';
import img3 from '../../assets/images/img3.jpeg';
import img4 from '../../assets/images/img4.jpeg';
import img5 from '../../assets/images/img5.jpeg';

const ResearcherProfile = () => {
  const [data, setData] = useState(null); // Store user data
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track any errors
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:4000/research/profile', {
          method: 'GET',
          credentials: 'include', // Ensure session cookies are sent
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setData(data); 
        } else {
          navigate('/signin'); // Redirect to login if unauthorized
        }
      } catch (err) {
        setError('Failed to fetch user data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  useEffect(() => {
    if (data) {
      console.log('User data updated:', data.user.title); // Log updated user data
    }
  }, [data]);

  // Handle Logout
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:4000/research/logout', {
        method: 'POST',
        credentials: 'include', // Send cookies with the request
      });

      if (response.ok) {
        navigate('/signin'); // Redirect to sign-in page after logout
      } else {
        console.error('Logout failed');
      }
    } catch (err) {
      console.error('Error during logout', err);
    }
  };

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

  // Loading and error states
  if (loading) return <p>Loading profile...</p>; // Show loading state
  if (error) return <p>{error}</p>; // Show error if fetching failed
  if (!data) return <p>No user data available.</p>; // Handle case where user is null

  return (
    <div className="container-fluid researcher-page">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-secondary text-light sidebar p-4">
          <div className="text-center my-4">
            <h5>{data.user.title}</h5>
          </div>
          <ul className="list-group">
            <li className="list-group-item bg-secondary text-light">Email: {data.user.email}</li>
            <li className="list-group-item bg-secondary text-light">Username: {data.user.username}</li>
            <li className="list-group-item bg-secondary text-light">Institute: {data.user.institute}</li>
            <li className="list-group-item bg-secondary text-light">Status: {data.user.status}</li>
            <li className="list-group-item bg-secondary text-light">Started: {data.user.start.split("T")[0]}</li>
          </ul>
          <button onClick={handleLogout} className="btn btn-danger w-100 mt-4">
        Logout
      </button>
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
                  className="img-fluid mx-0"
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
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                  <Link className="nav-link active" to="/research-update">Update</Link>
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
              <p className="card-text"><strong>Title:</strong> {data.user.title}</p>
              <p className="card-text"><strong>Description:</strong> {data.user.description}</p>
              <p className="card-text"><strong>Start date:</strong> {data.user.start.split("T")[0]}</p>
              <p className="card-text"><strong>Expected end date:</strong> {data.user.end.split("T")[0]}</p>
              <p className="card-text"><strong>Number of Researchers:</strong> {data.user.researchers.length}</p>
              {data.researchers.map((researcher, index) => (
              <div className="cardr">
              <h2 className="card-titler">{researcher.name}</h2>
              <p className="card-infor"><strong>Email:</strong> {researcher.email}</p>
              <p className="card-infor"><strong>Role:</strong> {researcher.role}</p>
              <p className="card-infor"><strong>Field:</strong> {researcher.field}</p>
            </div>
          ))}
            </div>
            <button
              type="button"
              className="view-file-button"
              onClick={() => openFileFromServer(data?.user?.fileId)} // Pass fileId from user data
            >
              View File
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearcherProfile;
