
import React from 'react'



export default function HomePage() {
  return (
    <div>
   
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
<a className="navbar-brand" href="#">Home</a>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
    <a className="nav-link active" href="#">ABOUT US</a>
  </li>
  <li className="nav-item">
    <a className="nav-link active" href="#">REEARCH</a>
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
    </div>
  )
}

