import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";




const Header = ({ scrollToSection }) => {
  return (
    <header className="z-10 flex items-center justify-center rounded-tl-2xl rounded-bl-2xl w-full bg-[#847A6F]">
      <nav className = "flex flex-col items-center my-4">
          <ul className="text-[20px] flex flex-col gap-y-6 items-center font-thin text-black">
            {/* <li className='px-4 py-1 hover:rounded-full hover:bg-[#ffffff]' onClick={() => scrollToSection('home')} >Home</li> */}
            <li className='py-[5px] text-white' onClick={() => scrollToSection('about')}><RiHome2Line/></li>
            <li className='py-[5px] text-white' onClick={() => scrollToSection('projects')}><IoPerson/></li>
            <li className='py-[5px] text-white' onClick={() => scrollToSection('experience')}><MdWorkOutline/></li>
            <li className='py-[5px] text-white' onClick={() => scrollToSection('contact')}><MdOutlineMailOutline/></li>
          </ul>
      </nav>
    </header>
  );
}


export default Header;