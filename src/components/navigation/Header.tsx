import React from 'react';
import { motion} from "framer-motion";
import { FaRegCopyright } from "react-icons/fa";

const Header = () => {
    return (
        <header className="h-[20%] grid grid-cols-25 items-start absolute z-50 w-full px-[10%] py-[2%]">
            {/* Left Side: Copyright */}
            <motion.div
                className="col-start-1 col-span-10 font-semibold text-[22px] flex items-center "
                initial={{ opacity: 0, y: 10, z: 10 }} // Start with invisible text
                animate={{ opacity: 1, y: 0, z: 10 }} // Fade-in after delay
                transition={{ delay: 1.25, duration: 1, ease: "easeOut" }} // Delayed fade-in
            >
                <FaRegCopyright className="flex mr-2 mt-1" /> 2025 Peter Cao
            </motion.div>

            {/* Right Side: Navigation Links */}
            <motion.ul
                className="col-end-25 col-span-6 text-[22px] flex space-x-6 font-thin text-right"
                initial={{ opacity: 0, y: 10, z: 10 }} // Start with invisible text
                animate={{ opacity: 1, y: 0, z: 10 }} // Fade-in after delay
                transition={{ delay: 1.25, duration: 1, ease: "easeOut" }} // Delayed fade-in
            >
                <li><a href="#about" className="hover:text-[#ffffff] flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:translate-x-1 origin-left">About</a></li>
                <li><a href="#projects" className="hover:text-[#ffffff] flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:translate-x-1 origin-left">Projects</a></li>
                <li><a href="#experience" className="hover:text-[#ffffff] flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:translate-x-1 origin-left">Experience</a></li>
                <li><a href="#contact" className="hover:text-[#ffffff] flex items-center gap-2 transition-transform duration-300 hover:scale-105 hover:translate-x-1 origin-left">Contact</a></li>
            </motion.ul>
        </header>
    );
}


export default Header;