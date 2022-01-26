import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Quote from './components/Quote';
import Skills from './components/Skills';
import Slider from './components/Slider';



function App() {
  return (
    <div>
    <Nav/>
    <Slider/>
     <About/>
    <Skills/>
    {/*<Quote/>
    <Portfolio/>
    <Blog/>*/}
    <Contact/> 
    </div>
  );
}

export default App;
