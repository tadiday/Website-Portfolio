import React from 'react';
import { RiHome2Line } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";




const Header = ({ scrollToSection }) => {
  return (
    <header className="z-10 flex items-center justify-center w-full rounded-tl-2xl rounded-bl-2xl bg-bar">
      <nav className = "flex flex-col items-center my-4">
          <ul className="text-[20px] flex flex-col gap-y-6 items-center font-thin text-black">
            {/* <li className='px-4 py-1 hover:rounded-full hover:bg-[#ffffff]' onClick={() => scrollToSection('home')} >Home</li> */}
            <li className='py-[5px] text-symbol' onClick={() => scrollToSection('about')}><RiHome2Line/></li>
            <li className='py-[5px] text-symbol' onClick={() => scrollToSection('projects')}><IoPerson/></li>
            <li className='py-[5px] text-symbol' onClick={() => scrollToSection('experience')}><MdWorkOutline/></li>
            <li className='py-[5px] text-symbol' onClick={() => scrollToSection('contact')}><MdOutlineMailOutline/></li>
          </ul>
      </nav>
    </header>
  );
}


export default Header;