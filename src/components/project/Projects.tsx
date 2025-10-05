import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import ProjectImage from "@/components/project/ProjectImage";
import ProjectInfo from "@/components/project/ProjectInfo";




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
      website: "https://peter-cao.com",
      description: `
                Built a personal portfolio website using React.js and Tailwind CSS to showcase projects, experiences, and research.`,
      image: "/assets/gif/webport.mp4",
      tags: ["Web-App", "GitHub", "2025"],
      type: "Website Application - 2025",
      backg: "/assets/background/bg7.webp",
    },
    {
      title: "Traffic Dashboard",
      date: "2025",
      tech: [
        "React.js",
        "Charts.js",
        "Express.js",
        "Node.js", 
        "Docker",
        "MySQL",
      ],
      gitHub: "https://github.com/tadiday/Traffic_Dashboard",
      website: "",
      description: `
      The Traffic Visualization Dashboard, developed for the Virginia Tech Transportation Institute (VTTI), 
      enhances the usability of the Integration Traffic Simulation Tool by converting complex traffic data into clear, interactive visualizations. 
      Key features include secure user authentication, data upload, and dynamic traffic environment displays.`,
      image: "/assets/gif/traffic.mp4",
      tags: ["Web-App", "GitHub", "2025"],
      type: "Website Application - 2025",
      backg: "/assets/background/bg6.webp",
    },
    {
      title: "Simplisplit",
      date: "2024",
      tech: ["React-Native", "Tailwind CSS", "Python", "Flask"],
      gitHub: "Private",
      website: "Private",
      description: `
          A mobile application that allows user to scan their bills and split the cost with their friends seamlessly.
          Available through the App Store.`,
      image: "/assets/gif/simplisplit.mp4",
      tags: ["Mobile", "Private", "2023"],
      type: "Mobile Application - 2023",
      backg: "/assets/background/bg8.png",
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
        "Google Maps API",
        "Framer Motion",
      ],
      gitHub: "https://github.com/tadiday/Food-Swipe",
      website: "Private",
      description: `
          Developed a Tinder-inspired restaurant discovery app designed to help users find the perfect dining spot.
          The app allows users to swipe right for more details on local restaurants tailored to their location.`,
      image: "/assets/gif/foodswipe.mp4",
      tags: ["Web", "Mobile", "GitHub", "2022"],
      type: "Website Application - 2022",
      backg: "/assets/background/bg9.png",
    },
  ];


  const sectionTitle = "SELECTED PROJECTS";

  return (
    <section
      id="projects"
      className="h-full min-h-[500px] max-w-screen  bg-section flex flex-col items-center z-30 text-color-section"
    >
      <div className="relative z-20 w-full overflow-x-clip">
        <div className="flex flex-col w-full">
          <div className="mx-5 sm:mx-0 grid grid-cols-12 sm:gap-x-2 md:grid md:grid-cols-20 text-color-section">
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
              className="hidden sm:flex font-thin text-color-section col-span-6 col-start-9 text-[25px]"
              initial={{ opacity: 0, y: 10 }} // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0 }}
            >
              &quot;Innovative solutions, where every detail matters.&quot;
            </motion.span>
            <div className="hiddenh-full flex col-span-3 col-start-15 w-full items-center">
              <motion.div
                className="hidden sm:flex h-[1px] color-line w-full origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              />
            </div>
            <div className="h-full hidden sm:flex col-span-3 col-start-9 w-full items-center">
              <motion.div
                className="h-[1px] color-line w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              />
            </div>
            <motion.span
              className="hidden sm:flex text-[25px] font-thin text-color-section col-span-6 col-start-12 justify-center"
              initial={{ opacity: 0, y: 10 }} // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              &quot;Designing with purpose, creating with passion.&quot;
            </motion.span>

            <div className="h-full hidden sm:flex col-span-1 col-start-9 w-full items-center">
              <motion.div
                className="h-[1px] color-line w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, delay: 2.0, ease: "easeOut" }}
              />
            </div>

            <motion.span
              className="hidden sm:flex text-[25px] font-thin text-color-section col-span-7 col-start-10 justify-center"
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
                className="h-[1px] color-line w-full origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.75, delay: 2.0, ease: "easeOut" }}
              />
            </div>

            {/*Mobile Quotes*/}
            <motion.span
              className="flex sm:hidden text-[16px] font-normal text-color-section col-span-12 col-start-1 justify-center text-balance pt-10"
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

        <div className="hidden sm:block pr-[5%] pb-[5%] pl-[5%] rounded-t-3xl min-h-screen">
          <div className="w-full pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 border-t border-[#524D47] p-5">
              <div className="relative col-span-5 px-[5%]">

                {projects.map((project, index) => (
                  <ProjectInfo key={index} project={project} />
                ))}
              </div>


              {/* Project Image */}
              <div className="relative col-span-7 rounded-xl">
                {projects.map((project, index) => (
                  <ProjectImage key={index} project={project} />
                ))}

              </div>
            </div>

          </div>


          {/* Button Section */}

          <div
            className="flex border-[#524D47] justify-start gap-x-2 text-left text-[25px] p-[10%]
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
                  <div className=" w-[80%] h-[2px] color-line-2"></div>
                </div>
                <div className="flex flex-col h-full">
                  <div className=" w-[50%] h-[2px] color-line-2"></div>
                </div>
              </div>
            </a>
          </div>

        </div>



        {/* Mobile Section */}
        <div className="block sm:hidden pr-[5%] pb-[5%] pl-[5%] rounded-t-3xl min-h-screen">
          <div className="w-full pt-16">
            <div className="flex flex-col justify-between gap-y-10 sm:border-t sm:border-[#524D47]">
              {/* Portfolio */}
              <div className="sticky top-0 bg-section pb-[2em] flex flex-row flex-wrap gap-y-14">
                {projects.map((project, index) => (
                  <div
                    key={`mobile-${index}`}
                    className="flex flex-row flex-wrap gap-y-2"
                  >
                    <motion.div
                      className="relative flex items-center justify-center w-full aspect-square overflow-hidden max-h-[600px]"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      <div className="absolute inset-0 z-0 rounded-md overflow-hidden">
                        <Image
                          className="object-cover w-full h-full brightness-100 contrast-90 "
                          src={project.backg}
                          alt="background"
                          fill
                          priority
                          style={{ objectFit: "cover" }}
                        />
                        <div className="absolute inset-0 bg-striped-lines opacity-5"></div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        className={`z-10 m-2 p-1 space-y-4 rounded-md overflow-clip bg-white/50 backdrop-blur-sm
                      ${project.title === "Simplisplit" ? "border-[#524D47] shadow-xl w-[40%] max-w-[250px] rounded-md object-fit" : ""}`}
                      >
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="object-contain w-full h-auto max-w-full max-h-full border-gray-700 rounded-sm shadow-md"
                        >
                          <source src={project.image} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
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
                            className="flex px-2 py-0.5 rounded-full bg-border text-[0.80rem] font-mono font-medium"
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
                        <div className=" w-[80%] h-[2px] color-line-2"></div>
                      </div>
                      <div className="flex flex-col h-full">
                        <div className=" w-[50%] h-[2px] color-line-2"></div>
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
