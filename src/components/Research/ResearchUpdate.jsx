import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
  const [showPassword, setShowPassword] = useState(false);

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
    const maxFileSize = 1024 * 1024; // 5MB limit

    if (selectedFile && selectedFile.size > maxFileSize) {
      setError('File size must be less than 1MB.');
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
        navigate('/research-profile');
      } else {
        setError(data.message || 'Update failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="profile-app-container">
  <div className="profile-container mt-5">
    <h2 className="profile-header">Update Profile</h2>
    {error && <p className="profile-alert profile-alert-danger">{error}</p>}
    {success && <p className="profile-alert profile-alert-success">{success}</p>}
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="profile-form-group">
        <label htmlFor="status" className="profile-form-label">Status</label>
        <select
          className="profile-form-select"
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

      <div className="profile-form-group">
        <label htmlFor="username" className="profile-form-label">Username</label>
        <input
          type="text"
          className="profile-form-input"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div className="profile-form-group">
      <label htmlFor="password" className="profile-form-label">
        Password
      </label>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"} // Toggle input type
          className="profile-form-input"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
          className="eye-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </div>

      <div className="profile-form-group">
        <label htmlFor="file" className="profile-form-label">Upload File</label>
        <input
          type="file"
          className="profile-form-input"
          id="file"
          onChange={handleFileChange}
        />
        <small className="profile-file-info">Max size: 1MB</small>
      </div>

      <button type="submit" className="profile-update-btn">Update</button>
    </form>
  </div>
</div>

  );
};

export default UpdateProfile;
