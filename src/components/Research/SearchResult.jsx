import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const SearchResult = ({ title, description, status }) => {
  return (
    <Row className="mb-3 border p-3">
      <Col md={8}>
        <h6>Title: {title}</h6>
        <p>Description: {description}</p>
        <p>Status: {status}</p>
      </Col>
      <Col md={4} className="text-end">
        <Button variant="primary">View PDF</Button>
      </Col>
    </Row>
  );
};

export default SearchResult;

