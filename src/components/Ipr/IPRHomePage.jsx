import React, { useRef, useEffect } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import '../../assets/styles/IPRStyle/IPRHomePage.css';

// Import your images
import patents from '../../assets/images/patents.jpg';
import copyright from '../../assets/images/copyright.jpg';
import trademarks from '../../assets/images/Trademarks.jpg';
import industrialDesigns from '../../assets/images/Industrial_designs.jpg';
import geographicalIndications from '../../assets/images/Geographical_indications.jpg';
import tradeSecrets from '../../assets/images/Trade_secrets.jpg';

export default function IPRHomePage() {
  // Refs for videos
  const videoRefs = useRef([]);

  useEffect(() => {
    // Function to pause other videos when one is played
    const handlePlay = (index) => {
      videoRefs.current.forEach((video, i) => {
        if (i !== index && video) {
          video.pause();
        }
      });
    };

    // Adding event listeners to each video
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.addEventListener('play', () => handlePlay(index));
      }
    });

    // Cleanup event listeners on component unmount
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.removeEventListener('play', handlePlay);
        }
      });
    };
  }, []);

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
              <Link to="/ipr-search"><button className="btn btn-outline-success" type="submit">Search</button></Link>
            </form>
          </div>
        </div>
      </nav>

      {/* What is Intellectual Property? Section */}
      <div className="container-fluid my-4">
        <h2 className="title-left my-3">What is Intellectual Property?</h2>
        Intellectual Property Rights (IPR) are legal protections granted to individuals or organizations for their creations and innovations. These rights give the creator exclusive control over the use, distribution, and commercialization of their intellectual property, such as inventions, literary works, artistic creations, designs, symbols, and names used in trade. IPR encourages innovation by ensuring that creators can benefit from their efforts and prevent unauthorized use by others. Common forms of IPR include patents for inventions, copyrights for artistic works, trademarks for brand identity, and trade secrets for confidential business information. By safeguarding these creations, IPR promotes a culture of creativity and progress.

        {/* Types of Intellectual Property Section */}
        <h2 className="text-start my-3">Types of Intellectual Property</h2>
        Discover everything you ever wanted to know about IP rights.

        {/* Grid layout for types of IP */}
        <div className="row">
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={patents} className="card-img-top" alt="Patents" />
              <div className="card-body">
                <h5 className="card-title">Patents</h5>
                <p className="card-text">A patent is an exclusive legal right granted for an invention, giving the patent owner control over how the invention is used.</p>
                <Link to="/PatentPage" className="btn btn-primary">Learn More</Link> 
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={copyright} className="card-img-top" alt="Copyright" />
              <div className="card-body">
                <h5 className="card-title">Copyright</h5>
                <p className="card-text">Copyright is a legal term that refers to the rights creators hold over their literary and artistic works.</p>
                <Link to="/CopyrightPage" className="btn btn-primary">Learn More</Link> 
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={trademarks} className="card-img-top" alt="Trademarks" />
              <div className="card-body">
                <h5 className="card-title">Trademarks</h5>
                <p className="card-text">Trademarks are symbols, words, or signs used to distinguish the goods or services of one enterprise from those of others.</p>
                <Link to="/trademarkpage" className="btn btn-primary">Learn More</Link> 
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={industrialDesigns} className="card-img-top" alt="Industrial designs" />
              <div className="card-body">
                <h5 className="card-title">Industrial Designs</h5>
                <p className="card-text">Industrial Designs refer to the ornamental or aesthetic aspects of an article.</p>
                <Link to="/Industrial_Designs" className="btn btn-primary">Learn More</Link> 
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={geographicalIndications} className="card-img-top" alt="Geographical Indications" />
              <div className="card-body">
                <h5 className="card-title">Geographical Indications</h5>
                <p className="card-text">Geographical Indications are signs used on goods that have a specific geographical origin.</p>
                <Link to="/geographical-indication" className="btn btn-primary">Learn More</Link> 
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-stretch mb-4">
            <div className="card flex-fill">
              <img src={tradeSecrets} className="card-img-top" alt="Trade Secrets" />
              <div className="card-body">
                <h5 className="card-title">Trade Secrets</h5>
                <p className="card-text">Trade Secrets refer to intellectual property rights that protect confidential information.</p>
                <Link to="/trade_secret"className="btn btn-primary">Learn More</Link>

              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="text-center my-4">
          <h2>Some Videos</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <video 
                ref={(el) => videoRefs.current[0] = el} 
                width="100%" height="215" controls>
                <source src={require('../../assets/images/Recent_Developments_in_IP_Law.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2">Recent Developments in IP Law</p>
            </div>
            <div className="col-md-4 mb-4">
              <video 
                ref={(el) => videoRefs.current[1] = el} 
                width="100%" height="215" controls>
                <source src={require('../../assets/images/Need_of_IPR.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2">Need of IPR</p>
            </div>
            <div className="col-md-4 mb-4">
              <video 
                ref={(el) => videoRefs.current[2] = el} 
                width="100%" height="215" controls>
                <source src={require('../../assets/images/intro.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-2">Introduction to IPR</p>
            </div>
          </div>
        </div>

      </div>
      <style jsx>{`
        .card {
          transition: transform 0.2s;
        }
        .card:hover {
          transform: scale(1.02);
        }
        .bg-primary {
          background-color: #007bff !important;
        }
        .border-info {
          border-color: #17a2b8 !important;
        }
      `}</style>
    </div>
  );
}



