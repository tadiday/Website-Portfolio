"use client"; // Ensure it's a Client Component (Next.js App Router)

import { useRef } from "react";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Project from "@/components/Projects";

export default function Home() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  // Smooth scroll function
  const smoothScrollTo = (targetPosition: number, duration = 800) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

      window.scrollTo(0, startPosition + distance * ease(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  // Scroll to section function
  const scrollToSection = (section: "about" | "projects" | "experience" | "contact") => {
    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
      about: aboutRef,
      projects: projectRef,
      experience: experienceRef,
      contact: contactRef,
    };
  
    const offset = headerRef.current?.offsetHeight || 0;
    const element = refs[section].current;
  
    if (element) {
      const targetPosition = element.offsetTop - offset - 4;
      smoothScrollTo(targetPosition);
    }
  };
 
  return (
    <div className="relative w-full text-white">
      {/* Header */}
      <div ref={headerRef} className="fixed top-0 left-0 z-40 flex flex-col items-end justify-center w-[10%] max-w-[60px] h-full">
        <Header scrollToSection={scrollToSection} />
      </div>

      {/* Main Sections */}
      <div className="grid">
        <About ref={aboutRef} />
        <Project ref={projectRef} />
        <Experience ref={experienceRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  );
}