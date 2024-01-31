import React from 'react';
import myImage from '../assets/me.jpg';
import { FaRegLightbulb } from "react-icons/fa";

const About = ({ refProp }) => {
  return (
    <div ref={refProp} className=" h-fullrounded-[12px] ">
      <div>
        <div className='pt-[10rem] pb-[3rem] grid grid-cols-25 grid-flow-row-dense'> 
          <h1 className=' text-[100px] font-bold col-start-4 col-span-10'>Peter Cao</h1>
          <h2 className=' text-[30px] text-[#fca311] col-start-4 col-span-10'>An Upcoming Software Engineer</h2>
          <FaRegLightbulb className='flex justify-center item-center text-[30px] text-[#fca311] '></FaRegLightbulb>
        </div>
        <div id="about" class="grid grid-cols-25 grid-flow-row-dense mb-[75px]">
          <div className='flex justify-end col-start-4 col-span-5'>
            <img className= "w-[100%] my-[26px] object-contain rounded-[20px]" src={myImage} alt="Peter Cao" />
          </div>
          <div className='col-start-12 col-span-12 '>
            <h2 className='my-[26px] lg:leading-[4rem] sm:text-[20px] md:text-[30px] lg:text-[54px] font-bold'> I'm a computer science student at <a className='underline' href='https://www.vt.edu/'> Virginia Tech</a>.</h2>
            <p className='my-[26px] text-[25px] '> I was a software engineer intern at <a className='underline' href='https://www.vt.edu/'>Card Isle</a> during Fall 2023. I am currently an undergraduate teaching assistant for<a className='underline' href='https://www.vt.edu/'> CS 2506 </a>  (Computer Organization)  
            and a researcher at <a className='underline' href='https://www.vt.edu/'> IDPro</a>.</p>
            <p className='my-[26px] text-[25px] '> My passion for continuous learning is the driving force behind my journey. I thrive on expanding my knowledge and find joy in both sharing my insights
             with others and learning from the diverse perspectives of my peers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
