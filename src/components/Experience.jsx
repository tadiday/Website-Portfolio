import React, { useState } from 'react';
import cardIsle from '../assets/company/cardisle.png';
import VT from '../assets/company/VT.jpg';
import Peraton from '../assets/company/peraton1.jpg';


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
    <div id="body-exp" ref={refProp} className="h-full min-h-[500px] bg-[#080807] rounded-b-[25px] flex flex-col items-center z-10">
      {/* Button Group */}
      {/* <div className="flex justify-center items-center text-[36px] my-10 pb-10">
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
      </div> */}

      {/* Render Experiences */}
      {/* <div className="p-4">
        {renderExperiences(activeButton)}
      </div> */}

      {/* Sticky Section */}



      <div className="relative z-20 w-full bg-secondary-400 overflow-x-clip">
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20' >
            <h2 className='col-span-10 col-start-2 text-[100px] font-semibold'>
              EXPERIENCE
            </h2>
          </div>
        </div>

        {/* <section className="pr-[5%] pb-[5%] pl-[5%] rounded-t-3xl min-h-[2000px]">
          <div className="w-full pt-16">
            <div className="flex flex-col justify-between mt-12 gap-y-16">

              <div className="sticky top-0 border-t border-gray-700 bg-[#232323]" style={{ top: 'calc(20vh + 0em)', marginBottom: '23em' }}>
                <div className="flex items-center justify-start gap-x-2 text-left text-[40px] font-semibold text-white-400 md:grid md:grid-cols-12 md:justify-between md:gap-x-4">
                  <span className="col-span-5">May 2023 - Present</span>
                  <h3 className="col-span-7 col-start-6 py-4 2xl:py-3">Virginia Tech</h3>

                </div>

                <div className="grid gap-x-4 relative min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12">
                  <span className="col-span-7 col-start-6">Undergraduate Teaching Assistant</span>
                  <img className="col-span-5 col-start-0 rounded-2xl w-full max-w-[450px] aspect-[16/9] object-cover border-4 border-gray-700 shadow-md" src={VT} alt="Virginia Tech" ></img>
                  <div className="flex flex-col w-full col-span-7 col-start-6 pt-4 text-lg gap-y-4">
                    <ul className="flex flex-col gap-2 pl-4 text-base font-medium list-disc">
                      <li>Guided over 100 students by hosting office hours, troubleshooting issues, and providing tailored academic support.</li>
                      <li>Facilitated interactive discussions through online forums, achieving a 90%+ student satisfaction rate.</li>
                      <li>Supported instruction for Computer Organization, Computer Systems, and Comparative Languages, focusing on C, x86, RISC-V, operating systems concepts, and multi-language paradigms.</li>
                    </ul>

                    <div className="flex flex-col pt-4 border-t border-gray-700 divide-y divide-gray-700">
                      <span className="flex items-start py-1 font-bold gap-x-3 xl:gap-x-4 xl:py-2">
                        Technical:
                        <span className="font-mono text-base font-medium leading-[200%] text-gray-300">C, x86, RISC-V, Prolog, Rust, Haskell, Ruby</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky top-0 border-t border-gray-700 bg-[#232323]" style={{ top: 'calc(20vh + 5.75em)', marginBottom: '17.25em' }}>
                <div className="flex items-center justify-start gap-x-2 text-left text-[40px] font-semibold text-white-400 md:grid md:grid-cols-12 md:justify-between md:gap-x-4">
                  <span className="col-span-5">Aug 2024 - Dec 2024</span>
                  <h3 className="col-span-6 col-start-6 py-4 2xl:py-3">Peraton</h3>
                </div>
                <div className="grid gap-x-4 relative  min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12">
                  <span className="col-span-7 col-start-6 text-lg text-gray-300">Software Engineer Co-op</span>
                  <img className="col-span-5 col-start-0 rounded-2xl w-full max-w-[450px] aspect-[16/9] object-cover border-4 border-gray-700 shadow-md" src={Peraton} alt="Peraton" ></img>
                  <div className="flex flex-col w-full col-span-7 col-start-6 pt-4 text-lg gap-y-4">
                    <ul className="flex flex-col gap-2 pl-4 text-base font-medium list-disc">
                      <li>Contributed to a cyber-threat intelligence platform for detecting attacks, managing malware, and mitigating risks.</li>
                      <li>Optimized the CI/CD pipeline by updating Docker Compose configurations, reducing deployment time by 20%.</li>
                      <li>Diagnosed and resolved Maven build issues and Java test failures, increasing pipeline reliability by 25%.</li>
                      <li>Strengthened system performance by addressing over 100+ security vulnerabilities through dependency updates.</li>
                      <li>Collaborated using Agile methodologies and GitLab to document and resolve 20+ functionality issues.</li>
                    </ul>
                    <div className="flex flex-col pt-4 border-t border-gray-700 divide-y divide-gray-700">
                      <span className="flex items-start py-1 font-bold gap-x-3 xl:gap-x-4 xl:py-2">
                        Technical:
                        <span className="font-mono text-base font-medium leading-[200%] text-gray-300">Java, Maven, Junit, Docker, GitLab</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky top-0 border-t border-gray-700 bg-[#232323]" style={{ top: 'calc(20vh + 11.5em)', marginBottom: '11.5em' }}>
                <div className="flex items-center justify-start gap-x-2 text-left text-[40px] font-semibold text-white-400 md:grid md:grid-cols-12 md:justify-between md:gap-x-4">
                  <span className="col-span-5">Sep 2023 - Nov 2023</span>
                  <h3 className="col-span-6 col-start-6 py-4 2xl:py-3">Card Isle</h3>
                </div>
                <div className="grid gap-x-4 relative min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12">
                  <span className="col-span-7 col-start-6 text-lg text-gray-300">Front-end Developer Intern</span>
                  <img className="col-span-5 col-start-0 rounded-2xl w-full max-w-[450px] aspect-[16/9] object-cover border-4 border-gray-700 shadow-md" src={cardIsle} alt="Card Isle" ></img>
                  <div className="flex flex-col w-full col-span-7 col-start-6 pt-4 text-lg gap-y-4">
                    <ul className="flex flex-col gap-2 pl-4 text-base font-medium list-disc">
                      <li>Upgraded the company’s website by adding new features and improving layouts to enhance user engagement.</li>
                      <li>Redesigned UI elements like search bars, buttons, and layouts using Alpine.js, boosting usability by 30%.</li>
                      <li>Conducted testing using Playwright, achieving 90%+ test coverage and reducing functionality bugs by 20%.</li>
                    </ul>
                    <div className="flex flex-col pt-4 border-t border-gray-700 divide-y divide-gray-700">
                      <span className="flex items-start py-1 font-bold gap-x-3 xl:gap-x-4 xl:py-2">
                        Technical:
                        <span className="font-mono text-base font-medium leading-[200%] text-gray-300">Java, Maven, Junit, Docker, GitLab</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>

      {/* DIFFERENT LAYOUT */}
      <section className='pr-[5%] pb-[5%] pl-[5%] rounded-b-3xl min-h-[2000px]'>
        <div className="w-full pt-16">

          <div className="top-0  bg-[#080807] pr-[3%] pb-[10%] pl-[3%]" style={{ top: 'calc(20vh + 11.5em)', marginBottom: '11.5em' }}>
            <div className="flex items-center border-t border-[#524D47] justify-start gap-x-2 text-left text-[35px] p-[2%] font-semibold text-white-400 md:grid md:grid-cols-12 md:justify-between md:gap-x-4  hover:bg-gray-600/10 hover:rounded-xl hover:shadow-md">
              <span className="col-span-5 ">2023 - Present</span>
              <h3 className="col-span-6 col-start-6 py-4 2xl:py-3">
                <span className='space-x-2'>
                  <span>Undergraduate TA  @</span>
                  <span class="inline-block">Virginia Tech</span>
                </span>
              </h3>
              {/* <img className="col-span-5 col-start-0 rounded-2xl w-full max-w-[450px] aspect-[16/9] object-cover border-4 border-gray-700 shadow-md" src={cardIsle} alt="Card Isle" ></img> */}

              <div className="flex flex-col w-full col-span-7 col-start-6 pt-4 text-lg gap-y-4">
                <p>
                  Provide academic support to students by hosting office hours, troubleshooting technical issues, and offering personalized guidance.
                  Facilitate interactive discussions through online forums to enhance student engagement.
                  Assist in teaching Computer Organization, Computer Systems, and Comparative Languages.
                </p>
                <div className="flex flex-col col-span-7 col-start-6 pt-4 border-gray-700 divide-y divide-gray-700">
                  <div className="flex flex-col items-start gap-x-6">
                    <span className="flex items-center">
                      <div class="flex items-end gap-x-[10px] tracking-base">
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">C</span>
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">x86</span>
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">RISC-V</span>
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">Rust</span>
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">Haskell</span>
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">Prolog</span>
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">Ruby</span>

                      </div>
                    </span>
                  </div>

                </div>
              </div>
            </div>

            <div className="flex items-center justify-start gap-x-2 text-left border-t border-[#524D47] text-[35px] p-[2%] font-semibold text-white-400 md:grid md:grid-cols-12 md:justify-between md:gap-x-4  hover:bg-gray-600/10 hover:rounded-xl hover:shadow-md">
              <span className="col-span-5">Fall 2024</span>
              <h3 className="col-span-6 col-start-6 py-4 2xl:py-3">
                <span className='space-x-2'>
                  <span>Software Engineer Co-op @</span>
                  <span class="inline-block">Peraton</span>
                </span>
              </h3>
              {/* <img className="col-span-5 col-start-0 rounded-2xl w-full max-w-[450px] aspect-[16/9] object-cover border-4 border-gray-700 shadow-md" src={cardIsle} alt="Card Isle" ></img> */}

              <div className="flex flex-col w-full col-span-7 col-start-6 pt-4 text-lg gap-y-4">
                <p>
                  Contributed to the development and maintenance of a cyber-threat intelligence platform.
                  Improved system performance by enhancing build processes, resolving issues, and updating dependencies.
                  Collaborated with cross-functional teams to document and address functionality improvements, ensuring a more secure and reliable platform.
                </p>
                <div className="flex flex-col col-span-7 col-start-6 pt-4 border-gray-700 divide-y divide-gray-700">
                  <div className="flex flex-col items-start gap-x-6">
                    <span className="flex items-center">
                      <div class="flex items-end gap-x-[10px] tracking-base">
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">Maven</span>
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">Java</span>
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">Junit</span>
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">Docker</span>
                      </div>
                    </span>
                  </div>

                </div>
              </div>
            </div>

            <div className="flex items-center justify-start gap-x-2 text-left text-[35px] p-[2%] border-t border-[#524D47] font-semibold text-white-400 md:grid md:grid-cols-12 md:justify-between md:gap-x-4  hover:bg-gray-600/10 hover:rounded-xl hover:shadow-md">
              <span className="col-span-5 ">Fall 2023</span>
              <h3 className="col-span-6 col-start-6 py-4 2xl:py-3">
                <span className='space-x-2'>
                  <span>Front-end Developer Intern @</span>
                  <span class="inline-block">Card Isle </span>
                </span>
              </h3>
              {/* <img className="col-span-5 col-start-0 rounded-2xl w-full max-w-[450px] aspect-[16/9] object-cover border-4 border-gray-700 shadow-md" src={cardIsle} alt="Card Isle" ></img> */}

              <div className="flex flex-col w-full col-span-7 col-start-6 pt-4 text-lg gap-y-4">
                <p>
                  Improved the company’s website by adding new features and enhancing UI layouts to create a more engaging user experience.
                  Redesigned key interface elements such as search bars, buttons, and page structures using Alpine.js to improve usability.
                  Conducted thorough testing with Playwright to ensure functionality and reliability across the platform.
                </p>
                <div className="flex flex-col col-span-7 col-start-6 pt-4 border-gray-700 divide-y divide-gray-700">
                  <div className="flex flex-col items-start gap-x-6">
                    <span className="flex items-center">
                      <div class="flex items-end gap-x-[10px] tracking-base">
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">Alpine.js</span>
                        <span class="border rounded-full border-[#524D47] flex px-3 py-1">Playwright</span>
                      </div>
                    </span>
                  </div>

                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

    </div>


  );
};

export default Experience;


