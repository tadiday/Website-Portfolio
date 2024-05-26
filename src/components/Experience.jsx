import React, { useState } from 'react';
import cardIsle from '../assets/cardisle.png';
import VT from '../assets/VT.jpeg';
import Peraton from '../assets/peraton.png';


const Experience = ({ refProp }) => {
  const [activeButton, setActiveButton] = useState('professional');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const experiences = {
    personal: [
      {
        title: 'Virginia Tech',
        date: 'Aug 2021 - May 2025',
        role: 'Bachelor of Science in Computer Science',
        location: 'Blacksburg, VA',
        description: [
          'Courses: ',
          'Awards:'
        ],
        image: VT
      },
    ],
    academic: [
      {
        title: 'Virginia Tech Department of Computer Science',
        date: 'May 2023 - Present',
        role: 'Undergraduate Teaching Assistant',
        location: 'Blacksburg, VA',
        description: [
          'Courses: CS 2505 & CS 2506 - Computer Organization I & II.',
          'Conducted office hours, providing troubleshooting support and answering questions to enhance students\' understanding.',
          'Actively guided and monitored online forums and lab sessions to provide interactive learning experiences.'
        ],
        image: VT
      },
      {
        title: 'Virginia Tech IDPro',
        date: 'Jan 2024 - May 2024',
        role: 'Rural Trash Collection Research',
        location: 'Blacksburg, VA',
        description: [
          'Developing an automated trash collection robot, allowing the monitor/operator to work remotely.',
          'Selecting and installing sensors necessary for autonomous navigation and trash collection.',
          'Identifying and reviewing algorithms to govern path planning, obstacle avoidance, safety, and trash collection.'
        ],
        image: VT
      },
      {
        title: 'Virginia Tech IDPro',
        date: 'Sep 2023 - Nov 2023',
        role: 'SMART Research',
        location: 'Blacksburg, VA',
        description: [
          'Conducted research and successfully designed a Software Managed Arduino-based Residential Toolkit (SMART).',
          'Integrated Raspberry Pi to facilitate connectivity and optimized system functionality for an enhanced user experience.',
          'Engineered a user-friendly mobile application using Swift, enabling remote control and monitoring of smart devices.'
        ],
        image: VT
      }
    ],
    professional: [
      {
        title: 'Peraton',
        date: 'Fall 2024',
        role: 'Software Engineer Intern',
        location: 'Blacksburg, VA',
        description: [
          'Incoming intern Fall 2024.',

        ],
        image: Peraton
      },
      {
        title: 'Card Isle',
        date: 'Sep 2023 - Nov 2023',
        role: 'Software Engineer Intern',
        location: 'Blacksburg, VA',
        description: [
          'Collaborated as a front-end development and testing intern, actively contributing to client projects.',
          'Utilized Alpine.js to craft dynamic and responsive web interfaces, enhancing user interactions and experiences.',
          'Implemented Playwright testing for a demo website to ensure functionality within a single-page layout.'
        ],
        image: cardIsle
      },

    ]
  };

const renderExperiences = (category) => {
  return experiences[category].map((exp, index, array) => {
    const isEven = index % 2 === 0;
    const alignmentClass = isEven ? 'justify-end' : 'justify-start';

    return (
      <div key={index} className={`flex w-full  ${alignmentClass}`}>
        <div className="relative w-full mx-4">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full">
          <div className="absolute -left-10 transform -translate-y-1/2 w-[85px] h-[85px] bg-white rounded-full flex items-center justify-center">
            <img className='rounded-full w-[80px] h-[80px] object-contain' src={exp.image} alt={exp.image} />
          </div>
          {index === array.length - 1 && (
            <div className="absolute -left-2 -bottom-4 transform -translate-y-1/2 w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center"> </div>
          )}
        </div>
          <div className={`flex flex-col w-[45%] min-w-[600px] min-h-[250px] ${isEven ? 'ml-auto pr-[5%]' : 'pl-[5%]'}`}>
            <div className="bg-white flex rounded-[12px] w-full relative p-4 shadow-lg">
              <div className='flex flex-col gap-5 text-black w-full'>
                <div className='grid grid-cols-2 text-[16px] font-bold'>
                  <h1>{exp.title}</h1>
                  <h2 className='text-right'>{exp.date}</h2>
                  <h2>{exp.role}</h2>
                  <h2 className='text-right'>{exp.location}</h2>
                </div>
                <ul className='flex flex-col gap-2 list-disc pl-4 text-[14px]'>
                  {exp.description.map((desc, i) => <li key={i}>{desc}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};



  return (
    <div id="body-exp" ref={refProp} className="h-full -mt-[20px] min-h-[1000px] bg-black rounded-[20px] justify-center item-center z-10"
    
    >
      {/* <div className='flex justify-center item-center text-[36px]'>Works</div> */}
      <div className='flex justify-center items-centeuur text-[36px] my-10 pb-10'>
        <div className='w-[60%]  min-w-[750px] flex bg-[#e0e1dd] rounded-[10px] overflow-hidden text-black font-rale'>
          <button
            className={`w-[40%] px-10 mx-0 ${activeButton === 'personal' ? 'bg-[#1b263b]  ' : ''}`}
            onClick={() => handleButtonClick('personal')}
          >
            Personal
          </button>
          <button
            className={`w-[40%] px-10 mx-0 ${activeButton === 'professional' ? 'bbg-[#1b263b]' : ''}`}
            onClick={() => handleButtonClick('professional')}
          >
            Professional
          </button>
          <button
            className={`w-[34%] px-10 mx-0 ${activeButton === 'academic' ? 'bg-[#1b263b]' : ''}`}
            onClick={() => handleButtonClick('academic')}
          >
            Academic
          </button>
        </div>
      </div>
      <div className=' p-4'>
        {renderExperiences(activeButton)}
      </div>

      <div className='flex justify-center items-center flex-col gap-5 p-4 '>
      {/* --------------------------------Personal Experience ------------------------------------ */}
        {/* {activeButton === 'personal' && (

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
      )} */}

    
      {/* --------------------------------Academic Experience ------------------------------------ */}
        {/* {activeButton === 'academic' && (
          
        <div className='w-full flex justify-center'>
        <div className='leading-3  '>

        </div>

        <div id = "left "className="bg-white flex rounded-[12px] p-4  w-[45%]  min-w-[700px] shadow-lg">
          <img className='w-[32%] rounded-[12px]' src={VT} alt='Card Isle' />
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
          </div>
            
            
        )}
        
        {activeButton === 'academic' && (
        <div className="bg-white flex rounded-[12px] p-4  w-[45%]  min-w-[700px] shadow-lg">
        <img className='w-[32%] rounded-[12px]' src={VT} alt='Card Isle' />
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
        <div className="bg-white flex rounded-[12px] p-4  w-[45%]  min-w-[700px] shadow-lg">
        <img className='w-[32%] rounded-[12px]' src={VT} alt='Card Isle' />
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
        {/* {activeButton === 'professional' && (
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
        )} */}

      </div>
    </div>
  );
};

export default Experience;
