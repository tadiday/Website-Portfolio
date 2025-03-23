import { useState, forwardRef } from "react";
import Image from 'next/image';
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdWorkOutline } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";


const Experience = forwardRef<HTMLDivElement, {}>((_, ref) => {



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
      },
    ],
    academic: [
      {
        title: 'Virginia Tech Department of Computer Science',
        date: 'May 2023 - Present',
        role: 'Undergraduate TA',
        location: 'Blacksburg, VA',
        description: `
          Provide academic support to students by hosting office hours, troubleshooting technical issues, and offering personalized guidance. 
          Facilitate interactive discussions through online forums to enhance student engagement. 
          Assist in teaching Computer Organization, Computer Systems, and Comparative Languages.`
        ,
        skills: ["C", "x86", "RISC-V", "Rust", 'Haskell', 'Prolog', 'Ruby'],
        image: HiOutlineAcademicCap
      },
      {
        title: 'Virginia Tech IDPro',
        date: 'Jan - Dec 2024',
        role: 'Rural Trash Collection Research',
        location: 'Blacksburg, VA',
        description: `
          Developed an automated trash collection robot enabling remote monitoring and operation, 
          integrating essential sensors for autonomous navigation and efficient waste collection. 
          Researched and implemented algorithms for path planning, obstacle avoidance, safety measures, 
          and optimized trash collection to enhance functionality and reliability.`,
        skills: ['Python', 'ROS', 'OpenCV', 'Raspberry Pi'],
        image: MdWorkOutline
      },
      {
        title: 'Virginia Tech IDPro',
        date: 'Sep - Nov 2023',
        role: 'SMART Research',
        location: 'Blacksburg, VA',
        description: `
          Designed and developed a Software Managed Arduino-based Residential Toolkit (SMART) to enhance home automation, 
          integrating a Raspberry Pi for improved connectivity and optimized system performance. 
          Built a Swift-based mobile application to enable remote control and real-time monitoring of smart devices, ensuring a seamless and user-friendly experience.`,
        skills: ['Swift', 'Arduino', 'Raspberry Pi', 'Xcode'],
        image: MdWorkOutline
      }
    ],
    professional: [
      {
        company: 'Virginia Tech',
        date: 'May 2023 - Present',
        role: 'Undergraduate TA',
        location: 'Blacksburg, VA',
        description: `
          Provide academic support to students by hosting office hours, troubleshooting technical issues, and offering personalized guidance. 
          Facilitate interactive discussions through online forums to enhance student engagement. 
          Assist in teaching Computer Organization, Computer Systems, and Comparative Languages.`
        ,
        skills: ["C", "x86", "RISC-V", "Rust", 'Haskell', 'Prolog', 'Ruby'],
        image: HiOutlineAcademicCap
      },
      {
        company: 'Peraton',
        date: 'Aug - Dec 2024',
        role: 'Software Engineer Intern',
        location: 'Blacksburg, VA',
        description: `
          Contributed to the development and maintenance of a cyber-threat intelligence platform. 
          Improved system performance by enhancing build processes, resolving issues, and updating dependencies. 
          Collaborated with cross-functional teams to document and address functionality improvements, ensuring a more secure and reliable platform.`,
        skills: ['Maven', 'Java', 'Junit', 'Docker'],
        image: MdWorkOutline
      },
      {
        company: 'Virginia Tech IDPro',
        date: 'Jan - Dec 2024',
        role: 'Research Assistant',
        location: 'Blacksburg, VA',
        description: `
          Developed an automated trash collection robot enabling remote monitoring and operation, 
          integrating essential sensors for autonomous navigation and efficient waste collection. 
          Researched and implemented algorithms for path planning, obstacle avoidance, safety measures, 
          and optimized trash collection to enhance functionality and reliability.`,
        skills: ['Python', 'ROS', 'OpenCV', 'Raspberry Pi'],
        image: HiOutlineAcademicCap
      },
      {
        company: 'Virginia Tech IDPro',
        date: 'Sep - Nov 2023',
        role: 'Research Assistant',
        location: 'Blacksburg, VA',
        description: `
          Designed and developed a Software Managed Arduino-based Residential Toolkit (SMART) to enhance home automation, 
          integrating a Raspberry Pi for improved connectivity and optimized system performance. 
          Built a Swift-based mobile application to enable remote control and real-time monitoring of smart devices, ensuring a seamless and user-friendly experience.`,
        skills: ['Swift', 'Arduino', 'Raspberry Pi', 'Xcode'],
        image: HiOutlineAcademicCap
      },
      {
        company: 'Card Isle',
        date: 'Sep - Nov 2023',
        role: 'Front-end Developer Intern',
        location: 'Blacksburg, VA',
        description: `
          Improved the company’s website by adding new features and enhancing UI layouts to create a more engaging user experience. 
          Redesigned key interface elements such as search bars, buttons, and page structures using Alpine.js to improve usability. 
          Conducted thorough testing with Playwright to ensure functionality and reliability across the platform.`,
        skills: ['Alpine.js', 'Playwright'],
        image: MdWorkOutline
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
      <div key={index}>
        {/* <h3>{job.title}</h3> */}
        <p>{job.role} - {job.date}</p>
        <p>{job.location}</p>
        <p>{job.description}</p>
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
  //             <span>{job.role}</span>
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
    <div id="body-exp" ref={ref} className="h-full min-h-[500px] bg-[#080807] p-4 rounded-b-[25px] flex flex-col items-center z-10 text-[#FFFFE0]">
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
      <div className="p-4">
        {renderExperiences(activeButton)}
      </div>

      {/* Sticky Section */}





      <div className="relative z-20 w-full bg-secondary-400 overflow-x-clip">
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20' >
            <h2 className='col-span-10 col-start-2 text-[100px] font-semibold'>
              EXPERIENCE
            </h2>
          </div>
        </div>
        {/* Using the data */}
        <section className='pr-[5%] pb-[5%] pl-[5%] rounded-b-3xl min-h-[2000px] '>

          <div className="w-full pt-16 ">
            <button>professional |</button>
            <button>| education |</button>
            <button>| research</button>
            <div className="top-0 flex flex-col bg-[#080807] border-t border-[#524D47] gap-y-4">
              {experiences.professional.map((job, index) => (
                <div key={'profession' + index} className="flex items-center border-[#524D47]  justify-start gap-x-2 text-left text-[35px] p-[2%] font-semibold text-[#FFFFE0]
                  md:grid md:grid-cols-12 md:justify-between md:gap-x-4  hover:bg-gray-600/10 hover:rounded-xl hover:shadow-md">
                  <span className="flex items-center col-span-5 col-start-1 gap-x-5">
                    {job.image && <job.image className="" />}
                    {job.date}
                  </span>
                  <h3 className="col-span-6 col-start-6 py-4 2xl:py-3">
                    <span className='space-x-2'>
                      <span>{job.role}</span>
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

              ))}
            </div>


          </div>
        </section>

      </div>

    </div>


  );
});

export default Experience;


