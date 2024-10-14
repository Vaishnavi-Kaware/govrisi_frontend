import './App.css';

import Footer from './components/Footer';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import your HomePage component

import Researchhomepage from './components/Research/Researchhomepage'; // Create this component for "RESEARCH"
import SignIn from './components/Research/SignInForm';
import ResearchForm from './components/Research/ResearchForm';
import Resercherprofile from './components/Research/ResearcherProfile';
import ReasearchSearchWindow from './components/Research/ReasearchSearchWindow';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
       
       <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/research" element={<Researchhomepage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<ResearchForm />} />
        <Route path="/research-profile" element={<Resercherprofile />} />
        <Route path="/ReasearchSearchPage" element={<ReasearchSearchWindow />} />
        <Route path="/contactUs" element={<ContactUs/>} />
        
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
