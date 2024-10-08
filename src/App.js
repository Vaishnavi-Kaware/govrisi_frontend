import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import your HomePage component

import Research from './components/ResearcherProfile'; // Create this component for "RESEARCH"



function App() {
  return (
    <>
       <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/research" element={<Research />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
