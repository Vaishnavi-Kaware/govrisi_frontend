import './assets/styles/ResearchForm.css';
import './assets/styles/Homepage.css';
import './assets/styles/SignInForm.css';
import './App.css';
import ResearchForm from './components/ResearchForm';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import SignInForm from './components/SignInForm';

function App() {
  return (
    <>
    
       <HomePage/>
       <ResearchForm/>
       <SignInForm/>
       <Footer/>
       

    
    </>
  );
}

export default App;

