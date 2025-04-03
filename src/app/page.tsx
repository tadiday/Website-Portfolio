"use client";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/navigation/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Project from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import NavBar from "@/components/navigation/NavBar";

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
  const headerX = useTransform(aboutProgress, [0.2, 0.4], [-100, 0]);
  const headerOpacity = useTransform(aboutProgress, [0.2, 0.4], [0, 1]);


  // useEffect(() => {
  //   if (window.history.scrollRestoration) {
  //     window.history.scrollRestoration = "manual";
  //   }
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="relative w-full text-white ">
      <div id="noise-overlay"></div>

      {/* NavBar */}
      <motion.div
        className="fixed top-0 left-0 z-60 flex flex-col items-end justify-center w-[10%] max-w-[60px] h-full"
        style={{ x: headerX, opacity: headerOpacity }}
      >
        <NavBar/>
      </motion.div>

      {/* Header */}
      <Header/>

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

        <Contact/>
      </div>
    </div>
  );
}
