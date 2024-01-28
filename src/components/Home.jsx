import React from 'react';
// import myImage from '../assets/me.jpg';

const Home = ({ refProp }) => {
  return (
    <div className='' ref={refProp}>
      <div className='h-[58rem] rounded-[12px] flex items-center justify-center bg-[#e3e2df]'>
        <div className="flex-row items-center justify-center text-center">
          <div className='w-full font-bold font-display text-[100px]'>
            Hi, I'm Peter.
          </div>
          <div className='text-bold font-display2 text-[36px]'>An Upcoming Software Engineer</div>
          <div>
            I'm passionate about crafting experiences that are engaging, accessible, and user-centric.
          </div>
        </div>
        {/* <img className="w-48 h-auto object-cover rounded-[12px]" src={myImage} alt="Peter Cao" /> */}
      </div>
    </div>
  );
};

export default Home;