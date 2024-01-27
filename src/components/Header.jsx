import React from 'react';

const Header = ({ scrollToSection }) => {
  return (
    <header className="top-0 w-full z-10 flex justify-center items-center">
      <nav className = "w-1/2 rounded-full h-20 bg-slate-400 flex justify-center items-center">
        <div className="backdrop-blur-sm">
          <ul className=" opacity-75 flex gap-10 items-center bg-gray text-black">
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('experience')}>Experience</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}


export default Header;