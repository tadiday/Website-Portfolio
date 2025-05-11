import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const Project = () => {
  const projects = [
    {
      title: "Web-Portfolio",
      date: "2025",
      tech: [
        "React.js",
        "TypeScript",
        "Tailwind",
        "Next.js",
        "Node.js",
        "Framer Motion",
      ],
      gitHub: "https://github.com/tadiday/Website-Portfolio",
      description: `
          Built a personal portfolio website using React.js and Tailwind CSS to showcase projects, experiences, and research.`,
      image: "/assets/gif/web-port.gif",
      tags: ["Web-App", "GitHub", "2025"],
      type: "Website Application",
      backg: "/assets/background/background4.jpg",
    },
    {
      title: "Simplisplit",
      date: "2023",
      tech: ["React-Native", "Tailwind CSS", "Python", "Flask"],
      gitHub: "Private",
      description: `
          A mobile application that allows user to scan their bills and split the cost with their friends seamlessly.
          Available through the App Store.`,
      image: "/assets/gif/scan.gif",
      tags: ["Mobile", "Private", "2023"],
      type: "Mobile Application",
      backg: "/assets/background/background3.jpg",
    },
    {
      title: "Food Swipe",
      date: "2022",
      tech: [
        "React.js",
        "TypeScript",
        "Tailwind",
        "Next.js",
        "Node.js",
        "Google Map",
        "Framer Motion",
      ],
      gitHub: "http://github.com/kmsungporant/food_swipe",
      description: `
          Developed a Tinder-inspired restaurant discovery app designed to help users find the perfect dining spot.
          The app allows users to swipe right for more details on local restaurants tailored to their location.`,
      image: "/assets/gif/foodSwipe.gif",
      tags: ["Web-App", "GitHub", "2022"],
      type: "Website and Mobile Application",
      backg: "/assets/background/background5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, description, tech, image, gitHub, tags, backg } =
    projects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  };

  const sectionTitle = "SELECTED PROJECTS";

  return (
    <section
      id="projects"
      className="h-full min-h-[500px] max-w-screen  bg-[#080807] p-4 flex flex-col items-center z-30 text-[#bebebe] gpu-stable"
    >
      <div className="relative z-20 w-full overflow-x-clip">
        <div className="flex flex-col w-full">
          <div className="mx-5 sm:mx-0 grid grid-cols-12 sm:gap-x-2 md:grid md:grid-cols-20 text-home">
            {/* Section Title*/}
            <motion.h2
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Ensures animation only triggers when in view
              className="relative block overflow-hidden whitespace-nowrap col-span-12 col-start-1 md:col-span-20 md:col-start-2 w-full
              text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold justify-center"
            >
              <div>
                {/* Place Holder */}
                <motion.span
                  variants={{
                    initial: { y: 100, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="inline-block"
                >
                  {/* {sectionTitle} */}
                </motion.span>
              </div>

              {/* Animated letters */}
              <div className="sm:absolute inset-0 leading-tight">
                {sectionTitle.split(" ").map((word, i) => (
                  <span key={i} className="inline">
                    {i === 1 ? (
                      <>
                        <span className="hidden sm:inline">&nbsp;</span>
                        <br className="sm:hidden"></br>
                        {word.split("").map((l, j) => (
                          <motion.span
                            key={`${i}-${j}`}
                            variants={{
                              initial: { y: "100%", opacity: 0 },
                              visible: { y: 0, opacity: 1 },
                            }}
                            transition={{
                              duration: 0.5,
                              ease: "easeInOut",
                              delay: 0.03 * (i * 10 + j),
                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="inline-block"
                          >
                            {l}
                          </motion.span>
                        ))}
                      </>
                    ) : (
                      word.split("").map((l, j) => (
                        <motion.span
                          key={`${i}-${j}`}
                          variants={{
                            initial: { y: "100%", opacity: 0 },
                            visible: { y: 0, opacity: 1 },
                          }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.03 * (i * 10 + j),
                          }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          className="inline-block"
                        >
                          {l}
                        </motion.span>
                      ))
                    )}
                  </span>
                ))}
              </div>
            </motion.h2>

            {/* Quotes Section */}
            <motion.span
              className="hidden sm:flex font-thin text-home col-span-6 col-start-9 text-[25px]"
              initial={{ opacity: 0, y: 10 }} // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0 }}
            >
              &quot;Innovative solutions, where every detail matters.&quot;
            </motion.span>
            <div className="hiddenh-full flex col-span-3 col-start-15 w-full items-center">
              <motion.div
                className="hidden sm:flex h-[1px] bg-[#524D47] w-full origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              />
            </div>
            <div className="h-full hidden sm:flex col-span-3 col-start-9 w-full items-center">
              <motion.div
                className="h-[1px] bg-[#524D47] w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              />
            </div>
            <motion.span
              className="hidden sm:flex text-[25px] font-thin text-home col-span-6 col-start-12 justify-center"
              initial={{ opacity: 0, y: 10 }} // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              &quot;Designing with purpose, creating with passion.&quot;
            </motion.span>

            <div className="h-full hidden sm:flex col-span-1 col-start-9 w-full items-center">
              <motion.div
                className="h-[1px] bg-[#524D47] w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, delay: 2.0, ease: "easeOut" }}
              />
            </div>

            <motion.span
              className="hidden sm:flex text-[25px] font-thin text-home col-span-7 col-start-10 justify-center"
              initial={{ opacity: 0, y: 10 }} // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 1.5 }}
            >
              &quot;Each project is a step forward in my journey of
              growth.&quot;
            </motion.span>

            <div className="hidden h-full sm:flex col-span-1 col-start-17 w-full items-center">
              <motion.div
                className="h-[1px] bg-[#524D47] w-full origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, delay: 2.0, ease: "easeOut" }}
              />
            </div>

            {/*Mobile Quotes*/}
            <motion.span
              className="flex sm:hidden text-[16px] font-normal text-home col-span-12 col-start-1 justify-center text-balance pt-10"
              initial={{ opacity: 0, y: 10 }} // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0.5 }}
            >
              Each project is a step forward in my journey of growth. It been
              crafted with passion and precision.
            </motion.span>
          </div>
        </div>

        {/* With Motion and Button*/}
        <motion.div
          className="hidden sm:block pr-[5%] pb-[5%] pl-[5%] rounded-t-3xl min-h-screen"
        initial={{ opacity: 0 }} // Start with 0 opacity (invisible)
        whileInView={{ opacity: 1 }} // Fade to full opacity (visible)
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
                      {title}
                      {/* <GoArrowUpRight className='inline-block text-[#644f3e]' /> */}
                    </motion.h3>
                  </AnimatePresence>

                  {/* Animated Tags */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tags.join(",")}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="flex items-center gap-x-[10px] col-span-6 col-end-[-1] h-full text-[20px] justify-self-end " // start from the end
                    >
                      {tags.map((tag, index) =>
                        tag.toLowerCase() === "github" ? (
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
                        ),
                      )}
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
                            <span
                              className="flex px-3 py-1 rounded-full bg-border bg-button"
                              key={index}
                            >
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
                          className="relative bg-border bg-button text-[18px] flex px-7 py-1 rounded-full shadow-md cursor-pointer
                          transition-transform duration-[0.35s] ease-in-out before:absolute before:inset-0 before:bg-[#847A6F] before:rounded-full
                          before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 active:scale-90 overflow-hidden"
                        >
                          <span className="relative z-10">Prev</span>
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
                      <div className="relative flex items-center order-first h-fit gap-x-2 overflow-clip text-[18px] text-heading-4 leading-tighter">
                        Page
                        <span className="h-[2px] w-6 rounded-full bg-button"></span>
                        <AnimatePresence mode="wait">
                          <span className="relative block h-[24px] w-[24px]">
                            {" "}
                            {/* Ensure stable layout */}
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

                  <motion.div
                    className="relative flex items-center justify-center w-full col-span-7 col-start-6 aspect-square overflow-hidden max-h-[600px] "
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 3 }}
                  >
                    <Image
                      className="absolute object-cover w-full h-full rounded-xl brightness-75 contrast-125 grayscale"
                      src={backg}
                      alt="backg"
                      fill // Makes the image cover the div (equivalent to object-cover)
                      style={{ objectFit: "cover" }}
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 3 }}
                      className={`z-10 w-5/6 space-y-4 rounded-lg overflow-clip
                      ${title === "Simplisplit" ? "border-[#524D47] shadow-xl w-[30%] max-w-[250px] rounded-xl object-fit" : ""}`}
                    >
                      <Image
                        className="object-contain w-full h-auto max-w-full max-h-full border-gray-700 rounded-lg shadow-md"
                        src={image}
                        alt={title}
                        width={500}
                        height={500}
                        priority
                        unoptimized
                      // priority={title === 'Web-Portfolio'} // Load Web-Portfolio image with higher priority
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div
            className="flex border-[#524D47] justify-start gap-x-2 text-left text-[25px] p-[2%]
                    font-semibold md:grid md:grid-cols-12 md:justify-between md:gap-x-4
                    hover:shadow-md transition-all duration-300 ease-in-out hover:opacity-100 group/link group/title "
          >
            <a
              href="https://github.com/tadiday"
              target="_blank"
              className="w-full col-span-2 col-start-6 text-[25px]"
            >
              <span className="inline-block group-hover/title:text-[#967A54] text-[25px] font-mono">
                View Github
              </span>
              <GoArrowUpRight
                className="inline-block text-[#745f4e] group-hover/title:text-[#967A54]
                          transition-transform duration-300 ease-in-out group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
              />
              <div className="flex flex-col h-full mt-2 col-span-2 col-start-6">
                <div className="flex flex-col h-full -mb-5">
                  <div className=" w-[80%] h-[2px] bg-home"></div>
                </div>
                <div className="flex flex-col h-full">
                  <div className=" w-[50%] h-[2px] bg-home"></div>
                </div>
              </div>
            </a>
          </div>
        </motion.div>



        {/* Mobile Version 2*/}
        <div className="block sm:hidden pr-[5%] pb-[5%] pl-[5%] rounded-t-3xl min-h-screen">
          <div className="w-full pt-16">
            <div className="flex flex-col justify-between gap-y-10 sm:border-t sm:border-[#524D47]">
              {/* Portfolio */}
              <div className="sticky top-0 bg-[#080807] pb-[2em] flex flex-row flex-wrap gap-y-14">
                {projects.map((project, index) => (
                  <div
                    key={`mobile-${index}`}
                    className="flex flex-row flex-wrap gap-y-2"
                  >
                    <motion.div
                      className="relative flex items-center justify-center w-full aspect-square overflow-hidden max-h-[600px] gpu-stable"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        className="absolute object-cover w-full h-full rounded-xl brightness-75 contrast-125"
                        src={project.backg}
                        alt="background"
                        fill
                        priority // only first project
                        style={{ objectFit: "cover" }}
                      />

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        className={`z-10 w-8/9 space-y-4 rounded-lg overflow-clip
                      ${project.title === "Simplisplit" ? "border-[#524D47] shadow-xl w-[40%] max-w-[250px] rounded-xl object-fit" : ""}`}
                      >
                        <Image
                          className="object-contain w-full h-auto max-w-full max-h-full border-gray-700 rounded-lg shadow-md"
                          src={project.image}
                          alt={project.title}
                          width={500}
                          height={500}
                          style={{ height: "auto", width: "100%" }}
                          unoptimized
                        />
                      </motion.div>
                    </motion.div>

                    <div className="flex flex-rows flex-wrap">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="font-medium text-[0.9rem] w-full font-mono text-[#7e7e7e]"
                      >
                        {project.type}
                      </motion.h3>
                      <a href={project.gitHub}>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="font-semibold text-[1.5rem] w-full -mt-1"
                        >
                          {project.title}
                          <GoArrowUpRight
                            className="inline-block text-[#745f4e] group-hover/title:text-[#967A54]
                          transition-transform duration-300 ease-in-out group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                          />
                        </motion.h3>
                      </a>

                      <div className="flex flex-wrap gap-x-2 gap-y-3 pt-3">
                        {project.tech.map((item, index) => (
                          <span
                            className="flex px-2 py-0.5 rounded-full bg-border bg-button text-[0.75rem]"
                            key={index}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Button Section */}

                <div
                  className="flex border-[#524D47] justify-start gap-x-2 text-left text-[25px] p-[2%]
                          font-semibold md:grid md:grid-cols-12 md:justify-between md:gap-x-4
                          hover:shadow-md transition-all duration-300 ease-in-out hover:opacity-100 group/link group/title w-full "
                >
                  <a
                    href="https://github.com/tadiday"
                    target="_blank"
                    className="w-full col-span-2 col-start-6 text-[25px]"
                  >
                    <span className="inline-block group-hover/title:text-[#967A54] text-[25px] font-mono">
                      View Github
                    </span>
                    <GoArrowUpRight
                      className="inline-block text-[#745f4e] group-hover/title:text-[#967A54]
                                transition-transform duration-300 ease-in-out group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                    />
                    <div className="flex flex-col h-full mt-2 col-span-2 col-start-6">
                      <div className="flex flex-col h-full -mb-5">
                        <div className=" w-[80%] h-[2px] bg-home"></div>
                      </div>
                      <div className="flex flex-col h-full">
                        <div className=" w-[50%] h-[2px] bg-home"></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
