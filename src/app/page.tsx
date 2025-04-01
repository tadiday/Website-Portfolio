"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Home from "@/components/Home";
import About from "@/components/About";
import Project from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Main() {
  const scrollToSection = (section: "home" | "about" | "projects" | "experience" | "contact") => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // About Section Scaling (Zoom in when entering)
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const scaleAbout = useTransform(aboutProgress, [0, 0.2], [0.95, 1]); // Scale up at 30%

  // Experience Section Scaling (Shrink when leaving)
  const experienceRef = useRef(null);
  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"],
  });
  const scaleExperience = useTransform(experienceProgress, [0.7, 1], [1, 0.95]); // Shrink at 70%

  return (
    <div className="relative w-full text-white">
      <div id="noise-overlay"></div>
      <div className="fixed top-0 left-0 z-40 flex flex-col items-end justify-center w-[10%] max-w-[60px] h-full">
        <Header scrollToSection={scrollToSection} />
      </div>

      <div id="home" className="grid">
        <Home />

        {/* About Section (Zoom In) */}
        <motion.div
          ref={aboutRef}
          id="about"
          style={{ scale: scaleAbout }}
          className="grid transition-transform duration-200 ease-out"
        >
          <About />
        </motion.div>

        <Project />

        {/* Experience Section (Shrink When Leaving) */}
        <motion.div
          ref={experienceRef}
          id="experience"
          style={{ scale: scaleExperience }}
          className="grid transition-transform duration-200 ease-out"
        >
          <Experience />
        </motion.div>

        <Contact />
      </div>
    </div>
  );
}
