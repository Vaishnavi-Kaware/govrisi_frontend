import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../../assets/styles/ResearchStyle/ReasearchSearchWindow.css";
import SearchResult from "./SearchResult";
import Header from '../Header';

const App = () => {
  const [searchResults, setSearchResults] = useState([
    { title: "Toothpaste", description: "This is a toothpaste.", status: "Available" },
    { title: "Herbal Toothpaste", description: "This is a herbal toothpaste.", status: "Out of Stock" }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Logic for handling search can be added here.
  };

  return (
    <div>
      <Header/>
      

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Home</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Links</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main App Section */}
      <Container className="mt-5 pt-5">
        {/* Header Section */}
        <Row className="mb-4">
          <Col className="text-start">
            <Button variant="secondary" className="btn-sm">Signout</Button>
          </Col>
          <Col className="text-end">
            <Button variant="primary" className="btn-sm">Profile</Button>
          </Col>
        </Row>

        {/* Search Bar */}
        <Row className="mb-4">
          <Col>
            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control type="text" placeholder="Search by title" className="me-2" />
              <Button variant="outline-primary" type="submit">Search</Button>
            </Form>
          </Col>
        </Row>

        {/* Research Section */}
        <Row className="mb-3">
          <Col>
            <h5>Research</h5>
          </Col>
          <Col className="text-end">
            <Button variant="outline-secondary" className="btn-sm">Login</Button>
            <Button variant="outline-secondary" className="btn-sm ms-2">Signup</Button>
          </Col>
        </Row>

        {/* Search Results Section */}
        {searchResults.map((result, index) => (
          <SearchResult key={index} title={result.title} description={result.description} status={result.status} />
        ))}

        {/* Contact Information Section */}
        <Row className="border p-3 mt-4">
          <Col>
            <p>Contact Us</p>
            <p>Contact Information</p>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3">
            <p className="text-body-secondary">© 2024</p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
