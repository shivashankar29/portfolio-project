import React from "react"
import Hero from "./components/Hero";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar />
    <Hero />
    <About />
    <Techstack />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
