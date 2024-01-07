import React, { useRef } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      experience: experienceRef,
      contact: contactRef,
    };

    refs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="">


      <Header scrollToSection={scrollToSection} />
      <Home refProp={homeRef} />
      <About refProp={aboutRef} />
      <Experience refProp={experienceRef} />
      <Contact refProp={contactRef} />
      
    </div>
  );
}

export default App;
