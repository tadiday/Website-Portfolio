import React, { useState, useEffect } from 'react';
import WebPortfolio from '../assets/gif/web-port.gif';
import FoodSwipe from '../assets/gif/foodSwipe.gif';
import Background2 from '../assets/background/background2-bw.jpeg';
import Background1 from '../assets/background/background3-bw.jpg';
import Background3 from '../assets/background/background1-bw.jpg';
import SimPliSplitGif from '../assets/gif/scan.gif';
import { motion, AnimatePresence } from "framer-motion";


const Project = ({ refProp }) => {

  const projects = [
    {
      title: 'Web-Portfolio',
      date: '2025',
      tech: ['React.js', 'Tailwind', 'Next.js'],
      gitHub: 'https://github.com/tadiday/Website-Portfolio',
      description: `
          Built a personal portfolio website using React.js and Tailwind CSS to showcase projects, experiences, and research.`,
      image: WebPortfolio,
      tags: ['Web-App', 'GitHub', '2025'],
      backg: Background1,
    },
    {
      title: 'Simplisplit',
      date: '2023',
      tech: ['React-Native', 'Tailwind CSS', 'Python', 'Flask'],
      gitHub: 'Private',
      description: `
          A mobile application that allows user to scan their bills and split the cost with their friends seamlessly. 
          Available through the App Store.`,
      image: SimPliSplitGif,
      tags: ['Mobile', 'Private', '2023'],
      backg: Background3,
    },
    {
      title: 'Food Swipe',
      date: '2022',
      tech: ['React.js', 'TypeScript', 'Tailwind', 'Next.js', 'Framer Motion'],
      gitHub: 'http://github.com/kmsungporant/food_swipe',
      description: `
          Developed a Tinder-inspired restaurant discovery app designed to help users find the perfect dining spot. 
          The app allows users to swipe right for more details on local restaurants tailored to their location.`,
      image: FoodSwipe,
      tags: ['Web-App', 'GitHub', '2022'],
      backg: Background2,
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const { title, description, tech, image, gitHub, tags, backg } = projects[currentIndex];
  console.log(tech)



  return (
    <div ref={refProp} className="h-full rounded-t-[25px] bg-[#080807] p-4 z-30">
      <div className="relative z-20 w-full overflow-x-clip">
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20' >
            <h2 className='col-span-12 col-start-2 text-[100px] font-semibold'>
              SELECTED PROJECTS
            </h2>
          </div>
        </div>

        {/* With Motion and Button*/}
        <section className="pr-[5%] pb-[20%] pl-[5%] rounded-t-3xl min-h-screen">
          <div className="w-full pt-16">
            <div className="flex flex-col justify-between mt-12 gap-y-16">
              {/* Portfolio */}
              <div className="sticky top-0 border-t border-[#524D47] bg-[#080807] pb-[10em]" style={{ top: "calc(10vh + 0em)" }}>
                <div className="grid gap-x-8 relative h-full min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12">

                  {/* Title (Animated) */}
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.75, ease: "easeOut" }}
                      className="col-span-5 col-start-1 font-semibold py-4 2xl:py-3 text-[3.5rem]"
                    >
                      {title}
                    </motion.h3>
                  </AnimatePresence>

                  {/* Animated Tags */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tags}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="flex items-center gap-x-[10px] col-span-6 col-end-[-1] h-full text-[20px] justify-self-end "// start from the end

                    >
                      {tags.map((tag, index) => (
                        tag.toLowerCase() === 'github' ? (
                          <a
                            key={index}
                            href={gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border rounded-full border-[#524D47] flex px-3 py-1 transition-transform duration-250 ease-in-out hover:scale-110 active:scale-90 hover:bg-[#524D47]"
                          >
                            {tag}
                          </a>
                        ) : (
                          <span
                            key={index}
                            className="border rounded-full border-[#524D47] flex px-3 py-1"
                          >
                            {tag}
                          </span>
                        )
                      ))}
                    </motion.div>
                  </AnimatePresence>

                  {/* Content Section */}
                  <div className="flex flex-col w-full h-full col-span-5 col-start-1 text-heading gap-y-4">

                    {/* Animated Description */}
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={description}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="font-thin text-balance text-[1.25rem] pt-4 "
                      >
                        {description}
                      </motion.p>
                    </AnimatePresence>

                    {/* Animated Tech Stack */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={tech.join(",")} // Ensure key changes properly
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }} // Keep exit y-movement smaller
                        transition={{ duration: 0.75, ease: "easeInOut" }} // Make it faster for a smoother effect
                        className="pt-4 border-t border-[#524D47] relative min-h-[50px]" // Stabilize height
                      >
                        <div className="flex flex-wrap gap-x-3">
                          {tech.map((item, index) => (
                            <span className="border rounded-full border-[#524D47] flex px-3 py-1" key={index}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Buttons Positioned Bottom-Left */}
                    <div className="flex items-end justify-between h-full mt-auto gap-x-3">

                      <div className="flex items-end justify-start h-full mt-auto gap-x-3">
                        <button onClick={handlePrevious} className='border border-[#524D47] text-[18px] flex px-7 py-1 bg-[#080807] rounded-full shadow-md transition-transform duration-[0.25s] ease-in-out hover:scale-110 active:scale-90 hover:bg-[#524D47]'>
                          Prev
                        </button>
                        <button onClick={handleNext} className='border border-[#524D47] text-[18px] flex px-7 py-1 bg-[#080807] rounded-full shadow-md transition-transform duration-[0.25s] ease-in-out hover:scale-110 active:scale-90 hover:bg-[#524D47]'>
                          Next
                        </button>
                      </div>
                      <div className='relative flex items-center order-first h-fit gap-x-2 overflow-clip text-[18px] text-heading-4 leading-tighter'>
                        Page
                        <span className='h-[2px] w-6 rounded-full bg-[#524D47]'></span>
                        <AnimatePresence mode="wait">
                          <span className="relative block h-[24px] w-[24px]"> {/* Ensure stable layout */}
                            <motion.span
                              key={currentIndex} // Ensure this changes
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }} // Reduce y-movement for smoother transition
                              transition={{ duration: 1, ease: "easeInOut" }} // Shorter duration
                              className="absolute left-0 right-0"
                            >
                              {currentIndex + 1}
                            </motion.span>
                          </span>
                        </AnimatePresence>
                      </div>
                    </div>



                  </div>

                  {/* Image Section */}

                  {/* <div className="relative flex items-center justify-center w-full col-span-7 col-start-6 aspect-square overflow-hidden max-h-[600px]"> */}

                  <motion.div className="relative flex items-center justify-center w-full col-span-7 col-start-6 aspect-square overflow-hidden max-h-[600px]"
                    key={backg}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 1 }}>
                    <img className="absolute object-cover w-full h-full aspect-4/3 rounded-xl brightness-75 contrast-125"
                      src={backg}
                      alt="backg" >
                    </img>


                    <motion.div
                      key={image}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 1 }}
                      className={`z-10 w-5/6 space-y-4 rounded-lg aspect-4/3 overflow-clip 
                      ${title === 'Simplisplit' ? 'border-[#524D47] shadow-xl w-[30%] rounded-xl object-fit' : ''}`}
                    >
                      <img className="border-gray-700 rounded-lg shadow-md"
                        src={image}
                        alt={title}
                      />
                    </motion.div>
                  </motion.div>
                  {/* </div> */}

                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center '>
            <div className='text-center'>
              <div className='font-semibold text-[50px] '>
                Checkout More Projects
              </div>
              <a
                href="https://github.com/tadiday"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[35px] col-span-7 col-start-5 inline-block px-4 py-2 mt-4 font-semibold bg-[#524D47] rounded-full shadow-md transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default Project;



