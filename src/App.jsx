import React, { useRef } from 'react';
import './App.css';
// import Home from './components/Home';
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


  // Custom scroll function with controllable duration
  const smoothScrollTo = (targetPosition, duration = 800) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function for smoother acceleration/deceleration
      const ease = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      window.scrollTo(0, startPosition + distance * ease(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectRef,
      experience: experienceRef,
      contact: contactRef,
    };

    const offset = headerRef.current ? headerRef.current.offsetHeight : 0;

    if (refs[section] && refs[section].current) {
      const targetPosition = refs[section].current.offsetTop - offset - 4;

      // Use our custom scroll function instead of the native scrollTo
      smoothScrollTo(targetPosition);

      // Uncomment if you want to revert to native behavior
      // window.scrollTo({
      //   top: targetPosition,
      //   behavior: 'smooth'
      // });
    }
  };

  return (
    <>
      <div id="noise-overlay"></div>
      <div className="relative text-white font-[]">
        <div className="fixed z-50 flex items-center justify-center w-full" ref={headerRef}>
          <Header className="font-['Montserrat Subrayada']" scrollToSection={scrollToSection} />
        </div>
        <div className="grid" >
          {/* <Home className ="h-[58rem] rounded-[12px] bg-red-100" refProp={homeRef} /> */}
          <About refProp={aboutRef} />
          <Project refProp={projectRef} />
          <Experience refProp={experienceRef} />
          <Contact refProp={contactRef} />
        </div>
      </div>
    </>

  );
}

export default App;
