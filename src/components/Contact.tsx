import { useState, useEffect } from "react";
import { FaRegCopyright } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";


const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
  
    const form = event.currentTarget; // TypeScript now recognizes it as an HTMLFormElement
    const formData = new FormData(form);
  
    formData.append("access_key", "be249f55-0454-44a6-b6ab-d35527daa8db");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
  
    if (data.success) {
      setResult("I WILL GET IN TOUCH SOON!");
      form.reset(); // Now TypeScript allows calling reset()
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <section id='contact' className="bg-gradient-to-b from-[#524D47] to-[#080807] min-h-screen z-20 pb-[5%]">
      <div className="relative z-20 w-full overflow-x-clip">
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl">
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20 text-[#bebebe]'>
            <motion.h2
              className="col-span-12 col-start-5 text-[120px] font-semibold text-[#bebebe] justify-center items-center flex"
              initial={{ opacity: 0, y: 50 }}  // Start offscreen to the right
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true, amount: 0.1 }} // Only animates once, triggers at 20% visibility
              transition={{ duration: 0.6, delay: 0 }}
            >
              LET'S CONNECT
            </motion.h2>

            <div className="h-full flex col-span-2 col-start-6 w-full items-center">
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

            <div className="h-full flex col-span-2 col-start-14 w-full items-center">
              <motion.div
                className="h-[1px] bg-[#080807] w-full origin-right"
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
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              "Collaboration is the key to innovation."
            </motion.span>

            <div id="contact-container" className="w-full col-span-18 col-start-2 bg-[] text-black overflow-hidden pt-16">
              <div className="grid gap-x-4 gap-y-20 grid-cols-[repeat(20,minmax(0,1fr))] text-[#80776d] pt-16">
                <div className="flex flex-col col-start-4 col-span-14 gap-6 w-full h-full p-8 bg-section rounded-3xl text-home shadow-lg">
                  <span className="w-full font-bold items-center justify-center flex">DROP ME A MESSAGE!</span>

                  {/* Form Section */}
                  <form onSubmit={onSubmit} className="flex flex-col gap-6" action="https://api.web3forms.com/submit" method="POST">

                    {/* Name & Email on the Same Row */}
                    <input type="hidden" name="access_key" value="be249f55-0454-44a6-b6ab-d35527daa8db" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        // value={formData.name}
                        // onChange={handleChange}
                        className="p-4 w-full rounded-lg border border-[#524D47] focus:outline-none focus:border-[#967A54] focus:ring-2 focus:ring-[#967A54] focus:ring-offset-0 text-lg"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        // value={formData.email}
                        // onChange={handleChange}
                        className="p-4 w-full rounded-lg border border-[#524D47] focus:outline-none focus:border-[#967A54] focus:ring-2 focus:ring-[#967A54] focus:ring-offset-0 text-lg"
                        required
                      />
                    </div>

                    {/* Subject Input */}
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      // value={formData.subject}
                      // onChange={handleChange}
                      className="p-4 w-full rounded-lg border border-[#524D47] focus:outline-none focus:border-[#967A54] focus:ring-2 focus:ring-[#967A54] focus:ring-offset-0 text-lg"
                      required
                    />

                    {/* Message Textarea */}
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      // value={formData.message}
                      // onChange={handleChange}
                      className="p-4 w-full h-40 rounded-lg border border-[#524D47] focus:outline-none focus:border-[#967A54] focus:ring-2 focus:ring-[#967A54] focus:ring-offset-0 text-lg"
                      required
                    ></textarea>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="bg-[#866a44eb] py-4 rounded-lg font-semibold text-xl hover:bg-[#524D47] transition-all duration-300 shadow-md cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                  <span className="w-full font-bold items-center justify-center flex">{result}</span>
                </div>


                <div className="col-start-1 col-span-20">
                  <Footer />
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
