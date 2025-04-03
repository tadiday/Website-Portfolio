import { useState, useEffect, useMemo } from "react";
// import WebPortfolioMP4 from '../assets/gif/web-port2.mp4';
// import FoodSwipe from '../assets/gif/foodSwipe.gif';
// import Background2 from '../assets/background/background2-bw.jpeg';
// import Background1 from '../assets/background/background3-bw.jpg';
// import Background3 from '../assets/background/background1-bw.jpg';
// import SimPliSplitGif from '../assets/gif/scan.gif';
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { FaPenNib } from "react-icons/fa";



const Project = (() => {


  const projects = [
    {
      title: 'Web-Portfolio',
      date: '2025',
      tech: ['React.js', 'TypeScript', 'Tailwind', 'Next.js', 'Framer Motion'],
      gitHub: 'https://github.com/tadiday/Website-Portfolio',
      description: `
          Built a personal portfolio website using React.js and Tailwind CSS to showcase projects, experiences, and research.`,
      image: '../assets/gif/web-port2.mp4',
      tags: ['Web-App', 'GitHub', '2025'],
      backg: '../assets/background/background1.jpg',
    },
    {
      title: 'Simplisplit',
      date: '2023',
      tech: ['React-Native', 'Tailwind CSS', 'Python', 'Flask'],
      gitHub: 'Private',
      description: `
          A mobile application that allows user to scan their bills and split the cost with their friends seamlessly. 
          Available through the App Store.`,
      image: '../assets/gif/scan.gif',
      tags: ['Mobile', 'Private', '2023'],
      backg: '../assets/background/background3.jpg',
    },
    {
      title: 'Food Swipe',
      date: '2022',
      tech: ['React.js', 'TypeScript', 'Tailwind', 'Next.js', 'Framer Motion'],
      gitHub: 'http://github.com/kmsungporant/food_swipe',
      description: `
          Developed a Tinder-inspired restaurant discovery app designed to help users find the perfect dining spot. 
          The app allows users to swipe right for more details on local restaurants tailored to their location.`,
      image: '../assets/gif/foodSwipe.gif',
      tags: ['Web-App', 'GitHub', '2022'],
      backg: '../assets/background/background2-bw.jpeg',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description, tech, image, gitHub, tags, backg } = useMemo(() => projects[currentIndex], [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };



  const sectionTitle = "SELECTED PROJECTS";

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
    <section id='projects' className="h-full bg-[#080807] p-4 z-30  text-[#bebebe]">
      < div className="relative z-20 w-full overflow-x-clip" >
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20 text-home' >
            {/* Section Title*/}
            <motion.h2
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3, }} // Ensures animation only triggers when in view
              className="relative block overflow-hidden whitespace-nowrap col-span-20 col-start-2 w-full text-[120px] font-bold justify-center"
            >
              <div>
                {/* Place Holder */}
                <motion.span
                  variants={{ initial: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, }}
                  className="inline-block"
                >
                  {/* {sectionTitle} */}
                </motion.span>
              </div>

              {/* Animated letters */}
              <div className="absolute inset-0">
                {sectionTitle.split("").map((l, i) => (
                  <motion.span
                    key={i}
                    variants={{ initial: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.03 * i }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="inline-block"
                  >
                    {l === " " ? "\u00A0" : l} {/* Keeps spaces visible */}
                  </motion.span>
                ))}
              </div>
            </motion.h2>

            {/* Quotes Section */}
            <motion.span
              className="text-[25px] font-thin text-home col-span-6 col-start-9"
              initial={{ opacity: 0, y: 10 }}  // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0 }}
            >
              "Innovative solutions, where every detail matters."
            </motion.span>
            <div className="h-full flex col-span-3 col-start-15 w-full items-center"
            >
              <motion.div
                className="h-[1px] bg-[#524D47] w-full origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              />
            </div>
            <div className="h-full flex col-span-3 col-start-9 w-full items-center">
              <motion.div
                className="h-[1px] bg-[#524D47] w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              />
            </div>
            <motion.span
              className="flex text-[25px] font-thin text-home col-span-6 col-start-12 justify-center"
              initial={{ opacity: 0, y: 10 }}  // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              "Designing with purpose, creating with passion."
            </motion.span>


            <div className="h-full flex col-span-1 col-start-9 w-full items-center">
              <motion.div
                className="h-[1px] bg-[#524D47] w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, delay: 2.0, ease: "easeOut" }}
              />
            </div>

            <motion.span
              className="flex text-[25px] font-thin text-home col-span-7 col-start-10 justify-center"
              initial={{ opacity: 0, y: 10 }}  // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 1.5 }}
            >
              "Each project is a step forward in my journey of growth."
            </motion.span>

            <div className="h-full flex col-span-1 col-start-17 w-full items-center">
              <motion.div
                className="h-[1px] bg-[#524D47] w-full origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, delay: 2.0, ease: "easeOut" }}
              />
            </div>

          </div>
        </div>


        {/* With Motion and Button*/}
        <motion.div
          className="pr-[5%] pb-[5%] pl-[5%] rounded-t-3xl min-h-screen"
          initial={{ opacity: 0 }}  // Start with 0 opacity (invisible)
          whileInView={{ opacity: 1 }}  // Fade to full opacity (visible)
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
        >
          <div className="w-full pt-16">
            <div className="flex flex-col justify-between gap-y-16 border-t border-[#524D47]">
              {/* Portfolio */}
              <div className="sticky top-0 bg-[#080807] pb-[10em]">

                <div className="grid gap-x-8 relative h-full min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12">

                  <div className="h-full flex col-span-full col-start-1 w-full items-center">
                    <motion.div
                      className="w-full origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    />
                  </div>

                  {/* Title (Animated) */}
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="col-span-5 col-start-1 font-semibold py-4 2xl:py-3 text-[3.5rem] "
                    >
                      {title}<GoArrowUpRight className='inline-block text-[#644f3e]' />
                    </motion.h3>
                  </AnimatePresence>

                  {/* Animated Tags */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tags.join(',')}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="flex items-center gap-x-[10px] col-span-6 col-end-[-1] h-full text-[20px] justify-self-end "// start from the end

                    >
                      {tags.map((tag, index) => (
                        tag.toLowerCase() === 'github' ? (
                          <a
                            key={index}
                            href={gitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border rounded-full border-[#524D47] bg-button flex px-3 py-1 transition-transform duration-250 ease-in-out hover:scale-110 active:scale-90 hover:bg-[#847A6F]"
                          >
                            {tag}
                          </a>
                        ) : (
                          <span
                            key={index}
                            className="border rounded-full bg-button border-[#524D47] flex px-3 py-1 justify-center items-center"
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
                        transition={{ duration: 1, ease: "easeInOut" }}
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
                        transition={{ duration: 1, ease: "easeInOut" }} // Make it faster for a smoother effect
                        className="pt-4  bg-line relative min-h-[50px]" // Stabilize height
                      >
                        <div className="flex flex-wrap gap-x-3 gap-y-3">
                          {tech.map((item, index) => (
                            <span className="flex px-3 py-1 rounded-full bg-border bg-button" key={index}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Buttons Positioned Bottom-Left */}
                    <div className="flex items-end justify-between h-full mt-auto gap-x-3">

                      <div className="flex items-end justify-start h-full mt-auto gap-x-3">
                        <button
                          onClick={handlePrevious}
                          className='relative bg-border bg-button text-[18px] flex px-7 py-1 rounded-full shadow-md cursor-pointer
                          transition-transform duration-[0.35s] ease-in-out before:absolute before:inset-0 before:bg-[#847A6F] before:rounded-full 
                          before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 active:scale-90 overflow-hidden'>
                          <span className='relative z-10'>Prev</span>
                        </button>
                        <button
                          onClick={handleNext}
                          className="relative bg-border bg-button text-[18px] flex px-7 py-1 rounded-full shadow-md cursor-pointer
                          transition-transform duration-[0.35s] ease-in-out before:absolute before:inset-0 before:bg-[#847A6F] before:rounded-full 
                          before:scale-x-0 before:origin-right before:transition-transform before:duration-[0.35s] hover:before:scale-x-100 active:scale-90 overflow-hidden"
                        >
                          <span className="relative z-10">Next</span>
                        </button>
                      </div>
                      <div className='relative flex items-center order-first h-fit gap-x-2 overflow-clip text-[18px] text-heading-4 leading-tighter'>
                        Page
                        <span className='h-[2px] w-6 rounded-full bg-button'></span>
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

                  <motion.div className="relative flex items-center justify-center w-full col-span-7 col-start-6 aspect-square overflow-hidden max-h-[600px]"
                    key={backg}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 3}}>
                    <img className="absolute object-cover w-full h-full rounded-xl brightness-75 contrast-125 grayscale"
                      src={backg}
                      alt="backg" >
                    </img>


                    <motion.div
                      key={image}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 3 }}
                      className={`z-10 w-5/6 space-y-4 rounded-lg overflow-clip 
                      ${title === 'Simplisplit' ? 'border-[#524D47] shadow-xl w-[30%] max-w-[250px] rounded-xl object-fit' : ''}`}
                    >
                      {title === 'Web-Portfolio' ?
                        <video
                          className="object-contain w-full h-auto max-w-full max-h-full border-gray-700 rounded-lg shadow-md"
                          src={image}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                        :
                        <img
                          className="object-contain w-full h-auto max-w-full max-h-full border-gray-700 rounded-lg shadow-md"
                          src={image}
                          alt={title} />
                      }

                    </motion.div>
                  </motion.div>

                </div>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex border-[#524D47] justify-start gap-x-2 text-left text-[25px] p-[2%] 
                    font-semibold md:grid md:grid-cols-12 md:justify-between md:gap-x-4
                    hover:shadow-md transition-all duration-300 ease-in-out hover:opacity-100 group/link group/title ">
            <a href="https://github.com/tadiday"
              target="_blank"
              className="w-full col-span-2 col-start-6 text-[25px]">
              <span className="inline-block group-hover/title:text-[#967A54] text-[25px] font-mono">View Github</span>
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
        </motion.div>


      </div>
    </section>
  );
});

export default Project;



