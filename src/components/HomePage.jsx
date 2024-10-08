import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import ImageSlider from './ImageSlider';
import '../assets/styles/Homepage.css';


export default function HomePage() {
  return (
    
    <div>
      <Header/>
      <div>
        
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/about">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/research">RESEARCH</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/startups">START-UPS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/innovation">INNOVATION</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/ipr">IPR</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
      
       
      </div>
       <ImageSlider/>
       <Footer/>
      
    </div>
  )
}
