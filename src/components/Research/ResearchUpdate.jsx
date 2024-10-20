import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/ResearchStyle/ResearchUpdate.css';

const UpdateProfile = () => {
  const [status, setStatus] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:4000/auth/check-session', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          setIsLoading(false);
        } else {
          navigate('/signin');
        }
      } catch (err) {
        console.error('Authentication check failed:', err);
        navigate('/signin');
      }
    };

    checkAuth();
  }, [navigate]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const maxFileSize = 5 * 1024 * 1024; // 5MB limit

    if (selectedFile && selectedFile.size > maxFileSize) {
      setError('File size must be less than 5MB.');
      setFile(null); // Reset the file state
    } else {
      setError('');
      setFile(selectedFile);
    }
  };

  const validateForm = () => {
    if (!username.trim()) {
      setError('Username is required.');
      return false;
    }
    if (username.length < 3) {
      setError('Username must be at least 3 characters long.');
      return false;
    }
    if (!password) {
      setError('Password is required.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    if (!status) {
      setError('Please select a status.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if validation fails

    const formData = new FormData();
    formData.append('status', status);
    formData.append('username', username);
    formData.append('password', password);
    if (file) formData.append('newFile', file);

    try {
      const response = await fetch('http://localhost:4000/research/update', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess('Profile updated successfully!');
        setError('');
        navigate('/profile');
      } else {
        setError(data.message || 'Update failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h2>Update Profile</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      {success && <p className="alert alert-success">{success}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="" disabled>Select Status</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload File</label>
          <input
            type="file"
            className="form-control"
            id="file"
            onChange={handleFileChange}
          />
          <small className="text-muted">Max size: 5MB</small>
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
