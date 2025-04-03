import { motion} from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";


const About = (() => {

  const sectionTitle = "WHO AM I?";

  return (
    <section id='about' className="h-full rounded-t-[25px] bg-[#080807] p-4 z-30  text-[#bebebe]">
      <div className="relative z-20 w-full overflow-x-clip">
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20 text-home'>
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
                    viewport={{ once: true, amount: 0.3, }}
                    className="inline-block"
                  >
                    {l === " " ? "\u00A0" : l} {/* Keeps spaces visible */}
                  </motion.span>
                ))}
              </div>
            </motion.h2>

            {/* Quotes Section */}
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

          {/* Content Section */}
          <div className='pr-[5%] pb-[5%] pl-[5%] rounded-b-3xl min-h-screen text-home '>
            <div className="w-full pt-16">
              <div className="flex flex-col justify-between gap-y-16 border-t border-[#524D47]">
                <div className="grid gap-x-8 relative h-full min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-16 ">

                  {/* Image Section: TODO: Animation*/}
                  <motion.div
                    className="object-contain w-full shadow-md grayscale col-span-5 col-start-1 py-4 pl-2 hover:grayscale-0 hover:scale-105 duration-[0.5s]"
                    initial={{ opacity: 0 }}  // Start with invisible container
                    animate={{ opacity: 1 }}  // Fade in the container
                    transition={{ duration: 1 }} // Fade-in duration
                  >
                    <motion.img
                      className="object-contain w-full border-gray-700 rounded-2xl shadow-md overflow-hidden"
                      src="../assets/me/me2.avif"
                      alt="Example"
                      initial={{ clipPath: "inset(0 0 100% 0)" }}  // Initially, hide the image by clipping it from the bottom
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      whileInView={{ clipPath: "inset(0 0 0 0)" }}  // Always animate when in view
                      viewport={{ once: true }}  // Trigger animation once when image is in view
                      width={500}  // Specify width
                      height={500}  // Specify height
                    />
                  </motion.div>

                  {/* Text Section */}
                  <motion.div
                    className='flex flex-col col-span-10 col-start-7 text-[20px] font-thin gap-y-10 py-4'
                    initial={{ opacity: 0, y: 10, z: 10 }}
                    whileInView={{ opacity: 1, y: 0, z: 10 }}
                    viewport={{ once: true }}
                    transition={{duration: 1.5, ease: "easeOut" }}>

                    {/* Introduction Section */}
                    <p className="text-[30px] text-balance font-light">
                      With a passion for full-stack development, I specialize in creating user-friendly front-end designs and integrating them with robust back-end systems,
                      combining creativity and technical expertise to deliver impactful user experiences.
                    </p>

                    {/* About Section */}
                    <div className="flex flex-col gap-x-10 gap-y-space-sm lg:flex-row text-[20px]">
                      <span className='flex h-fit overflow-clip font-mono tracking-mono flex-grow max-w-[150px]'>
                        <span className="h-full text-nowrap">(About Me)</span>
                      </span>
                      <p className="max-w-[40ch] text-balance">
                        I’m a Computer Science student at Virginia Tech, graduating May 2025. I’ve contributed to projects involving optimizing systems,
                        automation tools, and user interfaces allowing me to build well-rounded solutions and collaborating across development areas.
                      </p>
                    </div>

                    {/* Hobbies Section */}
                    <div className="flex flex-col gap-x-10 gap-y-space-sm lg:flex-row ">
                      <span className='flex h-fit overflow-clip font-mono tracking-mono flex-grow max-w-[150px]'>
                        <span className="h-full text-nowrap ">(Hobbies)</span>
                      </span>
                      <p className="max-w-[40ch] text-balance">
                        When I’m not coding, I like to play games and watch anime, as well as I enjoy try new restaurants and cooking.
                        I also love to travel and currently have (Seattle, Miami, Austin, and Las Vegas) on my bucket travel list.
                      </p>
                    </div>

                  </motion.div>
                </div>
              </div>
            </div>

            {/* Button Section */}
            <div className="flex border-[#524D47] justify-start gap-x-2 text-left text-[25px] p-[2%] 
                    font-semibold md:grid md:grid-cols-12 md:justify-between md:gap-x-4
                    hover:shadow-md transition-all duration-300 ease-in-out hover:opacity-100 group/link group/title ">
              <a href="/assets/documents/resume.pdf"
                target="_blank"
                className="w-full pt-16 col-span-2 col-start-6 text-[25px] font-mono">
                <span className="inline-block group-hover/title:text-[#967A54] text-[25px] ">View Vlog</span>
                <GoArrowUpRight className='inline-block text-[#745f4e] group-hover/title:text-[#967A54] 
                          transition-transform duration-300 ease-in-out group-hover/link:-translate-y-1 group-hover/link:translate-x-1' />

                {/* Animated underline */}
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
    </section>
  );
});

export default About;
