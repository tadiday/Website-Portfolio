import React from 'react';

const Header = ({ scrollToSection }) => {
  return (
    <header className="top-0 z-10 flex items-center justify-center rounded-full h-14 bg-[#5d001e] backdrop-blur-sm">
      <nav className = "flex items-center justify-center p-4">
        <div className="" >
          <ul className="text-[#e3e2df] flex items-center gap-10 font-mono font-bold text-black" style={{ fontSize: '20px', fontFamily: 'Roboto'}}>
            <li onClick={() => scrollToSection('home')} >Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('projects')}>Project</li>
            <li onClick={() => scrollToSection('experience')}>Work</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}


export default Header;