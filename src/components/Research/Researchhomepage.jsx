import ImageSlider from '../ImageSlider';
import Header from '../Header';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/Homepage.css';
import '../../assets/styles/ResearchStyle/ResearchHomePage.css';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [latestProjects, setLatestProjects] = useState([]); // Track search input
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestProjects = async () => {
      try {
        const response = await fetch('http://localhost:4000/research/latest');
        const data = await response.json();
        setLatestProjects(data); // Update state with the latest projects
      } catch (error) {
        console.error('Error fetching latest projects:', error);
      }
    };

    fetchLatestProjects();
  }, []);

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
      {latestProjects.length === 0 && <ImageSlider />}

      {/* Section to display the latest research projects */}
      {latestProjects.length > 0 && (
        <section className="latest-projects">
          <h2>Latest Research Projects</h2>
          <div className="project-list">
            {latestProjects.map((project, index) => (
              <Link to={`/research-project-detail/${project._id}`} key={index}>
                <div className="project-card">
                  <h3>{project.title}</h3>
                  <p><strong>Institution:</strong> {project.institution}</p>
                  <p>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
