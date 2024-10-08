import './assets/styles/Homepage.css';
import './App.css';

import HomePage from './components/HomePage';
import Footer from './components/Footer';
import ResearcherProfile from './components/ResearcherProfile'; // Importing ResearcherProfile

function App() {
  return (
    <>
    {/*}  <HomePage />      {/* HomePage component */}
      
      <ResearcherProfile />  {/* Added ResearcherProfile component */}
      
      {/*<Footer />        {/* Footer component */}
    </>
  );
}

export default App;
