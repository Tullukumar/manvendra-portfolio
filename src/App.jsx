import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ThreeBackground from "./components/ThreeBackground";
import VisitorCounter from "./components/VisitorCounter";

function App() {
  return (
    <>
      {/* Global 3D Background */}
      <ThreeBackground />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Portfolio Content */}
      <main className="portfolio">
        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
        
         <VisitorCounter />

        <Footer />
       
      </main>
    </>
  );
}

export default App;