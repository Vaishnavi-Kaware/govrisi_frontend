import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResearchForm from './components/ResearchForm';
import ResearchUpdate from './components/ResearchUpdate';
import ResearcherProfile from './components/ResearcherProfile';
import OngoingProjects from './components/OngoingProjects';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import ForgotPasswordForm from './components/ForgotPasswordForm'; // Import ForgotPasswordForm

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-research" element={<ResearchForm />} />
                <Route path="/research-update" element={<ResearchUpdate />} />
                <Route path="/researcher-profile" element={<ResearcherProfile />} />
                <Route path="/ongoing-projects" element={<OngoingProjects />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/forgot-password" element={<ForgotPasswordForm />} /> {/* New route for Forgot Password */}
            </Routes>
        </Router>
    );
};

export default App;
  