import React, { useRef } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Header from './components/Header';
// import Project from './components/Projects';

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
    console.log(offset);
    console.log(refs[section].current.offsetTop);
  
    window.scrollTo({
      top: refs[section].current.offsetTop - offset - 4, ...scrollOptions,
    });
  };

  return (
    <div className="relative bg-[#14213d] text-white">
      <div className="fixed z-50 flex items-center justify-center w-full" ref={headerRef}>
        <Header className = "" scrollToSection={scrollToSection} />
      </div>
      <div className="grid gap-4 font-title text-[#e0e1dd]">
        {/* <Home className ="h-[58rem] rounded-[12px] bg-red-100" refProp={homeRef} /> */}
        <About refProp={aboutRef} />
        {/* <Project refProp={projectRef} /> */}
        <Experience refProp={experienceRef} />
        <Contact refProp={contactRef} />
      </div> 
    </div>
  );
}

export default App;
