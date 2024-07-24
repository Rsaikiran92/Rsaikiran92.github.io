
import NavBar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Projects from './Components/Project/Project';
import Github from './Components/Github/Github';
import Contact from './Components/Contact/Contact';
import { useColorMode } from '@chakra-ui/react';
import Footer from './Components/Footer/Footer';



function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div>
      <NavBar isDark={isDark} toggleColorMode={toggleColorMode}/>
      <Home isDark={isDark}/>
      <About isDark={isDark}/>
      <Skills isDark={isDark} />
     <Projects isDark={isDark}/>
     <Github isDark={isDark}/>
     <Contact isDark={isDark}/>
     <Footer isDark={isDark} />
    </div>
  );
}

export default App;
