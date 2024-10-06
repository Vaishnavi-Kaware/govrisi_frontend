// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link for navigation
// import govlogo from '../assets/images/gov-logo.png'; // Adjust the path if necessary
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// export default function HomePage() {
//     return (
//         <div>
//             {/* Navbar with logo */}
//             <nav className="navbar navbar-light bg-light">
//                 <div className="container">
//                     <img src={govlogo} width="60" height="100" alt="Government Logo" />
//                     <a className="navbar-brand" href="#">Research Portal</a>
//                 </div>
//             </nav>

//             {/* Main Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent"
//                         aria-controls="navbarSupportedContent"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link active" to="/">Home</Link> {/* Home link */}
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <Link className="nav-link dropdown-toggle" id="researchDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Research
//                                 </Link>
//                                 <ul className="dropdown-menu" aria-labelledby="researchDropdown">
//                                     <li><Link className="dropdown-item" to="/add-research">Add Research</Link></li> {/* Add Research route */}
//                                     <li><Link className="dropdown-item" to="/ongoing-projects">Ongoing Projects</Link></li> {/* Ongoing Projects */}
//                                     <li><Link className="dropdown-item" to="/research-projects">Research Projects</Link></li> {/* Research Projects */}
//                                     <li><Link className="dropdown-item" to="/research-update">Research Update</Link></li> {/* Research Update */}
//                                     <li><Link className="dropdown-item" to="/researcher-profile">Researcher Profile</Link></li> {/* Researcher Profile */}
//                                 </ul>
//                             </li>
//                         </ul>

//                         <form className="d-flex" role="search">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>

//             {/* Welcome Message */}
//             <div className="container mt-4">
//                 <h1 className="text-center">Welcome to the Enhancing Research, IPR, Innovation & Start-ups in Gujarat </h1>
//                 <p className="text-center">Explore our features, ongoing projects, and latest research initiatives.</p>
//             </div>
//         </div>
//     );
// }












import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import govlogo from '../assets/images/gov-logo.png'; // Adjust the path if necessary
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function HomePage() {
    return (
        <div>
            {/* Navbar with logo */}
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <img src={govlogo} width="60" height="100" alt="Government Logo" />
                    <a className="navbar-brand" href="#">Research Portal</a>
                </div>
            </nav>

            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
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
                                <Link className="nav-link active" to="/">Home</Link> {/* Home link */}
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id="researchDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Research
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="researchDropdown">
                                    <li><Link className="dropdown-item" to="/add-research">Add Research</Link></li> {/* Add Research route */}
                                    <li><Link className="dropdown-item" to="/ongoing-projects">Ongoing Projects</Link></li> {/* Ongoing Projects */}
                                    <li><Link className="dropdown-item" to="/research-projects">Research Projects</Link></li> {/* Research Projects */}
                                    <li><Link className="dropdown-item" to="/research-update">Research Update</Link></li> {/* Research Update */}
                                    <li><Link className="dropdown-item" to="/researcher-profile">Researcher Profile</Link></li> {/* Researcher Profile */}
                                </ul>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        {/* Sign Up and Login buttons */}
                        <div className="d-flex ms-3">
                            <Link to="/signup" className="btn btn-primary me-2">Sign Up</Link> {/* Sign Up button */}
                            <Link to="/login" className="btn btn-outline-secondary">Login</Link> {/* Login button */}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Welcome Message */}
            <div className="container mt-4">
                <h1 className="text-center">Welcome to the Enhancing Research, IPR, Innovation & Start-ups in Gujarat</h1>
                <p className="text-center">Explore our features, ongoing projects, and latest research initiatives.</p>
            </div>
        </div>
    );
}



