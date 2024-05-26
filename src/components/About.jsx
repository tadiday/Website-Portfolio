import React from 'react';
import myImage from '../assets/me1.jpg';
// import { FaRegLightbulb } from "react-icons/fa";
import  cloud from '../assets/cloud.avif'; // Import the background image


const About = ({ refProp }) => {
  return (
    <section ref={refProp} className="min-h-[950px] text-black relative px-[10%] pb-20" 
    style={{
      backgroundImage: `url(${cloud})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center'
    }}
    >
      <div className='h-[20%] '></div>
      <div className="font-header text-[20px] bg-red">
              <div className="font-rale bg-red">An upcoming Software Engineer</div>
      </div>
      <div className='flex flex-col w-full'>
        {/* <div className='pt-[3rem] pb-[3rem] grid grid-cols-25 grid-flow-row-dense'>  */}
          {/* <h2 className=' text-[30px] text-[#fca311] col-start-11 col-span-10'>An Upcoming Software Engineer</h2>  */}
          {/* <FaRegLightbulb className='flex justify-center item-center text-[30px] text-[#fca311] '></FaRegLightbulb> */}
        {/* </div> */}
        <div className=''>
        <h1 className="font-rale flex justify-center w-[100%] h-[70%] sm:text-[100px] md:text-[150px] lg:text-[200px] font-thin">PETER CAO</h1>
          <div id="about" class="absolute grid grid-cols-25 grid-flow-row-dense">
            <div className="font-title text-[20px] col-start-3 col-span-8">
              <p>38.7439° N, 77.2405° W</p>
              <p>Fairfax, <span className="font-rale font-[300]">V</span>irginia</p>
            </div>
            <div className='flex justify-end col-start-3 col-span-4 rounded-[20px]'>
              <div className=''>
                {/* <img className= "object-contain rounded-[10px]" src={myImage} alt="Peter Cao" /> */}
              </div>
              
            </div>
            
            <div className='col-[13_/_span_8]  px-10 py-4 rounded-[10px]'>
              {/* <h2 className='my-[26px] lg:leading-[4rem] sm:text-[20px] md:text-[30px] lg:text-[54px] font-bold'>About Me</h2>
              <h2 className='my-[26px] lg:leading-[4rem] sm:text-[20px] md:text-[30px] lg:text-[54px] font-bold'> I'm a computer science student at <a className='underline' href='https://www.vt.edu/'> Virginia Tech</a>.</h2>
              <p className='my-[26px]  sm:text-[12px] md:text-[16px] lg:text-[25px]'> I was a software engineer intern at <a className='underline' href='https://www.vt.edu/'>Card Isle</a> during Fall 2023. I am currently an undergraduate teaching assistant for<a className='underline' href='https://www.vt.edu/'> CS 2506 </a>  (Computer Organization)  
              and a researcher at <a className='underline' href='https://www.vt.edu/'> IDPro</a>.</p> */}
              {/* <p className='my-[26px] sm:text-[12px] md:text-[16px] lg:text-[40px] '> My passion for continuous learning is the driving force behind my journey.  */}
              {/* I thrive on expanding my knowledge and find joy in both sharing my insights
              with others and learning from the diverse perspectives of my peers.*/}
              {/* </p>  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
