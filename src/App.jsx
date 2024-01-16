import React, { useRef } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Header from './components/Header';
import Project from './components/Projects';

function App() {
  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectRef,
      experience: experienceRef,
      contact: contactRef,
    };
    const offset = headerRef.current ? headerRef.current.offsetHeight : 0;
    const scrollOptions = { behavior: 'smooth', block: 'start' };
  
    window.scrollTo({
      top: refs[section].current.offsetTop - offset - 4, ...scrollOptions,
    });
  };

  return (
    <div className="relative pt-10 pb-5">
      <div className="fixed top-0 left-0 w-full z-50" ref={headerRef}>
        <Header scrollToSection={scrollToSection} />
      </div>
      <div className=" px-2 grid gap-4">
        <Home className =" " refProp={homeRef} />
        <About refProp={aboutRef} />
        <Project refProp={projectRef} />
        <Experience refProp={experienceRef} />
        <Contact refProp={contactRef} />
      </div> 
    </div>
  );
}

export default App;
