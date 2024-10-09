import ImageSlider from './ImageSlider';
import Header from './Header';
import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/Homepage.css';


export default function HomePage() {
  return (
    <div>
        <Header/>
   
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<Link className="nav-link active" to="/">HOME</Link>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
    <Link className="nav-link active" to="/signIn">LOG-IN</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="/research">SIGN-IN</Link>  
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


