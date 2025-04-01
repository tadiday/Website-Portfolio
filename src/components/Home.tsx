// import React from 'react';
import { useState, useEffect } from "react";

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
    <section className="h-screen sticky top-0 px-[10%] pb-20 text-home bg-home bg-cover bg-center bg-no-repeat">
      <div className="h-[20%] grid grid-cols-25 items-start sticky">
        {/* Left Side: Copyright */}
        <div
          className="col-start-1 col-span-10 font-semibold text-[25px] flex items-center"
        >
          {/* <FaRegCopyright className="flex mr-2 mt-1" /> 2025 Peter Cao */}
        </div>

        {/* Right Side: Navigation Links */}
        {/* <ul
          className="col-end-25 col-span-8 text-right text-[25px] flex space-x-6 font-semibold"
        >
          <li><a href="#about" className="hover:text-gray-400 transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a></li>
          <li><a href="#experience" className="hover:text-gray-400 transition-colors">Experience</a></li>
          <li><a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a></li>
        </ul> */}
      </div>

      <div className="flex flex-col w-full">
        <div className="w-full">
          <h1
            className="flex w-full sm:text-[100px] md:text-[190px] lg:text-[250px] font-bold"
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
              className="font-title text-[30px] col-start-1 col-span-12 font-mono font-semibold w-full"
              style={{
                opacity,
                transform: `scale(${scale})`,
                transition: "all 0.3s ease-out",
              }}
            >
              <p>An Upcoming Software Engineer</p>
            </div>

            <div
              className="font-title text-[30px] col-end-25 col-span-11 font-mono font-bold w-full text-right"
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
    </section>
  );
});

export default Home;
