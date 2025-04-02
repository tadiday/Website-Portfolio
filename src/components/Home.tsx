// import React from 'react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import myImage from '../assets/me.jpg';
import { FaRegCopyright } from "react-icons/fa";


const Home = (() => {
  const [, setScrollPosition] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);

      // Opacity decreases gradually
      setOpacity(Math.max(0, 1 - position / 700)); // Increased divisor for a slower fade

      // Scale shrinks more gradually (change divisor for speed control)
      setScale(Math.max(0.8, 1 - position / 4000)); // Slower scaling effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => setLocalTime(new Date().toLocaleTimeString());
    updateTime(); // Set initial value after mount
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="h-screen sticky top-0 px-[10%] pb-20 text-home bg-cover bg-center bg-no-repeat"
      initial={{ backgroundColor: "#000000" }} // Start with black background
      animate={{ backgroundColor: "#000000" }} // Animate background color
      transition={{ duration: 1 }} // Control duration of the background change
    >
      {/* Animated background sliding up with radius change */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[#524D47]"
        initial={{ y: "100%", borderRadius: "50%" }} // Start with off-screen and 50% radius
        animate={{
          y: "0%", // Slide it up into place
          borderRadius: "0%", // Animate the radius to 0%
        }}
        transition={{
          duration: 1.5, // Duration of the slide-up
          ease: [0.25, 0.8, 0.25, 1], // Cubic Bezier for smooth transition
        }}
      />
      <div className="h-[20%] grid grid-cols-25 items-start sticky">
        {/* Left Side: Copyright */}
        <div
          className="col-start-1 col-span-10 font-semibold text-[25px] flex items-center"
        >
        </div>

      </div>

      <div className="flex flex-col w-full">
        <div className="w-full">
          <h1
            className="flex w-full sm:text-[100px] md:text-[190px] lg:text-[250px] font-bold underline justify-center"
            style={{
              opacity,
              transform: `scale(${scale})`,
              transition: "all 0.3s ease-out",
            }}
          >
            PETER CAO
          </h1>

          <div className="grid grid-flow-row-dense grid-cols-25">
            <div
              className="font-title text-[30px] col-start-1 col-span-25 font-mono font-light w-full justify-between flex"
              style={{
                opacity,
                transform: `scale(${scale})`,
                transition: "all 0.3s ease-out",
              }}
            >
              <div className="w-full">
                <p >An Upcoming Software Engineer</p>
                <p className="mt-2 font-light text-[20px] col-start-1 col-span-9 text-balance">
                  Passionate about building scalable software, solving complex problems, and
                  creating innovative solutions.</p>

              </div>
              <div
                className="font-title text-[30px] col-end-25 col-span-11 font-mono font-bold w-full text-right"
                style={{
                  opacity,
                  transform: `scale(${scale})`,
                  transition: "all 0.3s ease-out",
                }}
              >
                <p className="font-light">AVAILABLE FOR HIRE</p>
                <div className="text-[70px]">MAY 2025</div>
              </div>
            </div>



            <div
              className="font-title text-[22px] min-h-[190px] col-start-1 col-span-25 font-mono font-light w-full justify-end flex flex-col">
            </div>

            <div
              className="font-title text-[22px] col-start-1 col-span-25 font-mono font-light w-full flex justify-between select-text"
              style={{
                opacity,
                transform: `scale(${scale})`,
                transition: "all 0.3s ease-out",
              }}
            >
              <p>38.7439° N, 77.2405° W</p>
              <div>{localTime}</div>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
});

export default Home;
