import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";


interface HeaderProps {
  scrollToSection: (section: "home" | "about" | "projects" | "experience" | "contact") => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <header className="z-10 flex items-center justify-center w-full shadow-lg rounded-tr-2xl rounded-br-2xl bg-bar">
       <nav className = "flex flex-col items-center my-4">
           <ul className="text-[20px] flex flex-col gap-y-6 items-center font-thin text-black">
            <li className='py-[5px] px-4 hover:rounded-full text-symbol hover:bg-[#847A6F]' onClick={() => scrollToSection('home')} ><RiHome2Line/></li>
            <li className='py-[5px] px-4 hover:rounded-full text-symbol hover:bg-[#847A6F]' onClick={() => scrollToSection('about')}><IoPersonOutline/></li>
            <li className='py-[5px] px-4 hover:rounded-full text-symbol hover:bg-[#847A6F]' onClick={() => scrollToSection('projects')}><IoCodeWorkingSharp/></li>
            <li className='py-[5px] px-4 hover:rounded-full text-symbol hover:bg-[#847A6F]' onClick={() => scrollToSection('experience')}><MdWorkOutline/></li>
            <li className='py-[5px] px-4 hover:rounded-full text-symbol hover:bg-[#847A6F]' onClick={() => scrollToSection('contact')}><MdOutlineMailOutline/></li>
          </ul>
      </nav>
    </header>
  );
}


export default Header;