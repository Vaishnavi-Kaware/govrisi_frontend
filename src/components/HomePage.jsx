import ImageSlider from './ImageSlider';
import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

import '../assets/styles/Homepage.css';

export default function HomePage() {
  return (
    <div>
      <Header/>
   
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<a className="navbar-brand" href="#">Home</a>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
    <a className="nav-link active" href="#">ABOUT US</a>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="/contactUs">ContactUs</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="/research">RESEARCH</Link>
    
  </li>
  <li className="nav-item">
    <a className="nav-link active" href="#">START-UPS</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" href="#">INOVATION</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" href="#">IPR</a>
  </li>
 

</ul>
<form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
  </input>
  <button className="btn btn-outline-success" type="submit">Search</button>
</form>
</div>
</div>
</nav>
 <ImageSlider/>
    </div>
     
  )
}


