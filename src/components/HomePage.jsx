import ImageSlider from './ImageSlider';
import TextSlider from './textslider';
import NotificationBoard from './notificationBoard';
import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../assets/styles/Homepage.css';

export default function HomePage() {
  return (
    <div>
      <Header />
   
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="#">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contactUs">CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/research">RESEARCH</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/startup">STARTUP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#">INNOVATION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/ipr">IPR</Link> {/* Update to use Link for IPR */}
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <ImageSlider />
      <NotificationBoard />
      <TextSlider />
    </div>
  );
}
