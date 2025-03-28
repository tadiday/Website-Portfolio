"use client"; // Ensure it's a Client Component (Next.js App Router)

import { useRef } from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import Project from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Main() {
  // const headerRef = useRef<HTMLDivElement>(null);
  // const aboutRef = useRef<HTMLDivElement>(null);
  // const projectRef = useRef<HTMLDivElement>(null);
  // const experienceRef = useRef<HTMLDivElement>(null);
  // const contactRef = useRef<HTMLDivElement>(null);

  // Scroll to section function
  const scrollToSection = (section: "home" |  "about" | "projects" | "experience" | "contact") => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

 
  return (
    <div className="relative w-full text-white ">
      <div id="noise-overlay"></div>
      {/* Header */}
      <div className="fixed top-0 left-0 z-40 flex flex-col items-end justify-center w-[10%] max-w-[60px] h-full">
        <Header scrollToSection={scrollToSection} />
      </div>

      {/* Main Sections */}
      <div id="home" className="grid">
        <Home/>
        <About/>
        <Project/>
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
}