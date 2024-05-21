import React from 'react';

const Header = ({ scrollToSection }) => {
  return (
    <header className="z-10 flex items-center justify-center w-full bg-[#000000] h-[10%] backdrop-blur-2xl">
      <nav className = "flex items-center justify-center p-4">
          <ul className="text-[#ffffff] text-[20px] flex items-center font-bold font-display ">
            {/* <li className='px-4 py-1 hover:rounded-full hover:bg-[#ffffff]' onClick={() => scrollToSection('home')} >Home</li> */}
            <li className='mx-5 py-[5px] px-[15px] hover:rounded-full hover:bg-[#000000]' onClick={() => scrollToSection('about')}>About</li>
            {/* <li className='mx-5 py-[5px] px-[15px] hover:rounded-full hover:bg-[#000000]' onClick={() => scrollToSection('projects')}>Project</li> */}
            <li className='mx-5 py-[5px] px-[15px] hover:rounded-full hover:bg-[#000000]' onClick={() => scrollToSection('experience')}>Work</li>
            <li className='mx-5 py-[5px] px-[15px] hover:rounded-full hover:bg-[#000000]' onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
      </nav>
    </header>
  );
}


export default Header;