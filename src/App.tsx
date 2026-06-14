import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Mywork from "./components/sections/Mywork";
import MouseLight from "./components/MouseLight";
function App() {
  return (
    <>
     <MouseLight />
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Mywork />
      <Skills />
      <Contact />
    </main></>
    
  );
}

export default App;