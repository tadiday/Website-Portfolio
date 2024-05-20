import React, { useState } from 'react';
import cardIsle from '../assets/cardisle.png';
import VT from '../assets/VT.jpeg';

const Experience = ({ refProp }) => {
  const [activeButton, setActiveButton] = useState('personal');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div ref={refProp} className="h-full min-h-80 rounded-[12px] justify-center item-center">
      <div className='flex justify-center item-center text-[36px]'>Works</div>
      <div className='flex justify-center items-center text-[36px]'>
        <div className='w-[50%] flex bg-black rounded-[10px] overflow-hidden'>
          <button
            className={`w-[40%] px-10 mx-0 ${activeButton === 'personal' ? 'bg-yellow-500' : ''}`}
            onClick={() => handleButtonClick('personal')}
          >
            Personal
          </button>
          <button
            className={`w-[40%] px-10 mx-0 ${activeButton === 'professional' ? 'bg-yellow-500' : ''}`}
            onClick={() => handleButtonClick('professional')}
          >
            Professional
          </button>
          <button
            className={`w-[34%] px-10 mx-0 ${activeButton === 'academic' ? 'bg-yellow-500' : ''}`}
            onClick={() => handleButtonClick('academic')}
          >
            Academic
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center flex-col gap-5 p-4 '>
      {/* --------------------------------Academic Experience ------------------------------------ */}
        {activeButton === 'personal' && (

          <div id = "academic" className='bg-white flex rounded-[12px] w-[40%]'>
          <img className='w-[32%] rounded-[12px] object-contain' src={VT} alt='Card Isle' />
            <div className='p-4 flex flex-col gap-5 text-black'>
              <div className='grid grid-cols-2 text-[16px]'>
                <h1 className=''>Virginia Tech Computer Science</h1>
                <h2 className='text-right'>May 2023 - Present</h2>
                <h2 className=''>Undergraduate Teaching Assistant</h2>
                <h2 className='text-right'>Blacksburg, VA</h2>
              </div>
              <ul className='flex flex-col gap-2 list-disc pl-4 text-[14px]'>
                <li> Courses: CS 2505 & CS 2506 - Computer Organization I & II.</li>
                <li> Conducted office hours, providing troubleshooting support and answering questions to enhance students' understanding.</li>
                <li> Actively guided and monitored online forums and lab sessions to provide interactive learning experiences. </li>
              </ul>
            </div>
          </div>
        )}
        
        {activeButton === 'personal' && (
        <div id = "academic" className='bg-white flex rounded-[12px] w-[40%]'>
          <img className='w-[32%] rounded-[12px] object-contain' src={VT} alt='Card Isle' />
          <div className='p-4 flex flex-col gap-5 text-black'>
            <div className='grid grid-cols-2 text-[16px]'>
              <h1 className=''>Virginia Tech IDPro</h1>
              <h2 className='text-right'>Jan 2024 - May 2024</h2>
              <h2 className=''>Rural Trash Collection Research</h2>
              <h2 className='text-right'>Blacksburg, VA</h2>
            </div>
            <ul className='flex flex-col gap-2 list-disc pl-4 text-[14px]'>
              <li> Developing an automated trash collection robot, allowing the monitor/operator to work remotely.</li>
              <li> Selecting and installing sensors necessary for autonomous navigation and trash collection.</li>
              <li> Identifying and reviewing algorithms to govern path planning, obstacle avoidance, safety, and trash collection. </li>
            </ul>
          </div>
        </div>
        )}

      {activeButton === 'personal' && (
        <div id = "academic" className='bg-white flex rounded-[12px] w-[40%]'>
          <img className='w-[32%] rounded-[12px] object-contain' src={VT} alt='Card Isle' />
          <div className='p-4 flex flex-col gap-5 text-black'>
            <div className='grid grid-cols-2 text-[16px]'>
              <h1 className=''>Virginia Tech IDPro</h1>
              <h2 className='text-right'>Sep 2023 - Nov 2023</h2>
              <h2 className=''>SMART Research</h2>
              <h2 className='text-right'>Blacksburg, VA</h2>
            </div>
            <ul className='flex flex-col gap-2 list-disc pl-4 text-[14px]'>
              <li> Conducted research and successfully designed a Software Managed Arduino-based Residential Toolkit (SMART).</li>
              <li> Integrated Raspberry Pi to facilitate connectivity and optimized system functionality for an enhanced user experience.</li>
              <li> Engineered a user-friendly mobile application using Swift, enabling remote control and monitoring of smart devices.</li>
            </ul>
          </div>
        </div>
      )}

    
      {/* --------------------------------Academic Experience ------------------------------------ */}
        {activeButton === 'academic' && (

          <div id = "academic" className='bg-white flex rounded-[12px] w-[40%]'>
          <img className='w-[32%] rounded-[12px] object-contain' src={VT} alt='Card Isle' />
            <div className='p-4 flex flex-col gap-5 text-black'>
              <div className='grid grid-cols-2 text-[16px]'>
                <h1 className=''>Virginia Tech Computer Science</h1>
                <h2 className='text-right'>May 2023 - Present</h2>
                <h2 className=''>Undergraduate Teaching Assistant</h2>
                <h2 className='text-right'>Blacksburg, VA</h2>
              </div>
              <ul className='flex flex-col gap-2 list-disc pl-4 text-[14px]'>
                <li> Courses: CS 2505 & CS 2506 - Computer Organization I & II.</li>
                <li> Conducted office hours, providing troubleshooting support and answering questions to enhance students' understanding.</li>
                <li> Actively guided and monitored online forums and lab sessions to provide interactive learning experiences. </li>
              </ul>
            </div>
          </div>
        )}
        
        {activeButton === 'academic' && (
        <div id = "academic" className='bg-white flex rounded-[12px] w-[40%]'>
          <img className='w-[32%] rounded-[12px] object-contain' src={VT} alt='Card Isle' />
          <div className='p-4 flex flex-col gap-5 text-black'>
            <div className='grid grid-cols-2 text-[16px]'>
              <h1 className=''>Virginia Tech IDPro</h1>
              <h2 className='text-right'>Jan 2024 - May 2024</h2>
              <h2 className=''>Rural Trash Collection Research</h2>
              <h2 className='text-right'>Blacksburg, VA</h2>
            </div>
            <ul className='flex flex-col gap-2 list-disc pl-4 text-[14px]'>
              <li> Developing an automated trash collection robot, allowing the monitor/operator to work remotely.</li>
              <li> Selecting and installing sensors necessary for autonomous navigation and trash collection.</li>
              <li> Identifying and reviewing algorithms to govern path planning, obstacle avoidance, safety, and trash collection. </li>
            </ul>
          </div>
        </div>
        )}

      {activeButton === 'academic' && (
        <div id = "academic" className='bg-white flex rounded-[12px] w-[40%]'>
          <img className='w-[32%] rounded-[12px] object-contain' src={VT} alt='Card Isle' />
          <div className='p-4 flex flex-col gap-5 text-black'>
            <div className='grid grid-cols-2 text-[16px]'>
              <h1 className=''>Virginia Tech IDPro</h1>
              <h2 className='text-right'>Sep 2023 - Nov 2023</h2>
              <h2 className=''>SMART Research</h2>
              <h2 className='text-right'>Blacksburg, VA</h2>
            </div>
            <ul className='flex flex-col gap-2 list-disc pl-4 text-[14px]'>
              <li> Conducted research and successfully designed a Software Managed Arduino-based Residential Toolkit (SMART).</li>
              <li> Integrated Raspberry Pi to facilitate connectivity and optimized system functionality for an enhanced user experience.</li>
              <li> Engineered a user-friendly mobile application using Swift, enabling remote control and monitoring of smart devices.</li>
            </ul>
          </div>
        </div>
      )}



        {/* --------------------------------Professional Experience ------------------------------------ */}
        {activeButton === 'professional' && (
          <div id="professional" className='bg-white flex rounded-[12px] w-[40%]'>
            <img className='w-[32%] rounded-[12px] object-contain' src={cardIsle} alt='Card Isle' />
            <div className='p-4 flex flex-col gap-5 text-black'>
              <div className='grid grid-cols-2 text-[16px]'>
                <h1 className=''>Card Isle</h1>
                <h2 className='text-right'>Sep 2023 - Nov 2023</h2>
                <h2 className=''> Software Engineer Intern</h2>
                <h2 className='text-right'>Blacksburg, VA</h2>
              </div>
              <ul className='flex flex-col gap-2 list-disc pl-4 text-[14px]'>
                <li> Collaborated as a front-end development and testing intern, actively contributing to client projects.</li>
                <li> Utilized Alpine.js to craft dynamic and responsive web interfaces, enhancing user interactions and experiences.</li>
                <li> Implemented Playwright testing for a demo website to ensure functionality within a single-page layout. </li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Experience;
