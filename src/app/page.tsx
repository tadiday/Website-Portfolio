"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Home from "@/components/Home";
import About from "@/components/About";
import Project from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import { FaRegCopyright } from "react-icons/fa";

export default function Main() {
  // About Section Scaling (Zoom in when entering)
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const scaleAbout = useTransform(aboutProgress, [0, 0.2], [0.97, 1]); // Scale up at 30%

  // Experience Section Scaling (Shrink when leaving)
  const experienceRef = useRef(null);
  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"],
  });
  const scaleExperience = useTransform(experienceProgress, [0.7, 1], [1, 0.95]); // Shrink at 70%


  // Animate X position (Slide in effect)
  const headerX = useTransform(aboutProgress, [0.2, 0.5], [-100, 0]);
  const headerOpacity = useTransform(aboutProgress, [0.2, 0.5], [0, 1]);

  return (
    <div className="relative w-full text-white ">
      <div id="noise-overlay"></div>
      
      {/* NavBar */}
      <motion.div
        className="fixed top-0 left-0 z-60 flex flex-col items-end justify-center w-[10%] max-w-[60px] h-full"
        style={{ x: headerX, opacity: headerOpacity }}
      >
        <Header />
      </motion.div>

      {/* Header */}
      <div className="h-[20%] grid grid-cols-25 items-start absolute z-50 w-full px-[10%] py-[2%]">
        {/* Left Side: Copyright */}
        <motion.div
          className="col-start-1 col-span-10 font-thin text-[22px] flex items-center"
          initial={{ opacity: 0, y: 10, z: 10 }} // Start with invisible text
          animate={{ opacity: 1, y: 0, z: 10 }} // Fade-in after delay
          transition={{ delay: 1.25, duration: 1, ease: "easeOut" }} // Delayed fade-in
        >
          <FaRegCopyright className="flex mr-2 mt-1" /> 2025 Peter Cao
        </motion.div>

        {/* Right Side: Navigation Links */}
        <motion.ul
          className="col-end-25 col-span-6 text-[22px] flex space-x-6 font-thin text-right"
          initial={{ opacity: 0, y: 10, z: 10 }} // Start with invisible text
          animate={{ opacity: 1, y: 0, z: 10 }} // Fade-in after delay
          transition={{ delay: 1.25, duration: 1, ease: "easeOut" }} // Delayed fade-in
          >
          <li>
            <a href="#about"
              className="hover:text-[#ffffff] flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:translate-x-1 origin-left">
              About
            </a>
          </li>
          <li>
            <a href="#projects"
              className="hover:text-[#ffffff] flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:translate-x-1 origin-left">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience"
              className="hover:text-[#ffffff] flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:translate-x-1 origin-left">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact"
              className="hover:text-[#ffffff] flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:translate-x-1 origin-left">
              Contact
            </a>
          </li>
        </motion.ul>
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
