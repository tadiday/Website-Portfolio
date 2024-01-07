import React from 'react';
import { Link } from "react-scroll";

const Header = ({ scrollToSection }) => {
  return (
    <header className="sticky top-0">
      <nav>
        <div className="border-2 border-red-500">
          <ul className="flex gap-5 justify-end items-center bg-black text-white">
            {/* <li className="">
            <a href = '#home'>Home</a>
            </li>
            <li className="">
            <a href = '#about'>About</a>
            </li>
            <li className="">
            <a href = '#projects'>Experience</a>
            </li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
            <li className="">
            <a href = '#contact'>Contact</a>
            </li> */}
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('experience')}>Experience</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;