import { useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { FaFileAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { div } from "motion/react-client";


const Experience = forwardRef<HTMLDivElement, {}>((_, ref) => {



  const experiences = {
    personal: [
      {
        company: 'Virginia Tech',
        date: 'Aug 2021 - May 2025',
        title: 'B.S. in Computer Science',
        location: 'Blacksburg, VA',
        courses:
          `Data Structures and Algorithms, Artificial Intelligence, Database Management Systems, Web Development, Computer
          Graphics, Computer Network Architecture, Computer Systems`,
        awards:
          'Dean’s List (Fall 2022, Spring 2023, Fall 2023, Sprint 2024), Virginia Tech Merit-Based Scholarships, VT Peraton DeepRacer 2023',
        description: [
          'Courses: Data Structures and Algorithms, Artificial Intelligence, Database Management Systems, Web Development, Computer Graphics, Computer Network Architecture, Computer Systems',
          'Awards: Dean’s List (Fall 2022, Spring 2023, Fall 2023, Sprint 2024), Virginia Tech Merit-Based Scholarships, VT Peraton DeepRacer 2023',
        ],
        skills: ['Computer Systems', 'Data Structure & Algorithms', 'Computer Graphics', 'Web Development', ''],
        image: FaGraduationCap
      },
    ],
    academic: [
      {
        company: 'Virginia Tech',
        date: 'May 2023 - Present',
        title: 'Undergraduate TA',
        location: 'Blacksburg, VA',
        description: `
          Provide academic support to students by hosting office hours, troubleshooting technical issues, and offering personalized guidance. 
          Facilitate interactive discussions through online forums to enhance student engagement. 
          Assist in teaching Computer Organization, Computer Systems, and Comparative Languages.`
        ,
        skills: ["C", "x86", "RISC-V", "Rust", 'Haskell', 'Prolog', 'Ruby'],
        image: MdOutlineWork
      },
      {
        company: 'Virginia Tech IDPro',
        date: 'Jan - Dec 2024',
        title: 'Rural Trash Collection',
        location: 'Blacksburg, VA',
        description: `
          Developed an automated trash collection robot enabling remote monitoring and operation, 
          integrating essential sensors for autonomous navigation and efficient waste collection. 
          Researched and implemented algorithms for path planning, obstacle avoidance, safety measures, 
          and optimized trash collection to enhance functionality and reliability.`,
        skills: ['Python', 'ROS', 'OpenCV', 'Raspberry Pi'],
        image: FaFileAlt
      },
      {
        company: 'Virginia Tech IDPro',
        date: 'Sep - Nov 2023',
        title: 'SMART Research',
        location: 'Blacksburg, VA',
        description: `
          Designed and developed a Software Managed Arduino-based Residential Toolkit (SMART) to enhance home automation, 
          integrating a Raspberry Pi for improved connectivity and optimized system performance. 
          Built a Swift-based mobile application to enable remote control and real-time monitoring of smart devices, ensuring a seamless and user-friendly experience.`,
        skills: ['Swift', 'Arduino', 'Raspberry Pi', 'Xcode'],
        image: FaFileAlt
      }
    ],
    professional: [
      // {
      //   company: 'Virginia Tech',
      //   date: 'May 2023 - Present',
      //   title: 'Undergraduate TA',
      //   location: 'Blacksburg, VA',
      //   description: `
      //     Provide academic support to students by hosting office hours, troubleshooting technical issues, and offering personalized guidance. 
      //     Facilitate interactive discussions through online forums to enhance student engagement. 
      //     Assist in teaching Computer Organization, Computer Systems, and Comparative Languages.`
      //   ,
      //   skills: ["C", "x86", "RISC-V", "Rust", 'Haskell', 'Prolog', 'Ruby'],
      //   image: HiOutlineAcademicCap
      // },
      {
        company: 'Peraton',
        date: 'Aug - Dec 2024',
        title: 'Software Engineer Intern',
        location: 'Blacksburg, VA',
        description: `
          Contributed to the development and maintenance of a cyber-threat intelligence platform. 
          Improved system performance by enhancing build processes, resolving issues, and updating dependencies. 
          Collaborated with cross-functional teams to document and address functionality improvements, ensuring a more secure and reliable platform.`,
        skills: ['Maven', 'Java', 'Junit', 'Docker'],
        image: MdOutlineWork
      },
      // {
      //   company: 'Virginia Tech IDPro',
      //   date: 'Jan - Dec 2024',
      //   title: 'Research Assistant',
      //   location: 'Blacksburg, VA',
      //   description: `
      //     Developed an automated trash collection robot enabling remote monitoring and operation, 
      //     integrating essential sensors for autonomous navigation and efficient waste collection. 
      //     Researched and implemented algorithms for path planning, obstacle avoidance, safety measures, 
      //     and optimized trash collection to enhance functionality and reliability.`,
      //   skills: ['Python', 'ROS', 'OpenCV', 'Raspberry Pi'],
      //   image: HiOutlineAcademicCap
      // },
      // {
      //   company: 'Virginia Tech IDPro',
      //   date: 'Sep - Nov 2023',
      //   title: 'Research Assistant',
      //   location: 'Blacksburg, VA',
      //   description: `
      //     Designed and developed a Software Managed Arduino-based Residential Toolkit (SMART) to enhance home automation, 
      //     integrating a Raspberry Pi for improved connectivity and optimized system performance. 
      //     Built a Swift-based mobile application to enable remote control and real-time monitoring of smart devices, ensuring a seamless and user-friendly experience.`,
      //   skills: ['Swift', 'Arduino', 'Raspberry Pi', 'Xcode'],
      //   image: HiOutlineAcademicCap
      // },
      {
        company: 'Card Isle',
        date: 'Sep - Nov 2023',
        title: 'Front-end Developer Intern',
        location: 'Blacksburg, VA',
        description: `
          Improved the company’s website by adding new features and enhancing UI layouts to create a more engaging user experience. 
          Redesigned key interface elements such as search bars, buttons, and page structures using Alpine.js to improve usability. 
          Conducted thorough testing with Playwright to ensure functionality and reliability across the platform.`,
        skills: ['Alpine.js', 'Playwright'],
        image: MdOutlineWork
      },

    ]
  };
  const [activeButton, setActiveButton] = useState<ExperienceCategory>('professional');

  const handleButtonClick = (button: ExperienceCategory) => {
    setActiveButton(button);
  };

  type ExperienceCategory = "personal" | "academic" | "professional";

  const renderExperiences = (category: ExperienceCategory) => {
    return experiences[category].map((job, index) => (
      <div key={'profession' + index} className="flex items-center border-[#524D47]  justify-start gap-x-2 text-left text-[30px] p-[2%] font-semibold text-[#FFFFE0]
          md:grid md:grid-cols-12 md:justify-between md:gap-x-4  hover:bg-gray-600/10 hover:rounded-xl hover:shadow-md">
        <span className="flex items-center col-span-5 col-start-1 gap-x-5">
          {job.image && <job.image className="" />}
          {job.date}
        </span>
        <h3 className="col-span-6 col-start-6 py-4 2xl:py-3">
          <span className='space-x-2'>
            <span>{job.title}</span>
            <span className="inline-block text-[#745f4e]">@</span>
            <span className="inline-block text-[#745f4e]">{job.company}</span>
            <GoArrowUpRight className='inline-block text-[#745f4e]' />
          </span>
        </h3>

        <div className="flex flex-col w-full col-span-7 col-start-6 pt-4 text-lg gap-y-4">
          <p>
            {job.description}
          </p>
          <div className="flex flex-col col-span-7 col-start-6 pt-4 border-gray-700 divide-y divide-gray-700">

            <div className="flex flex-wrap items-center gap-3">
              {job.skills.map((tech, index) => (
                <span key={index} className="flex justify-center rounded-full bg-[#524D47] px-3 py-1 min-w-[3em]">
                  <span className='w-full text-center'>{tech}</span>
                </span>
              ))}
            </div>


          </div>
        </div>
      </div>
    ));
  };

  // const renderExperiences = (category: string) => {
  //   return experiences[category].map((job, index) => (
  //     <div className="top-0 flex flex-col bg-[#080807] border-t border-[#524D47] gap-y-4">
  //     {experiences.professional.map((job, index) => (
  //       <div key={'profession' + index} className="flex items-center border-[#524D47]  justify-start gap-x-2 text-left text-[35px] p-[2%] font-semibold text-[#FFFFE0]
  //         md:grid md:grid-cols-12 md:justify-between md:gap-x-4  hover:bg-gray-600/10 hover:rounded-xl hover:shadow-md">
  //         <span className="flex items-center col-span-5 col-start-1 gap-x-5">
  //           {job.image && <job.image className="" />} 
  //           {job.date}
  //         </span>
  //         <h3 className="col-span-6 col-start-6 py-4 2xl:py-3">
  //           <span className='space-x-2'>
  //             <span>{job.title}</span>
  //             <span className="inline-block text-[#745f4e]">@</span>
  //             <span className="inline-block text-[#745f4e]">{job.company}</span>
  //             <GoArrowUpRight className='inline-block text-[#745f4e]'/>
  //           </span>
  //         </h3>

  //         <div className="flex flex-col w-full col-span-7 col-start-6 pt-4 text-lg gap-y-4">
  //           <p>
  //             {job.description}
  //           </p>
  //           <div className="flex flex-col col-span-7 col-start-6 pt-4 border-gray-700 divide-y divide-gray-700">

  //             <div className="flex flex-wrap items-center gap-3">
  //               {job.skills.map((tech, index) => (
  //                 <span key={index} className="flex justify-center rounded-full bg-[#524D47] px-3 py-1 min-w-[3em]">
  //                   <span className='w-full text-center'>{tech}</span>
  //                 </span>
  //               ))}
  //             </div>


  //           </div>
  //         </div>
  //       </div>

  //     ))}
  //   </div>
  //   );
  // };



  return (
    <div id="experience" ref={ref} className="h-full min-h-[500px] bg-[#080807] p-4 rounded-b-[25px] flex flex-col items-center z-10 text-[#FFFFE0]">
      {/* Button Group */}



      {/* Button Layout */}

      {/* 
      <div className="relative z-20 w-full bg-secondary-400 overflow-x-clip">
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20' >
            <h2 className='col-span-10 col-start-2 text-[100px] font-semibold'>
              MY JOURNEY
            </h2>
          </div>
        </div>

        <section className='pr-[5%] pb-[5%] pl-[5%] rounded-b-3xl min-h-[2000px] '>
          <button
            className={`bg-border text-[18px] rounded-full px-5 py-1 ${activeButton === 'professional' ? 'bg-[#644f3e]' : 'bg-button'}`}
            onClick={() => handleButtonClick('professional')}
          >
            Professional
          </button>
          <button
            className={`bg-border text-[18px] rounded-full px-5 py-1 ${activeButton === 'academic' ? 'bg-[#644f3e]' : 'bg-button'}`}
            onClick={() => handleButtonClick('academic')}
          >
            Academics
          </button>

      <div className="top-0 flex flex-col bg-[#080807] border-t border-[#524D47] gap-y-4">
        {renderExperiences(activeButton)}
      </div>
    </section>
      </div > */}


      {/* NO BUTTON */}
      < div className="relative z-20 w-full bg-secondary-400 overflow-x-clip" >
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20' >
            <h2 className='col-span-10 col-start-2 text-[100px] font-semibold'>
              MY JOURNEY
            </h2>
          </div>
        </div>

        <section className='pr-[5%] pb-[5%] pl-[5%] rounded-b-3xl min-h-[2000px] '>

          <div className="w-full pt-16 ">
            <h3 className='col-span-12 col-start-2 text-[35px] border-t border-[#524D47] font-semibold'>
              Professional
            </h3>
            <div className="top-0 flex flex-col bg-[#080807] border-t border-b border-[#524D47] gap-y-4 group">
              {experiences.professional.map((job, index) => (
                <div className="hover:bg-[#524D47]/30 hover:rounded-xl ">


                  <div key={'profession' + index} className="flex border-[#524D47] justify-start gap-x-2 text-left text-[25px] p-[2%] 
                font-semibold text-[#FFFFE0] md:grid md:grid-cols-12 md:justify-between md:gap-x-4 cursor-pointer
                hover:shadow-md transition-all duration-300 ease-in-out group-hover:opacity-50 hover:opacity-100 hover:scale-[1.0]">

                    <span className="flex items-center col-span-3 col-start-1 gap-x-5">
                      {job.image && <job.image className="text-[#745f4e]" />}
                      {job.date}
                    </span>

                    <h3 className="col-span-6 col-start-6 py-4 pl-10 border-l border-[#524D47] 2xl:py-3">
                      <span className='space-x-2'>
                        <span>{job.title}</span>
                        <span className="inline-block text-[#745f4e]">@</span>
                        <span className="inline-block text-[#745f4e]">{job.company}</span>
                        <GoArrowUpRight className='inline-block text-[#745f4e]' />
                      </span>
                    </h3>

                    <div className="top-0 flex items-start col-span-3 col-start-1 gap-x-5">
                      <div className="top-0 flex items-center col-span-5 col-start-1 gap-x-5">
                        <IoLocationSharp className="text-[#745f4e]" />
                        {job.location}
                      </div>
                    </div>

                    <div className="flex flex-col w-full col-span-6 col-start-6 pl-10 text-lg border-l border-[#524D47] gap-y-4">
                      <p className="font-thin">
                        {job.description}
                      </p>
                      <div className="flex flex-col col-span-7 col-start-6 pt-4 border-gray-700 divide-y divide-gray-700">

                        <div className="flex flex-wrap items-center gap-3">
                          {job.skills.map((tech, index) => (
                            <span key={index} className="flex justify-center rounded-full bg-[#524D47] px-3 py-1 min-w-[3em]">
                              <span className='w-full text-center'>{tech}</span>
                            </span>
                          ))}
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full ">
            <h3 className='col-span-10 col-start-2 text-[35px] font-semibold'>
              Academics
            </h3>
            <div className="top-0 flex flex-col bg-[#080807] border-t border-b border-[#524D47] gap-y-4">
              {experiences.academic.map((job, index) => (
                <div key={'academic' + index} className="flex border-[#524D47] justify-start gap-x-2 text-left text-[25px] p-[2%] font-semibold text-[#FFFFE0]
                md:grid md:grid-cols-12 md:justify-between md:gap-x-4  hover:bg-[#524D47] hover:rounded-xl hover:shadow-md">

                  <span className="flex items-center col-span-3 col-start-1 gap-x-5">
                    {job.image && <job.image className="text-[#745f4e]" />}
                    {job.date}
                  </span>

                  <h3 className="col-span-6 col-start-6 py-4 pl-10 border-l border-[#524D47] 2xl:py-3">
                    <span className='space-x-2'>
                      <span>{job.title}</span>
                      <span className="inline-block text-[#745f4e]">@</span>
                      <span className="inline-block text-[#745f4e]">{job.company}</span>
                      <GoArrowUpRight className='inline-block text-[#745f4e]' />
                    </span>
                  </h3>

                  <div className="top-0 flex items-start col-span-3 col-start-1 gap-x-5">
                    <div className="top-0 flex items-center col-span-5 col-start-1 gap-x-5">
                      <IoLocationSharp className="text-[#745f4e]" />
                      {job.location}
                    </div>
                  </div>

                  <div className="flex flex-col w-full col-span-6 col-start-6 pl-10 text-lg border-l border-[#524D47] gap-y-4">
                    <p className="font-thin">
                      {job.description}
                    </p>
                    <div className="flex flex-col col-span-7 col-start-6 pt-4 border-gray-700 divide-y divide-gray-700">

                      <div className="flex flex-wrap items-center gap-3">
                        {job.skills.map((tech, index) => (
                          <span key={index} className="flex justify-center rounded-full bg-[#524D47] px-3 py-1 min-w-[3em]">
                            <span className='w-full text-center'>{tech}</span>
                          </span>
                        ))}
                      </div>


                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>

          <div className="w-full pt-16 ">
            <h3 className='col-span-10 col-start-2 text-[35px] font-semibold'>
              Degree
            </h3>
            <div className="top-0 flex flex-col bg-[#080807] border-t border-[#524D47] gap-y-4">
              {experiences.personal.map((job, index) => (
                <div key={'profession' + index} className="flex border-[#524D47] border-t justify-start gap-x-2 text-left text-[25px] p-[2%] font-semibold text-[#FFFFE0]
                  md:grid md:grid-cols-12 md:justify-between md:gap-x-4  hover:bg-gray-600/10 hover:rounded-xl hover:shadow-md">
                  <span className="flex items-center col-span-5 col-start-1 gap-x-5">
                    {job.image && <job.image className="text-[#745f4e]" />}
                    {job.date}

                  </span>

                  <h3 className="col-span-6 col-start-6 py-4 border-l border-[#524D47] pl-10 2xl:py-3">
                    <span className='space-x-2'>
                      <span>{job.title}</span>
                      <span className="inline-block text-[#745f4e]">@</span>
                      <span className="inline-block text-[#745f4e]">{job.company}</span>
                      <GoArrowUpRight className='inline-block text-[#745f4e]' />
                    </span>
                  </h3>

                  <div className="top-0 flex items-start col-span-5 col-start-1 gap-x-5">
                    <div className="top-0 flex items-center col-span-5 col-start-1 gap-x-5">
                      <IoLocationSharp className="text-[#745f4e]" />
                      {job.location}
                    </div>
                  </div>

                  <div className="flex flex-col w-full col-span-6 col-start-6 pt-4 border-l border-[#524D47] pl-10 text-lg gap-y-2">
                    Courses:
                    <p className="font-thin">
                      {job.courses}
                    </p>
                    Achievements:
                    <p className="font-thin">
                      {job.awards}
                    </p>
                    <div className="flex flex-col col-span-6 col-start-6 pt-4 border-gray-700 divide-y divide-gray-700">

                      {/* <div className="flex flex-wrap items-center gap-3">
                        {job.skills.map((tech, index) => (
                          <span key={index} className="flex justify-center rounded-full bg-[#524D47] px-3 py-1 min-w-[3em]">
                            <span className='w-full text-center'>{tech}</span>
                          </span>
                        ))}

                      </div> */}


                    </div>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </section>

      </div >

    </div >


  );
});

export default Experience;


