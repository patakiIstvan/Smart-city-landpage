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
     <main>
     <Hero/>
     <Introduction/>
     <Partners/>
     </main>
     <Footer/>
    </div>
  );
}

export default App;
