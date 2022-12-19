
import './App.css';
import NavBar from './Components/Navar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';

import About from './Components/About/About';
import Projects from './Components/Project/Project';
import Github from './Components/Github/Github';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
     <Projects/>
     <Github/>
     
    </div>
  );
}

export default App;
