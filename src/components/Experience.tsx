import {} from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const Experience = () => {
  const experiences = {
    personal: [
      {
        company: "Virginia Tech",
        date: "Aug 2021 - May 2025",
        title: "B.S. in Computer Science",
        location: "Blacksburg, VA",
        courses: `Data Structures and Algorithms, Artificial Intelligence, Database Management Systems, Web Development, Computer
          Graphics, Computer Network Architecture, Computer Systems`,
        awards:
          "Dean’s List (Fall 2022, Spring 2023, Fall 2023, Sprint 2024), Virginia Tech Merit-Based Scholarships, VT Peraton DeepRacer 2023",
        description: [
          "Courses: Data Structures and Algorithms, Artificial Intelligence, Database Management Systems, Web Development, Computer Graphics, Computer Network Architecture, Computer Systems",
          "Awards: Dean’s List (Fall 2022, Spring 2023, Fall 2023, Sprint 2024), Virginia Tech Merit-Based Scholarships, VT Peraton DeepRacer 2023",
        ],
        skills: [
          "Computer Systems",
          "Data Structure & Algorithms",
          "Computer Graphics",
          "Web Development",
          "",
        ],
        image: FaGraduationCap,
      },
    ],
    professional: [
      {
        company: "Virginia Tech",
        date: "May 2023 - May 2025",
        title: "Undergraduate Teaching Assistant",
        link: "https://cs.vt.edu/",
        location: "Blacksburg, VA",
        description: `
          Provide academic support to students by hosting office hours, troubleshooting technical issues, and offering personalized guidance.
          Facilitate interactive discussions through online forums to enhance student engagement.
          Assist in teaching Computer Organization, Computer Systems, and Comparative Languages.`,
        mobile_description: [
          "Hosting office hours, troubleshooting technical issues, and offering personalized guidance.",
          "Facilitate interactive discussions through online forums to enhance student engagement.",
          "Assist in teaching Computer Organization, Computer Systems, and Comparative Languages.",
        ],
        skills: ["C", "x86", "RISC-V", "Rust", "Haskell", "Prolog", "Ruby"],
        image: FaGraduationCap,
      },
      {
        company: "Peraton",
        date: "Aug - Dec 2024",
        title: "Software Engineer Co-op",
        link: "https://www.peraton.com/",
        location: "Blacksburg, VA",
        description: `
          Contributed to the development and maintenance of a cyber-threat intelligence platform.
          Improved system performance by enhancing build processes, resolving issues, and updating dependencies.
          Collaborated with cross-functional teams to document and address functionality improvements, ensuring a more secure and reliable platform.`,
        mobile_description: [
          "Improved a cyber-threat intelligence platform by enhancing build processes, resolving issues, and updating dependencies.",
          "Collaborated with cross-functional ensuring a more secure and reliable platform.",
        ],
        skills: ["JavaScript", "Maven", "Java", "Junit", "Docker"],
        image: MdOutlineWork,
      },
      {
        company: "Virginia Tech IDPro",
        date: "Jan - Dec 2024",
        title: "Rural Trash Collection",
        link: "https://idpro.enge.vt.edu/",
        location: "Blacksburg, VA",
        description: `
          Developed an automated trash collection robot enabling remote monitoring and operation,
          integrating essential sensors for autonomous navigation and efficient waste collection.
          Researched and implemented algorithms for path planning, obstacle avoidance, safety measures,
          and optimized trash collection to enhance functionality and reliability.`,
        mobile_description: [
          "Developed an automated trash collection robot enabling remote monitoring and operation.",
          "Researched and implemented algorithms for path planning, obstacle avoidance, safety measures, and optimized trash collection.",
        ],
        skills: ["Python", "ROS", "OpenCV", "Raspberry Pi"],
        image: FaGraduationCap,
      },
      {
        company: "Virginia Tech IDPro",
        date: "Sep - Dec 2023",
        title: "SMART Research",
        link: "https://idpro.enge.vt.edu/",
        location: "Blacksburg, VA",
        description: `
          Designed and developed a Software Managed Arduino-based Residential Toolkit (SMART) to enhance home automation,
          integrating a Raspberry Pi for improved connectivity and optimized system performance.
          Built a Swift-based mobile application to enable remote control and real-time monitoring of smart devices, ensuring a seamless and user-friendly experience.`,
        mobile_description: [
          "Designed and developed a Raspberry Pi smart home device for security and convenience.",
          "Built a Swift-based mobile application to enable remote control and real-time monitoring of smart devices",
        ],
        skills: ["Swift", "Arduino", "Raspberry Pi", "Xcode"],
        image: FaGraduationCap,
      },
      {
        company: "Card Isle",
        date: "Sep - Nov 2023",
        title: "Front-end Developer Intern",
        link: "https://cardisle.com/",
        location: "Blacksburg, VA",
        description: `
          Improved the company’s website by adding new features and enhancing UI layouts to create a more engaging user experience.
          Redesigned key interface elements such as search bars, buttons, and page structures using Alpine.js to improve usability.
          Conducted thorough testing with Playwright to ensure functionality and reliability across the platform.`,
        mobile_description: [
          "Improved the company’s website by adding new features and enhancing UI layouts to create a more engaging user experience.",
          "Redesigned key interface elements such as search bars, buttons, and page structures using Alpine.js to improve usability.",
          "Conducted thorough testing with Playwright to ensure functionality and reliability across the platform.",
        ],
        skills: ["Alpine.js", "Playwright", "Node.js", "CSS"],
        image: MdOutlineWork,
      },
    ],
  };

  const sectionTitle = "CAREER ADVENTURE";

  return (
    <section
      id="experience"
      className="h-full min-h-[500px] max-w-screen  bg-section rounded-b-3xl p-4 flex flex-col items-center z-30 text-color-section"
    >
      <div className="relative z-20 w-full overflow-x-clip">
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl">
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

            <motion.span
              className="hidden sm:flex text-[25px] font-thin text-color-section col-span-6 col-start-9"
              initial={{ opacity: 0, y: 10 }} // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              &quot;Innovating through collaboration and growths.&quot;
            </motion.span>
            <div className="h-full hidden sm:flex col-span-3 col-start-15 w-full items-center">
              <motion.div
                className="h-[1px] color-line w-full origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              />{" "}
            </div>
            <div className="hidden sm:flex h-full col-span-3 col-start-9 w-full items-center">
              <motion.div
                className="h-[1px] color-line w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
              />
            </div>
            <motion.span
              className="hidden sm:flex text-[25px] font-thin text-color-section col-span-7 col-start-12"
              initial={{ opacity: 0, y: 10 }} // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              &quot;Transforming challenges into impactful solutions.&quot;
            </motion.span>

            <div className="h-full hidden sm:flex col-span-2 col-start-9 w-full items-center">
              <motion.div
                className="h-[1px] color-line w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
              />
            </div>
            <motion.span
              className="hidden sm:flex text-[25px] font-thin text-color-section col-span-4 col-start-11 justify-center"
              initial={{ opacity: 0, y: 10 }} // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              &quot;Working smarter, not harder.&quot;
            </motion.span>

            <div className="h-full hidden sm:flex col-span-3 col-start-15 w-full items-center">
              <motion.div
                className="h-[1px] color-line w-full origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
              />
            </div>

            {/*Mobile Quotes*/}
            <motion.span
              className="flex flex-rows flex-wrap sm:hidden text-[16px] font-normal text-color-section col-span-12 col-start-1 pt-10"
              initial={{ opacity: 0, y: 10 }} // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 1.5 }}
            >
              Innovating through collaboration and growths. Work smarter not
              harder; focus on what matters.
            </motion.span>
          </div>
        </div>

        <div className="pr-[5%] pb-[10%] pl-[5%] rounded-b-3xl min-h-screen text-color-section ">
          <div className="w-full pt-16 ">
            <div className="top-0 flex py-5 flex-col bg-section border-t border-[color:var(--color-primary)] gap-y-10 sm:gap-y-4 group">
              {experiences.professional.map((job, index) => (
                <div key={"profession" + index} className="">
                  <div
                    className="justify-start gap-x-2 text-left text-[14px] md:text-[25px] sm:p-[2%]
                    font-semibold md:grid md:grid-cols-12 md:justify-between md:gap-x-4 
                    hover:shadow-md transition-all duration-300 ease-in-out hover:opacity-100 "
                  >
                    <span className="sm:col-span-3 sm:col-start-1 gap-x-5 sm:py-4">
                      <motion.div
                        initial={{ opacity: 0, x: 100 }} // Start offscreen to the right
                        whileInView={{ opacity: 1, x: 0 }} // Animate when in viewport
                        viewport={{ once: true, amount: 0.2 }} // Only animates once, triggers at 20% visibility
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="top-0 flex items-center col-span-5 col-start-1 gap-x-5 font-mono justify-between sm:justify-start sm:items-center group/title"
                      >

                        <span className="block sm:hidden  group-hover/title:text-[#967A54]">
                          {job.company}
                        </span>

                        <span className="hidden sm:flex ">
                          {job.image && (
                            <job.image className="text-[#866A44]" />
                          )}
                        </span>
                        {job.date}
                      </motion.div>
                    </span>

                    <motion.h3
                      initial={{ opacity: 0, x: 100 }} // Start offscreen to the right
                      whileInView={{ opacity: 1, x: 0 }} // Animate when in viewport
                      viewport={{ once: true, amount: 0.2 }} // Only animates once, triggers at 20% visibility
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="sm:col-span-7 sm:col-start-4 sm:py-4 sm:pl-10"
                    >
                      <a
                        className="space-x-2 group/link group/title font-mono"
                        href={job.link}
                        target="_blank"
                      >
                        <span className="inline-block group-hover/title:text-[#967A54]">
                          {job.title}
                        </span>
                        <span className="hidden sm:inline-block group-hover/title:text-[#967A54]">
                          @
                        </span>
                        <span className="hidden sm:inline-block  group-hover/title:text-[#967A54]">
                          {job.company}
                          <GoArrowUpRight
                            className="inline-block text-[#745f4e] group-hover/title:text-[#967A54]
                            transition-transform duration-300 ease-in-out group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                          />
                        </span>
                      </a>
                      <div className="flex flex-col w-full col-span-6 col-start-6 text-lg sm:gap-y-4">
                        <p className="hidden sm:flex font-thin font-mono text-[1rem] sm:text-[18px]">
                          {job.description}
                        </p>
                        <ul className="flex flex-col sm:hidden font-thin text-[14px] sm:text-[18px] list-disc pl-4 gap-y-2">
                          {job.mobile_description.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                        <div className="flex flex-col col-span-7 col-start-6 pt-4 border-gray-700 divide-y divide-gray-700">
                          <div className="flex flex-wrap items-center gap-3">
                            {job.skills.map((tech, index) => (
                              <span
                                key={index}
                                className="flex justify-center rounded-full bg-border font-mono text-[#8b8b8b] px-2 py-0.5 sm:px-3 sm:py-1 min-w-[3em] text-[0.75rem] sm:text-[18px]"
                              >
                                <span className="w-full text-center">
                                  {tech}
                                </span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, x: 100 }} // Start offscreen to the right
                      whileInView={{ opacity: 1, x: 0 }} // Animate when in viewport
                      viewport={{ once: true, amount: 0.2 }} // Only animates once, triggers at 20% visibility
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="flex flex-col w-full col-span-6 col-start-6 pl-10 text-lg gap-y-4"
                    ></motion.div>
                  </div>
                </div>
              ))}

              <div
                className="flex justify-start gap-x-2 text-left text-[25px] p-[2%]
                    font-semibold md:grid md:grid-cols-12 md:justify-between md:gap-x-4
                    hover:shadow-md transition-all duration-300 ease-in-out hover:opacity-100 group/link group/title "
              >
                <a
                  href="/assets/documents/resume.pdf"
                  target="_blank"
                  className="w-full pt-16 col-span-2 col-start-6 text-[25px]"
                >
                  <span className="inline-block group-hover/title:text-[#967A54] text-[25px] font-mono">
                    View Résumé
                  </span>
                  <GoArrowUpRight
                    className="inline-block text-[#745f4e] group-hover/title:text-[#967A54]
                          transition-transform duration-300 ease-in-out group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                  />
                    <div className="flex flex-col h-full mt-2 col-span-2 col-start-6">
                      <div className="flex flex-col h-full -mb-5">
                        <div className="w-[80%] h-[2px] color-line-2"></div>
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
    </section>
  );
};

export default Experience;
