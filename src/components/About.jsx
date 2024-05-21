import React from 'react';
import myImage from '../assets/me.jpg';
// import { FaRegLightbulb } from "react-icons/fa";

const About = ({ refProp }) => {
  return (
    <section ref={refProp} className=" h-full rounded-[12px] min-h-[1000px] relative px-10 pb-20">
            <div className='h-[20%]'></div>
      <div className='flex flex-col gap-5'>
      <h1 className='flex justify-start w-[70%] h-[70%] sm:text-[100px] md:text-[150px] lg:text-[200px] font-bold bg-[#ffffff] text-black rounded-[20px]'>PETER CAO</h1>
        {/* <div className='pt-[3rem] pb-[3rem] grid grid-cols-25 grid-flow-row-dense'>  */}
          {/* <h2 className=' text-[30px] text-[#fca311] col-start-11 col-span-10'>An Upcoming Software Engineer</h2>  */}
          {/* <FaRegLightbulb className='flex justify-center item-center text-[30px] text-[#fca311] '></FaRegLightbulb> */}
        {/* </div> */}
        <div className=''>
          <div id="about" class="absolute grid grid-cols-25 grid-flow-row-dense z-10 bottom-32">
            <div className='flex justify-end col-start-0 col-span-4 rounded-[20px]'>
              <div className=''>
                {/* <img className= "object-contain rounded-[20px]" src={myImage} alt="Peter Cao" /> */}
              </div>
              
            </div>
            
            <div className='col-[7_/_span_18] sm:min-w-[400px] md:min-w-[800px] lg:min-w-[1200px] px-10 py-4 bg-[#000000] text-white rounded-[20px]'>
              <h2 className='my-[26px] lg:leading-[4rem] sm:text-[20px] md:text-[30px] lg:text-[54px] font-bold'>About Me</h2>
              <h2 className='my-[26px] lg:leading-[4rem] sm:text-[20px] md:text-[30px] lg:text-[54px] font-bold'> I'm a computer science student at <a className='underline' href='https://www.vt.edu/'> Virginia Tech</a>.</h2>
              <p className='my-[26px]  sm:text-[12px] md:text-[16px] lg:text-[25px]'> I was a software engineer intern at <a className='underline' href='https://www.vt.edu/'>Card Isle</a> during Fall 2023. I am currently an undergraduate teaching assistant for<a className='underline' href='https://www.vt.edu/'> CS 2506 </a>  (Computer Organization)  
              and a researcher at <a className='underline' href='https://www.vt.edu/'> IDPro</a>.</p>
              <p className='my-[26px] sm:text-[12px] md:text-[16px] lg:text-[25px] '> My passion for continuous learning is the driving force behind my journey. I thrive on expanding my knowledge and find joy in both sharing my insights
              with others and learning from the diverse perspectives of my peers.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
