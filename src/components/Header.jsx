import React from 'react';

const Header = ({ scrollToSection }) => {
  return (
    <header className="top-0">
      <nav>
        <div className="px-2">
          <ul className="h-9 rounded-[12px] bg-slate-200 flex gap-5 justify-center items-center bg-gray text-black">
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