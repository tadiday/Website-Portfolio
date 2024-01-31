import React from 'react';
import cardIsle from '../assets/cardisle.png';
import VT from '../assets/VT.jpeg';


const Experience = ({ refProp }) => {
  return (
    <div ref={refProp} className="h-full rounded-[12px] justify-center item-center">
      <div className='flex justify-center item-center'>Works</div>
      <div className='flex justify-center items-center flex-col gap-5 p-4 '>
        <div className='bg-white flex rounded-[12px] w-[70%]'>
          <img className= 'w-[32%] rounded-[12px] object-contain' src={VT} alt = 'Card Isle'/>
          <div className= 'p-4 flex flex-col gap-5'>
            <div className='grid grid-cols-2 text-[18px]'>
              <h1 className=''>Virginia Tech IDPro</h1>
              <h2 className='text-right'>Jan 2024 - Present</h2>
              <h2 className=''>Rural Trash Collection Research</h2>
              <h2 className='text-right'>Blacksburg, VA</h2>
            </div>
            <ul className='flex flex-col gap-2 list-disc pl-4'>
              <li> Developing an automated trash collection robot, allowing the monitor/operator to work remotely.</li>
              <li> Selecting and installing sensors necessary for autonomous navigation and trash collection.</li>
              <li> Identifying and reviewing algorithms to govern path planning, obstacle avoidance, safety, and trash collection. </li>
            </ul>
          </div>
        </div>

        <div className='bg-white flex rounded-[12px] w-[70%]'>
          <img className= 'w-[32%] rounded-[12px] object-contain' src={VT} alt = 'Card Isle'/>
          <div className= 'p-4 flex flex-col gap-5'>
            <div className='grid grid-cols-2 text-[18px]'>
              <h1 className=''>Virginia Tech Computer Science</h1>
              <h2 className='text-right'>May 2023 - Present</h2>
              <h2 className=''>Undergraduate Teaching Assistant</h2>
              <h2 className='text-right'>Blacksburg, VA</h2>
            </div>
            <ul className='flex flex-col gap-2 list-disc pl-4'>
              <li> Courses: CS 2505 & CS 2506 - Computer Organization I & II.</li>
              <li> Conducted office hours, providing troubleshooting support and answering questions to enhance students' understanding.</li>
              <li> Actively guided and monitored online forums and lab sessions to provide interactive learning experiences. </li>
            </ul>
          </div>
        </div>

        <div className='bg-white flex rounded-[12px] w-[70%]'>
          <img className= 'w-[32%] rounded-[12px] object-contain' src={VT} alt = 'Card Isle'/>
          <div className= 'p-4 flex flex-col gap-5'>
            <div className='grid grid-cols-2 text-[18px]'>
              <h1 className=''>Virginia Tech IDPro</h1>
              <h2 className='text-right'>Sep 2023 - Nov 2023</h2>
              <h2 className=''>SMART Research</h2>
              <h2 className='text-right'>Blacksburg, VA</h2>
            </div>
            <ul className='flex flex-col gap-2 list-disc pl-4'>
              <li> Conducted research and successfully designed a Software Managed Arduino-based Residential Toolkit (SMART).</li>
              <li> Integrated Raspberry Pi to facilitate connectivity and optimized system functionality for an enhanced user experience.</li>
              <li> Engineered a user-friendly mobile application using Swift, enabling remote control and monitoring of smart devices.</li>    
            </ul>
          </div>
        </div>

        <div className='bg-white flex rounded-[12px] w-[70%]'>
          <img className= 'w-[32%] rounded-[12px] object-contain' src={cardIsle} alt = 'Card Isle'/>
          <div className= 'p-4 flex flex-col gap-5'>
            <div className='grid grid-cols-2 text-[18px]'>
              <h1 className=''>Card Isle</h1>
              <h2 className='text-right'>Sep 2023 - Nov 2023</h2>
              <h2 className=''> Software Engineer Intern</h2>
              <h2 className='text-right'>Blacksburg, VA</h2>
            </div>
            <ul className='flex flex-col gap-2 list-disc pl-4'>
              <li> Collaborated as a front-end development and testing intern, actively contributing to client projects.</li>
              <li> Utilized Alpine.js to craft dynamic and responsive web interfaces, enhancing user interactions and experiences.</li>
              <li> Implemented Playwright testing for a demo website to ensure functionality within a single-page layout. </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;