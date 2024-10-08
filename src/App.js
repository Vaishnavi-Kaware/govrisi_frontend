import './assets/styles/ResearchForm.css';
import './assets/styles/Homepage.css';
import './assets/styles/SignInForm.css';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Slider from './components/ImageSlider';


function App() {
  return (
    <>
       <Header/>
       <HomePage/>
       <Slider/>
       <Footer/>
    </>
  );
}

export default App;

