import ImageSlider from '../ImageSlider';
import Header from '../Header';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/Homepage.css';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState(''); // Track search input
  const navigate = useNavigate();

  const handleInputChange = (e) => setSearchTerm(e.target.value); // Update state

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/ReasearchSearchPage?query=${searchTerm}`); // Redirect to search page with query
    }
  };

  return (
    <div>
      <Header />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="nav-link active" to="/">HOME</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/signIn">SIGN-IN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/signUp">SIGN-UP</Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <ImageSlider />
    </div>
  );
}
