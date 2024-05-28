
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

function App() {
  useEffect(() => {
   Aos.init();
  }, [])
  
  return (
    <div className="App">
      <NavBar />
     <div className="container">
      <Home />
      
      <Projects />
      
      <Skills />
      <Experience />
      <Contacts />
     </div>
    </div>
  );
}

export default App;
