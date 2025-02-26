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
          "Contributed to a cyber-threat intelligence platform for detecting attacks, managing malware, and mitigating risks.",
          "Optimized the CI/CD pipeline by updating Docker Compose configurations, reducing deployment time by 20%",
          'Diagnosed and resolved Maven build issues and Java test failures, increasing pipeline reliability by 25%.',
          'Strengthened system performance by addressing over 100+ security vulnerabilities through dependency updates.',
          'Collaborated using Agile methodologies and GitLab to document and resolve 20+ functionality issues.',
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
            {/* <div className="absolute w-1 h-full transform -translate-x-1/2 bg-gray-200 left-1/2">
          <div className="absolute -left-10 transform -translate-y-1/2 w-[85px] h-[85px] bg-white rounded-full flex items-center justify-center">
            <img className='rounded-full w-[80px] h-[80px] object-contain' src={exp.image} alt={exp.image} />
          </div>
          {index === array.length - 1 && (
            <div className="absolute -left-2 -bottom-4 transform -translate-y-1/2 w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center"> </div>
          )}
        </div>
         */}
            <div className={`flex flex-col w-[45%] min-w-[600px] min-h-[250px] ${isEven ? 'ml-auto pr-[5%]' : 'pl-[5%]'}`}>
              <div className="bg-white flex rounded-[12px] w-full relative p-4 shadow-lg">
                <div className='flex flex-col w-full gap-5 text-black'>
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
    <div id="body-exp" ref={refProp} className="h-full -mt-[20px] min-h-[500px] bg-black rounded-[20px] flex flex-col items-center z-10">

      {/* Button Group */}
      <div className="flex justify-center items-center text-[36px] my-10 pb-10">
        <div className="w-[60%] min-w-[750px] flex bg-[#e0e1dd] rounded-[10px] overflow-hidden text-black font-rale">
          <button
            className={`w-[40%] px-10 mx-0 ${activeButton === 'personal' ? 'bg-[#1b263b]' : ''}`}
            onClick={() => handleButtonClick('personal')}
          >
            Personal
          </button>
          <button
            className={`w-[40%] px-10 mx-0 ${activeButton === 'professional' ? 'bg-[#1b263b]' : ''}`}
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

      {/* Render Experiences */}
      {/* <div className="p-4">
        {renderExperiences(activeButton)}
      </div> */}

      {/* Sticky Section */}
      <div className="relative z-20 w-full bg-secondary-400 overflow-x-clip">
        <section className="p-[5%] rounded-t-3xl min-h-[2000px]">
          <div className="w-full pt-space-lg"> {/* Ensure enough scroll space */}

            {/* Sticky Element */}
            <div className='flex flex-col justify-between mt-12 gap-y-16'>
              <div class="sticky top-[calc(20vh+0em)] mb-[17.25em]">
                <div className="border-t border-t-secondary-300">

                  {/* Title */}
                  <h3 className="font-semibold text-heading-2 text-accent-400 text-[30px]">
                    Peraton, Aug 2024 - Dec 2024
                  </h3>

                  {/* Description */}
                  <ul className="flex flex-col gap-2 pl-4 list-disc ">
                    <li>Contributed to a cyber-threat intelligence platform for detecting attacks, managing malware, and mitigating risks.</li>
                    <li>Optimized the CI/CD pipeline by updating Docker Compose configurations, reducing deployment time by 20%.</li>
                    <li>Diagnosed and resolved Maven build issues and Java test failures, increasing pipeline reliability by 25%.</li>
                    <li>Strengthened system performance by addressing over 100+ security vulnerabilities through dependency updates.</li>
                    <li>Collaborated using Agile methodologies and GitLab to document and resolve 20+ functionality issues.</li>
                  </ul>


                </div>
              </div>
              <div className="sticky top-[calc(20vh+5.75em)] mb-[11.25em] bg-black">
                <div className="border-t border-t-secondary-300">

                  {/* Title */}
                  <h3 className="font-semibold text-heading-2 text-accent-400 text-[30px]">
                    Card Isle, Aug 2024 - Dec 2024
                  </h3>

                  {/* Description */}
                  <ul className="flex flex-col gap-2 pl-4 list-disc">
                    <li>experiences.</li>
                    <li>Optimized the CI/CD pipeline by updating Docker Compose configurations, reducing deployment time by 20%.</li>
                    <li>Diagnosed and resolved Maven build issues and Java test failures, increasing pipeline reliability by 25%.</li>
                    <li>Strengthened system performance by addressing over 100+ security vulnerabilities through dependency updates.</li>
                    <li>Collaborated using Agile methodologies and GitLab to document and resolve 20+ functionality issues.</li>
                  </ul>


                </div>
              </div>
              <div className="sticky top-[calc(20vh+11.5em)] mb-[5.75em] bg-secondary-400 p-5 shadow-lg z-[50] bg-black">
                <div className="border-t border-t-secondary-300">

                  {/* Title */}
                  <h3 className="font-semibold text-heading-2 text-accent-400">
                    Card Isle, Aug 2024 - Dec 2024
                  </h3>

                  {/* Description */}
                  <ul className="flex flex-col gap-2 list-disc pl-4 text-[14px]">
                    <li>experiences.</li>
                    <li>Optimized the CI/CD pipeline by updating Docker Compose configurations, reducing deployment time by 20%.</li>
                    <li>Diagnosed and resolved Maven build issues and Java test failures, increasing pipeline reliability by 25%.</li>
                    <li>Strengthened system performance by addressing over 100+ security vulnerabilities through dependency updates.</li>
                    <li>Collaborated using Agile methodologies and GitLab to document and resolve 20+ functionality issues.</li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </section>

        <section className="p-[5%] rounded-t-3xl min-h-[2000px]">


        </section>
      </div>

    </div>


  );
};

export default Experience;
