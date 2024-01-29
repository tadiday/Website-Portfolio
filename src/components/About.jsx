import React from 'react';
import myImage from '../assets/me.jpg';
const About = ({ refProp }) => {
  return (
    <div ref={refProp} className="bg-blue-100 h-[58rem] rounded-[12px]">
      <div>
      <h1 className='flex justify-center item-center font-display text-[50px] mb-5'>About</h1>
      {/* <div id="about" class="flex items-center justify-center h-full p-8 px-20 gap-10"> */}
      <div id="about" class="grid grid-cols-25 grid-flow-row-dense">
        <div className='flex justify-end col-start-4 col-span-6'>
          <img className= "w-full h-full object-contain rounded-[12px]" src={myImage} alt="Peter Cao" />
        </div>
        <div className='col-start-12 col-span-12'>
          <h2 className=''> I'm a student at Virginia Tech studying computer science. </h2>
          <p className=''> I was a software engineer intern at Card Isle during Fall 2023. I am currently an undergraduate teaching assistant for CS 2505 & CS 2506  and a researcher at IDPro.</p>
          <p className=''> I'm passionate about learning to gain more knowledge. I like to share my knowledge with others as well as learn from others.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
