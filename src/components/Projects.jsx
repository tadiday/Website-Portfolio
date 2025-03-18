import React, { useState } from 'react';
import cardIsle from '../assets/cardisle.png';
import VT from '../assets/VT.jpg';
import WB from '../assets/web-port.png';
import SPS from '../assets/simplisplit.webp';
import FS from '../assets/foodSwipe.png';


const Project = ({ refProp }) => {
  const experiences = {
    projects: [
      {
        title: 'Food Swipe',
        date: 'Nov 2022',
        tech: ['React-Native', 'Tailwind CSS'],
        gitHub: 'link',
        description: `
          Developed a seamless group payment solution using React Native, 
          integrating the Veryfi API and Flask for accurate data extraction 
          from receipts. The app streamlines bill splitting by leveraging 
          the Venmo API for payment requests, reducing manual calculations 
          and improving user convenience.`,
        description2: [
          'Courses: CS 2505 & CS 2506 - Computer Organization I & II.',
          'Conducted office hours, providing troubleshooting support and answering questions to enhance students\' understanding.',
          'Actively guided and monitored online forums and lab sessions to provide interactive learning experiences.'
        ],
        image: VT
      },
      {
        title: 'Simplisplit',
        date: 'Sep 2023',
        tech: ['React-Native', 'Tailwind CSS', 'Python', 'Flask'],
        gitHub: 'link',
        description: `
          Developed a seamless group payment solution using React Native, 
          integrating the Veryfi API and Flask for accurate data extraction 
          from receipts. The app streamlines bill splitting by leveraging 
          the Venmo API for payment requests, reducing manual calculations 
          and improving user convenience.`,
        description2: [
          'Courses: CS 2505 & CS 2506 - Computer Organization I & II.',
          'Conducted office hours, providing troubleshooting support and answering questions to enhance students\' understanding.',
          'Actively guided and monitored online forums and lab sessions to provide interactive learning experiences.'
        ],
        image: VT
      },
      {
        title: 'Web-Portfolio',
        date: 'May 2025',
        tech: ['React-Native', 'Tailwind CSS', 'Next.js'],
        gitHub: 'link',
        description: `
          Developed a seamless group payment solution using React Native, 
          integrating the Veryfi API and Flask for accurate data extraction 
          from receipts. The app streamlines bill splitting by leveraging 
          the Venmo API for payment requests, reducing manual calculations 
          and improving user convenience.`,
        description2: [
          'Courses: CS 2505 & CS 2506 - Computer Organization I & II.',
          'Conducted office hours, providing troubleshooting support and answering questions to enhance students\' understanding.',
          'Actively guided and monitored online forums and lab sessions to provide interactive learning experiences.'
        ],
        image: VT
      }
    ],
  };

  return (
    <div ref={refProp} className="h-full rounded-[25px] bg-[#232323] p-4 z-30">
      <div className="relative z-20 w-full bg-secondary-400 overflow-x-clip">
        <div className="flex w-full flex-col gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20' >
            <h2 className='col-span-10 col-start-2 text-[100px] font-semibold'>
              Selected Projects
            </h2>
          </div>
        </div>
        <section className="pr-[5%] pb-[5%] pl-[5%] rounded-t-3xl min-h-[2000px]">
          <div className="w-full pt-16">
            <div className="mt-12 flex flex-col justify-between gap-y-16">

              {/*Virginia Tech */}
              <div className="sticky top-0 border-t border-gray-700 bg-[#232323] pb-[15em]" style={{ top: 'calc(15vh + 0em)' }}>
                <div className="flex items-center justify-start gap-x-2 text-left text-[40px]  font-semibold text-white-400 md:grid md:grid-cols-12 md:justify-between md:gap-x-8">
                  <span className="col-span-5">(1)</span>
                  <h3 className="col-span-7 col-start-6 py-4 2xl:py-3">Personal-Porfolio</h3>
                </div>
                <div className="grid gap-x-8 relative flex min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12">
                  <img className="col-span-5 col-start-0 rounded-2xl w-full aspect-[2/1] object-cover border-4 border-gray-700 shadow-md" src={WB} alt="Virginia Tech" ></img>
                  <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-4 pt-4 text-lg">
                    <span className="col-span-7 col-start-6">
                      <span className="flex items-center gap-x-2 font-bold"> Description: </span>
                      Developing a personal website using React.js, Next.js, and Tailwind CSS to
                      showcase projects, experiences, and research. The site will feature a clean,
                      responsive design with smooth navigation and optimized performance.
                      Hosting will be managed via Google Domains for a professional web presence.
                    </span>
                    {/* <ul className="flex flex-col gap-2 pl-4 list-disc font-medium text-base">
                      <li>Guided over 100 students by hosting office hours, troubleshooting issues, and providing tailored academic support.</li>
                      <li>Facilitated interactive discussions through online forums, achieving a 90%+ student satisfaction rate.</li>
                      <li>Supported instruction for Computer Organization, Computer Systems, and Comparative Languages, focusing on C, x86, RISC-V, operating systems concepts, and multi-language paradigms.</li>
                    </ul> */}

                    <div className="border-t border-gray-700 pt-4">
                      <div className="flex flex-col items-start gap-x-6">
                        <span className="flex items-center gap-x-2 font-bold">
                          Technology:
                          <span className="font-mono text-base font-medium leading-[200%] text-gray-300">
                            React.js, Tailwind CSS, Next.js
                          </span>
                        </span>
                        <span className="flex items-center gap-x-2 font-bold">
                          Github:
                          <span className="font-mono text-base font-medium leading-[200%] text-gray-300">link</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Food Swipe */}
              <div className="sticky top-0 border-t border-gray-700 bg-[#232323] pb-[10em]" style={{ top: 'calc(15vh + 5.5em)' }}>
                <div className="flex items-center justify-start gap-x-8 text-left text-[40px] font-semibold text-white-400 md:grid md:grid-cols-12 md:justify-between md:gap-x-8">
                  <span className="col-span-5">(2)</span>
                  <h3 className="col-span-7 col-start-6 py-4 2xl:py-3">Food Swipe</h3>
                </div>
                <div className="grid gap-x-8 relative flex min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12">
                  <img className="col-span-5 col-start-0 rounded-2xl w-full aspect-[2/1] object-cover border-4 border-gray-700 shadow-md" src={FS} alt="SimPliSplit" ></img>
                  <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-4 pt-4 text-lg">

                    <span className="col-span-7 col-start-6">
                      <span className="flex items-center gap-x-2 font-bold">Description: </span>
                      Built a Tinder-inspired restaurant discovery app allowing users to swipe right for
                      more details on local dining options based on their location.
                    </span>
                    <ul className="flex flex-col gap-2 pl-4 list-disc font-medium text-base">
                      <li>Integrated the Google Places API to fetch and display restaurant information.</li>
                      <li>Utilized the Google Geolocation API to determine user location for personalized search results.</li>
                      <li>Implemented a responsive and interactive UI using React.js and TypeScript.</li>
                    </ul>

                    <div className="border-t border-gray-700 pt-4">
                      <div className="flex flex-col items-start gap-x-6">
                        <span className="flex items-center gap-x-2 font-bold">
                          Technology:
                          <span className="font-mono text-base font-medium leading-[200%] text-gray-300">
                            React.js, TypeScript, Tailwind CSS, Next.js, Google APIs
                          </span>
                        </span>
                        <span className="flex items-center gap-x-2 font-bold">
                          Github:
                          <span className="font-mono text-base font-medium leading-[200%] text-gray-300">link</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Card Isle Service */}
              <div className="sticky top-0 border-t border-gray-700 bg-[#232323] pb-[5em]" style={{ top: 'calc(15vh + 11em)' }}>
                <div className="flex items-center justify-start gap-x-2 text-left text-[40px] font-semibold text-white-400 md:grid md:grid-cols-12 md:justify-between md:gap-x-4">
                  <span className="col-span-5">(3)</span>
                  <h3 className="col-span-7 col-start-6 py-4 2xl:py-3">Simplisplit</h3>
                </div>
                <div className="grid gap-x-4 relative flex min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12 text-[35px]">
                  <img className="col-span-5 col-start-0 rounded-2xl w-full aspect-[2/1] object-cover border-4 border-gray-700 shadow-md " src={SPS} alt="SimPliSplit" ></img>
                  <div className="col-span-7 col-start-6 flex w-full flex-col gap-y-4 pt-4 text-lg">
                    <span className="col-span-7 col-start-6">
                      <span className="flex items-center gap-x-2 font-bold">Description: </span>
                      A fully functional mobile application that allows user to scan their bills
                      and split the cost with their friends seamlessly. Available through the App Store.
                    </span>
                    <ul className="flex flex-col gap-2 pl-4 list-disc">
                      <li>Integrated the Veryfi OCR API to extract receipt data and manage orders through a Flask server.</li>
                      <li>Implemented the Venmo API to automate payment requests via phone numbers and SMS.</li>
                    </ul>

                    <div className="border-t border-gray-700 pt-4">
                      <div className="flex flex-col items-start gap-x-6">
                        <span className="flex items-center gap-x-2 font-bold">
                          Technology:
                          <span className="font-mono leading-[200%] text-gray-300">
                            React-Native, Tailwind CSS, Next.js, Python, Flask
                          </span>
                        </span>
                        <span className="flex items-center gap-x-2 font-bold">
                          Github:
                          <span className="font-mono text-base font-medium leading-[200%] text-gray-300">Private</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;