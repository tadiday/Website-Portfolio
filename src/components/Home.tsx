import React from 'react';
import {forwardRef } from "react";

// import myImage from '../assets/me.jpg';


const Home = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div className='' ref={ref}>
      <div className='h-[60rem] rounded-[12px] flex items-center justify-center'>
        <div className="flex-row items-center justify-center text-center">
          <div  className='w-full font-bold font-display text-[100px]'>
            Hi, I'm Peter.
          </div>
          <div className='text-bold font-display2 text-[36px]'>An Upcoming Software Engineer</div>
          <div>
            Under construction.
          </div>
        </div> 
      </div>
      
    </div>
    
  );
});


export default Home;