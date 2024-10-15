import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../assets/styles/IPRHomePage.css';

// Import your images
import patents from '../assets/images/patents.jpg';
import copyright from '../assets/images/copyright.jpg';
import trademarks from '../assets/images/Trademarks.jpg';
import industrialDesigns from '../assets/images/Industrial_designs.jpg';
import geographicalIndications from '../assets/images/Geographical_indications.jpg';
import tradeSecrets from '../assets/images/Trade_secrets.jpg';

export default function IPRHomePage() {
  return (
    <div>
      <Header />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/manage-patents">Manage Patents</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/patent-track">Patent Track</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/ipr-status">IPR Status</Link>
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

      {/* What is Intellectual Property? Section */}
      <div className="container-fluid my-4">
        <h2 className="text-center">What is Intellectual Property?</h2>
        <p className="text-center">
          Intellectual property (IP) refers to creations of the mind, such as inventions; literary and artistic works;
          designs; and symbols, names, and images used in commerce.
        </p>
        <p className="text-center">
          IP is protected in law by, for example, <a href="#">patents</a>, <a href="#">copyright</a>, and <a href="#">trademarks</a>, 
          which enable people to earn recognition or financial benefit from what they invent or create. 
          By striking the right balance between the interests of innovators and the wider public interest, 
          the IP system aims to foster an environment in which creativity and innovation can flourish.
        </p>

        {/* Types of Intellectual Property Section */}
        <h2 className="text-center">Types of Intellectual Property</h2>
        <p className="text-center">
          Do you know what the difference is between a patent and an industrial design, 
          how to protect your photo with a copyright, or why you would want to obtain 
          a protected designation of origin? Discover everything you ever wanted to know about IP rights.
        </p>

        {/* Grid layout for types of IP */}
        <div className="row">
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={patents} className="card-img-top" alt="Patents" />
              <div className="card-body">
                <h5 className="card-title">Patents</h5>
                <p className="card-text">
                  A patent is an exclusive right granted for an invention. Generally speaking, a patent provides the patent owner with the right to decide how - or whether - the invention can be used by others. In exchange for this right, the patent owner makes technical information about the invention publicly available in the published patent document.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={copyright} className="card-img-top" alt="Copyright" />
              <div className="card-body">
                <h5 className="card-title">Copyright</h5>
                <p className="card-text">
                  Copyright is a legal term used to describe the rights that creators have over their literary and artistic works. Works covered by copyright range from books, music, paintings, sculpture and films, to computer programs, databases, advertisements, maps and technical drawings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={trademarks} className="card-img-top" alt="Trademarks" />
              <div className="card-body">
                <h5 className="card-title">Trademarks</h5>
                <p className="card-text">
                  A trademark is a sign capable of distinguishing the goods or services of one enterprise from those of other enterprises. Trademarks date back to ancient times when artisans used to put their signature or "mark" on their products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={industrialDesigns} className="card-img-top" alt="Industrial designs" />
              <div className="card-body">
                <h5 className="card-title">Industrial Designs</h5>
                <p className="card-text">
                  An industrial design constitutes the ornamental or aesthetic aspect of an article. A design may consist of three-dimensional features, such as the shape or surface of an article, or of two-dimensional features, such as patterns, lines, or color.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={geographicalIndications} className="card-img-top" alt="Geographical Indications" />
              <div className="card-body">
                <h5 className="card-title">Geographical Indications</h5>
                <p className="card-text">
                  Geographical indications and appellations of origin are signs used on goods that have a specific geographical origin and possess qualities, a reputation or characteristics that are essentially attributable to that place of origin. Most commonly, a geographical indication includes the name of the place of origin of the goods.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={tradeSecrets} className="card-img-top" alt="Trade Secrets" />
              <div className="card-body">
                <h5 className="card-title">Trade Secrets</h5>
                <p className="card-text">
                  Trade secrets are IP rights on confidential information which may be sold or licensed. The unauthorized acquisition, use or disclosure of such secret information in a manner contrary to honest commercial practices by others is regarded as an unfair practice and a violation of the trade secret protection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="text-center my-4">
          <h2>Watch Our Videos</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/S7LRj29KDT4" // Corrected format for the first video
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="mt-2">SignUp</p> {/* Caption added below the video */}
            </div>
            <div className="col-md-4 mb-4">
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/kyGflgxxlrw" // Replace with your second video ID
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="mt-2">Login</p> {/* Caption added below the video */}
            </div>
            <div className="col-md-4 mb-4">
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/BIkYYLnOf5g" // Replace with your third video ID
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="mt-2">Other</p> {/* Caption added below the video */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
