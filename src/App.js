import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Introduction from './components/Introduction/Introduction';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Introduction/>
     <Partners/>
     <Footer/>
    </div>
  );
}

export default App;
