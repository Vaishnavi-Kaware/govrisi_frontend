import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/ResearchStyle/ReasearchSearchWindow.css';

const ResearchSearchPage = () => {
  const location = useLocation(); // Get current URL location
  const query = new URLSearchParams(location.search).get('query'); // Extract query param

  const [filteredResults, setFilteredResults] = useState([]); // Store results from backend
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  // Fetch search results from backend
  const fetchSearchResults = async () => {
    try {
      const response = await fetch(`http://localhost:4000/research/search?query=${query}`);
      if (!response.ok) throw new Error('Failed to fetch search results');
      const data = await response.json();
      setFilteredResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading once data is fetched
    }
  };

  // Fetch results when the component mounts or query changes
  useEffect(() => {
    if (query) {
      fetchSearchResults();
    } else {
      setFilteredResults([]); // Clear results if no query
      setLoading(false);
    }
  }, [query]);

  return (
    <div className="page-container">
      <Header />
      <div className="content-wrapper">
        <div className="search-header">
          <h1>Search Results</h1>
          <p className="query-info">
            Showing results for: <span className="query-text">{query || "All Items"}</span>
          </p>
        </div>

        <div className="results-section">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="error-message">{error}</p>
          ) : filteredResults.length > 0 ? (
            filteredResults.map((result, index) => (
              <Link to={`/research-project-detail/${result._id}`} key={index}>
              <div className="result-card">
                <h2 className="result-title">{result.title}</h2>

                <div className="result-field">
                  <label className="result-label">Description:</label>
                  <p className="result-description">{result.description}</p>
                </div>

                <div className="result-field">
                  <label className="result-label">Institution:</label>
                  <p className="result-description">{result.institution}</p>
                </div>

                <span
                  className={`result-status ${
                    result.status === "completed" ? "status-available" : "status-unavailable"
                  }`}
                >
                  {result.status}
                </span>
              </div>
              </Link>
            ))
          ) : (
            <div className="no-results">
              <p>No results found for "<strong>{query}</strong>"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchSearchPage;
