import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { GoArrowUpRight } from "react-icons/go";


const About = (() => {

  const words = ["Engineer", "Designer", "Developer", "Programmer", "Creator"];


  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Ensures 4 seconds before switching

    return () => clearTimeout(timeout);
  }, [index]);


  const sectionTitle = "WHO AM I?";

  // Animation settings
  const textVariants = {
    hidden: { y: "50px", opacity: 0 }, // Start underground (y: 100%)
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" }, // Stagger letters
    }),
  };

  return (
    <section id='about' className="h-full rounded-t-[25px] bg-[#080807] p-4 z-30  text-[#bebebe]">
      <div className="relative z-20 w-full overflow-x-clip">
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20 text-home'>
            <h2 className='col-span-8 col-start-2 text-[120px] font-semibold'>
              {sectionTitle.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }} // Ensures it animates only once
                  variants={textVariants}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char} {/* Keeps spaces visible */}
                </motion.span>
              ))}
            </h2>
            <h2 className='col-span-12 col-start-10 text-[120px] font-semibold'>

            </h2>
            <motion.span
              className="flex text-[25px] font-thin text-home col-span-2 col-start-10"
              initial={{ opacity: 0, y: 10 }}  // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0 }}
            >
              An UI Designer
            </motion.span>
            <div className="h-full flex col-span-3 col-start-12 w-full items-center"
            >
              <motion.div
                className="h-[1px] bg-[#524D47] w-full origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              />
            </div>


            <div className="h-full flex col-span-3 col-start-10 w-full items-center">
              <motion.div
                className="h-[1px] bg-[#524D47] w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              />
            </div>
            <motion.span
              className="flex text-[25px] font-thin text-home col-span-2 col-start-13 justify-center"
              initial={{ opacity: 0, y: 10 }}  // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              A SW Engineer
            </motion.span>

            <motion.span
              className="flex text-[25px] font-thin text-home col-span-2 col-start-10"
              initial={{ opacity: 0, y: 10 }}  // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0 }}
            >
              A Programmer
            </motion.span>
            <div className="h-full flex col-span-3 col-start-12 w-full items-center"
            >
              <motion.div
                className="h-[1px] bg-[#524D47] w-full origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              />
            </div>
          </div>


          <div className='pr-[5%] pb-[5%] pl-[5%] rounded-b-3xl min-h-screen text-home '>
            <div className="w-full pt-16">
              <div className="flex flex-col justify-between gap-y-16 border-t border-[#524D47]">
                <div className="grid gap-x-8 relative h-full min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-16 ">

                  <div className="object-contain w-full shadow-md grayscale col-span-5 col-start-1 py-4 pl-2 hover:grayscale-0 hover:scale-105 duration-[0.5s]">
                    <img
                      className="object-contain w-full  border-gray-700 rounded-2xl shadow-md overflow-hidden"
                      src="../assets/me/me2.jpg"
                      alt="Example" />
                  </div>


                  <div className='flex flex-col col-span-10 col-start-7 text-[20px] font-thin gap-y-10 py-4'>

                    <p className="text-[30px] text-balance font-light">
                      With a passion for full-stack development, I specialize in creating user-friendly front-end designs and integrating them with robust back-end systems,
                      combining creativity and technical expertise to deliver impactful user experiences.
                    </p>
                    <div className="flex flex-col gap-x-10 gap-y-space-sm lg:flex-row text-[20px]">

                      <span className='flex h-fit overflow-clip font-mono tracking-mono flex-grow max-w-[150px]'>
                        <span className="h-full text-nowrap">(About Me)</span>
                      </span>
                      <p className="max-w-[40ch] text-balance">
                        I’m a Computer Science student at Virginia Tech, graduating May 2025. I’ve contributed to projects involving optimizing systems,
                        automation tools, and user interfaces allowing me to build well-rounded solutions and collaborating across development areas.
                      </p>




                    </div>

                    <div className="flex flex-col gap-x-10 gap-y-space-sm lg:flex-row ">

                      <span className='flex h-fit overflow-clip font-mono tracking-mono flex-grow max-w-[150px]'>
                        <span className="h-full text-nowrap ">(Hobbies)</span>
                      </span>
                      <p className="max-w-[40ch] text-balance">
                        When I’m not coding, I like to play games and watch anime, as well as I enjoy try new restaurants and cooking.
                        I also love to travel and currently have (Seattle, Miami, Austin, and Las Vegas) on my bucket travel list.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="flex border-[#524D47] justify-start gap-x-2 text-left text-[25px] p-[2%] 
                    font-semibold md:grid md:grid-cols-12 md:justify-between md:gap-x-4
                    hover:shadow-md transition-all duration-300 ease-in-out hover:opacity-100 group/link group/title ">
              <a href="/assets/documents/resume.pdf"
                target="_blank"
                className="w-full pt-16 col-span-2 col-start-6 text-[25px] font-mono">
                <span className="inline-block group-hover/title:text-[#967A54] text-[25px] ">View Vlog</span>
                <GoArrowUpRight className='inline-block text-[#745f4e] group-hover/title:text-[#967A54] 
                          transition-transform duration-300 ease-in-out group-hover/link:-translate-y-1 group-hover/link:translate-x-1' />
                <div className="flex flex-col h-full mt-2 col-span-2 col-start-6">
                  <div className="flex flex-col h-full -mb-5">
                    <div className=" w-[80%] h-[2px] bg-home">
                    </div>
                  </div>
                  <div className="flex flex-col h-full">
                    <div className=" w-[50%] h-[2px] bg-home">
                    </div>
                  </div>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
      {/* </div> */}
    </section>
  );
});

export default About;
