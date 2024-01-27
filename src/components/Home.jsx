import React from 'react';
import myImage from '../assets/me.jpg';

const Home = ({ refProp }) => {
  return (
    <div className='h-[58rem] rounded-[12px] bg-red-100 text-center flex flex-row gap-5 justify-center items-center'> 
      <div ref={refProp} className="">
        <div style={{ fontSize: '30px', fontFamily: 'Roboto' }}>Hi, I'm Peter</div>
        <div>Upcoming Software Engineer</div>
        <div></div>
      </div>
      <img className = "w-48 h-auto object-cover rounded-[12px]" src={myImage} alt="Peter Cao" />
    </div>
  );
};

export default Home;