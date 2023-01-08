import './App.css';
import About from './components/About';
// import Contact from './components/Contact';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Slider from './components/Slider';



function App() {
  return (
    <div>
    <Nav/>
    <Slider/>
    <About/>
    <Skills/>
    {/* <Contact/>  */}
    </div>
  );
}

export default App;
