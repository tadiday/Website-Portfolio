import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => setLocalTime(new Date().toLocaleTimeString());

    updateTime(); // Set initial value after mount
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section id='contact' className="bg-[#524D47] min-h-screen z-20">
      <div className="relative z-20 w-full overflow-x-clip">
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl">
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20 text-black'>
            <h2 className='col-span-12 col-start-5 text-[120px] font-semibold text-[#bebebe] justify-center items-center flex'>
              LET'S CONNECT
            </h2>
            {/* <h2 className='col-span-1 col-start-12 text-[120px] font-semibold'>(4)</h2> */}
            <div className="h-full flex col-span-2 col-start-6 w-full items-center"
            >
              <motion.div
                className="h-[1px] bg-[#080807] w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              />
            </div>
            <motion.span
              className="flex text-[25px] font-thin text-home col-span-6 col-start-8 justify-center"
              initial={{ opacity: 0, y: 10 }}  // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0 }}
            >
              "Great connections spark endless possibilities."
            </motion.span>
            <div className="h-full flex col-span-2 col-start-14 w-full items-center"
            >
              <motion.div
                className="h-[1px] bg-[#080807] w-full origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              />
            </div>
            {/* <div className="h-full flex col-span-3 col-start-9 w-full items-center">
              <motion.div
                className="h-[1px] bg-[#524D47] w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
              />
            </div> */}
            <motion.span
              className="flex text-[25px] font-thin text-home col-span-6 col-start-8 justify-center"
              initial={{ opacity: 0, y: 10 }}  // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              "Collaboration is the key to innovation."
            </motion.span>

            <div id="contact-container" className="w-full col-span-18 col-start-2 bg-[] text-black overflow-hidden pt-16">
              {/* <div className="flex flex-col justify-between gap-y-16 border-t border-[#080807]">
              </div> */}
              <div className="grid gap-x-4 gap-y-20 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-14 text-black pt-16">
                <div className="flex flex-col col-start-3 col-span-10 gap-6 w-full h-full p-8 bg-section rounded-3xl text-home shadow-lg">
                  <span className="w-full font-bold items-center justify-center flex">DROP ME A MESSAGE!</span>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Name & Email on the Same Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-4 w-full rounded-lg border border-[#524D47] focus:outline-none focus:border-[#967A54] focus:ring-2 focus:ring-[#967A54] focus:ring-offset-0 text-lg"

                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-4 w-full rounded-lg border border-[#524D47] focus:outline-none focus:border-[#967A54] focus:ring-2 focus:ring-[#967A54] focus:ring-offset-0 text-lg"
                        required
                      />
                    </div>

                    {/* Subject Input */}
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="p-4 w-full rounded-lg border border-[#524D47] focus:outline-none focus:border-[#967A54] focus:ring-2 focus:ring-[#967A54] focus:ring-offset-0 text-lg"
                      required
                    />

                    {/* Message Textarea */}
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="p-4 w-full h-40 rounded-lg border border-[#524D47] focus:outline-none focus:border-[#967A54] focus:ring-2 focus:ring-[#967A54] focus:ring-offset-0 text-lg"
                      required
                    ></textarea>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="bg-[#967A54] text-white py-4 rounded-lg font-semibold text-xl hover:bg-[#745f4e] transition-all duration-300 shadow-md"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="w-full col-start-1 col-span-6 font-mono">
                  <h3 className="font-bold mb-2">Information</h3>
                  <div className="h-[1px] w-full bg-[#080807] mt-2 mb-2"></div>
                  <ul className="space-y-1">
                    <div className="">{localTime}, Fairfax</div>

                    <span className="flex items-center font-bold"><FaRegCopyright className="text-base " /> &nbsp;2025 Peter Cao. All rights reserved.</span>
                    <span className="">Built with Next.js and Tailwind CSS, deployed with Vercel.</span>
                  </ul>
                </div>

                {/* Socials Section */}
                <div className="w-full col-start-7 col-span-4 font-mono">
                  <h3 className="font-bold mb-2">Socials</h3>
                  <div className="h-[1px] w-full bg-[#080807] mt-2 mb-2"></div>
                  <ul className="space-y-1">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/petercao03"
                        target="_blank"
                        className="block"
                        style={{ pointerEvents: "none" }} // Disables interaction on empty space
                      >
                        <span
                          className="hover:text-[#967A54] hover:scale-105 hover:translate-x-1 transition-transform duration-300 inline-block"
                          style={{ pointerEvents: "auto" }} // Enables interaction on the text
                        >
                          Linkedin
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/fat_cao"
                        target="_blank"
                        className="block"
                        style={{ pointerEvents: "none" }}
                      >
                        <span
                          className="hover:text-[#967A54] hover:scale-105 hover:translate-x-1 transition-transform duration-300 inline-block"
                          style={{ pointerEvents: "auto" }}
                        >
                          Instagram
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/tadiday"
                        target="_blank"
                        className="block"
                        style={{ pointerEvents: "none" }}
                      >
                        <span
                          className="hover:text-[#967A54] hover:scale-105 hover:translate-x-1 transition-transform duration-300 inline-block"
                          style={{ pointerEvents: "auto" }}
                        >
                          GitHub
                        </span>
                      </a>
                    </li>
                  </ul>

                </div>


                {/* Resources Section */}
                <div className="w-full col-start-11 col-span-4 font-mono">
                  <h3 className="font-bold mb-2">Resources</h3>
                  <div className="h-[1px] w-full bg-[#080807] mt-2 mb-2"></div>
                  <ul className="space-y-1">
                    <li>
                      <a href="/assets/documents/resume.pdf"
                        target="_blank"
                        className="hover:text-[#967A54] flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:translate-x-1 origin-left"
                      >
                        Résumé
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-full text-center text-sm flex items-center font-mono col-start-5 col-span-5">

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
