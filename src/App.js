import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import your HomePage component

import Research from './components/ResearcherProfile'; // Create this component for "RESEARCH"



function App() {
  return (
    <>
       <Header/>
       <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/research" element={<Research />} />
        
      </Routes>
    </Router>
    <ImageSlider/>
    <Footer/>
    </>
  );
}

export default App;
