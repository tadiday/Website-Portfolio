// import React from 'react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegCopyright } from "react-icons/fa";


const Home = (() => {
  const [, setScrollPosition] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      setOpacity(Math.max(0, 1 - position / 700)); // Increased divisor for a slower fade
      setScale(Math.max(0.8, 1 - position / 4000)); // Slower scaling effect
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [localTime, setLocalTime] = useState<string | null>(null); // Time state
  useEffect(() => {
    const updateTime = () => setLocalTime(new Date().toLocaleTimeString());
    updateTime(); // Set initial value after mount
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="h-screen sticky top-0 px-[10%] pt-[10%] pb-20 text-home bg-cover bg-center bg-no-repeat"
      initial={{ backgroundColor: "#000000" }} // Start with black background
      animate={{ backgroundColor: "#000000" }} // Animate background color
      transition={{ duration: 1 }} // Control duration of the background change
    >

      {/* Animated background sliding up with radius change */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[#524D47]"
        initial={{ y: "100%", borderRadius: "100%" }} // Start with off-screen and 50% radius
        animate={{ y: "0%", borderRadius: "0%" }} // Slide up to the top and change radius
        transition={{ duration: 1.5, ease: [0.25, 0.8, 0.25, 1] }} // Control duration and easing of the slide
      />


      <div className="flex flex-col w-full">
        <div className="w-full">

          {/* Name Section */}
          <motion.a
            initial="initial"
            animate="visible"
            className="relative block overflow-hidden whitespace-nowrap w-full sm:text-[100px] md:text-[190px] lg:text-[250px] font-bold justify-center"
            style={{ lineHeight: 1.5, opacity, transform: `scale(${scale})`, transition: "all 0.3s ease-out" }}
          >
            <div>
              <motion.span className="inline-block"></motion.span>
            </div>
            <div className="absolute inset-0 text-center">
              {("PETER CAO").split("").map((l, i) => (
                <motion.span
                  variants={{ initial: { y: "100%" }, visible: { y: 0 }, }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 + 0.025 * i }}
                  className="inline-block "
                  key={i}
                >
                  {l === " " ? "\u00A0" : l} {/* Keeps spaces visible */}
                </motion.span>
              ))}
            </div>
          </motion.a>

          {/* Subtitle Section */}
          <div className="grid grid-flow-row-dense grid-cols-25">
            {/* Title and Availability */} 
            <motion.div
              className="font-title text-[30px] col-start-1 col-span-25 font-mono font-light w-full justify-between flex"
              initial={{ opacity: 0, y: 10, z: 10 }} // Start with invisible text
              animate={{ opacity: 1, y: 0, z: 10 }} // Fade-in after delay
              transition={{ delay: 1.25, duration: 1, ease: "easeOut" }} // Delayed fade-in
              style={{ opacity, transform: `scale(${scale})`, transition: "all 0.3s ease-out" }}
            >
              <div className="w-full"
                style={{ opacity, transform: `scale(${scale})`, transition: "all 0.3s ease-out" }}
              >
                <p >An Upcoming Software Engineer</p>
                <p className="mt-2 font-light text-[20px] col-start-1 col-span-9 text-balance">
                  Passionate about building scalable software, solving complex problems, and
                  creating innovative solutions.</p>

              </div>
              <motion.div
                className="font-title text-[30px] col-end-25 col-span-11 font-mono font-bold w-full text-right"
                style={{ opacity, transform: `scale(${scale})`, transition: "all 0.3s ease-out" }}
              >
                <p className="font-light">AVAILABLE FOR HIRE</p>
                <div className="text-[70px]">MAY 2025</div>
              </motion.div>
            </motion.div>

            <div
              className="font-title text-[22px] min-h-[190px] col-start-1 col-span-25 font-mono font-light w-full justify-end flex flex-col">
            </div>

             {/*  Location and Local Time */} 
            <motion.div
              className="font-title text-[22px] col-start-1 col-span-25 font-mono font-light w-full flex justify-between select-text"
              initial={{ opacity: 0, y: 10, z: 10 }} // Start with invisible text
              animate={{ opacity: 1, y: 0, z: 10 }} // Fade-in after delay
              transition={{ delay: 1.25, duration: 1, ease: "easeOut" }} // Delayed fade-in
              style={{ opacity, transform: `scale(${scale})`, transition: "all 0.3s ease-out" }}
            >
              <p>38.7439° N, 77.2405° W</p>
              <div>{localTime}</div>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section >
  );
});

export default Home;
