import React from 'react';

const Header = ({ scrollToSection }) => {
  return (
    <header className="top-0 z-10 flex items-center justify-center rounded-full bg-black/20 h-14 backdrop-blur-sm">
      <nav className = "flex items-center justify-center p-4">
        <div className="" >
          <ul className="text-[#e4e3e1]  flex items-center gap-5 font-mono font-bold " style={{ fontSize: '20px', fontFamily: 'Roboto'}}>
            <li className='px-4 py-1 hover:rounded-full hover:bg-black/40' onClick={() => scrollToSection('home')} >Home</li>
            <li className='px-4 py-1 hover:rounded-full hover:bg-black/40' onClick={() => scrollToSection('about')}>About</li>
            <li className='px-4 py-1 hover:rounded-full hover:bg-black/40' onClick={() => scrollToSection('projects')}>Project</li>
            <li className='px-4 py-1 hover:rounded-full hover:bg-black/40' onClick={() => scrollToSection('experience')}>Work</li>
            <li className='px-4 py-1 hover:rounded-full hover:bg-black/40' onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}


export default Header;