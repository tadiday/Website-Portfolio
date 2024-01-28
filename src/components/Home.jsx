import React from 'react';
import myImage from '../assets/me.jpg';

const Home = ({ refProp }) => {
  return (
    <div className= '' ref={refProp}>
      <div className='h-[58rem] rounded-[12px] flex items-center justify-center bg-[#e3e2df]'> 
        <div className="flex-row items-center justify-center gap-5 text-center ">
          <div className = 'font-bold' style={{ fontSize: '50px', fontFamily: 'Roboto' }}>Hi, I'm Peter</div>
          <div className='text-[30px] font-bold'>A Computer Science Student</div>
          <div>I'm passionate about crafting experiences that are engaging, accessible, and user-centric.</div>
        </div>
        {/* <img className = "w-48 h-auto object-cover rounded-[12px]" src={myImage} alt="Peter Cao" /> */}
      </div>
    </div>
  );
};

export default Home;