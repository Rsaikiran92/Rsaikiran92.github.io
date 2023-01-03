
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';

import About from './Components/About/About';
import Projects from './Components/Project/Project';
import Github from './Components/Github/Github';
import Contact from './Components/Contact/Contact';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
     <Projects/>
     <Github/>
     <Contact/>
    </div>
  );
}

export default App;
