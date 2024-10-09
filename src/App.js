import './App.css';

import Footer from './components/Footer';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import your HomePage component

import Researchhomepage from './components/Researchhomepage'; // Create this component for "RESEARCH"
import SignIn from './components/SignInForm';
import Resercherprofile from './components/ResearcherProfile';


function App() {
  return (
    <>
       
       <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/research" element={<Researchhomepage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/research-profile" element={<Resercherprofile />} />
        
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
