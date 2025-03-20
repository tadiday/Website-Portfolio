import React, { useState, useEffect } from 'react';
import cardIsle from '../assets/cardisle.png';
import VirginiaTech from '../assets/VT.jpg';
import WebPortfolio from '../assets/web-port.png';
import SimPliSplit from '../assets/simplisplit.webp';
import FoodSwipe from '../assets/foodSwipe.png';
import Background2 from '../assets/background2.avif';
import Background1 from '../assets/background3.jpg';
import Background3 from '../assets/background1.jpg';
import SimPliSplitGif from '../assets/gif/scan.gif';
import NoiseTexture from '../assets/noise.jpg';


const Project = ({ refProp }) => {


  const experiences = {
    projects: [
      {
        title: 'Food Swipe hi',
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
        image: FoodSwipe
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
        image: SimPliSplit
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
        image: WebPortfolio
      }
    ],
  };
  const [, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(1); // State for opacity

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      let num = position * 0.2
      console.log(position)
      setScrollPosition(position);
      setOpacity(Math.max(0, 1 - position / 2000)); // Adjust divisor for opacity change speed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={refProp} className="h-full rounded-t-[25px] bg-[#080807] p-4 z-30">
      <div className="relative z-20 w-full overflow-x-clip">
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20' >
            <h2 className='col-span-12 col-start-2 text-[100px] font-semibold'>
              Selected Projects
            </h2>
          </div>
        </div>
        <section className="pr-[5%] pb-[5%] pl-[5%] rounded-t-3xl min-h-[2000px]">
          <div className="w-full pt-16">
            <div className="flex flex-col justify-between mt-12 gap-y-16">
              {/* Portfolio */}
              <div className="sticky top-0 border-t border-[#524D47] bg-[#080807] pb-[10em]" style={{ top: 'calc(10vh + 0em)' }}>

                <div className="grid gap-x-8 relative min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12">
                  <h3 className="col-span-5 col-start-1 font-semibold py-4 2xl:py-3 text-[3.5rem]">Portfolio</h3>
                  <div className="flex flex-col w-full col-span-5 col-start-1 pt-4 gap-y-4 text-heading">
                    <p className="font-thin text-balance text-[1.25rem] ">
                      Built a personal portfolio website using React.js and Tailwind CSS to showcase projects, experiences, and research.
                    </p>

                    <div className="pt-4 border-t border-[#524D47]">
                      <div className="flex flex-col items-start gap-x-6">
                        <span className="flex items-center">
                          <div class="flex items-end gap-x-[10px] tracking-base">
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">React.js</span>
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">Tailwind</span>
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">Next.js</span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='relative top-0 flex items-center justify-center w-full col-span-7 col-start-6 marker:rounded-md aspect-square overflow-clip max-h-[600px]'>
                    <img className="absolute object-cover w-full h-full aspect-4/3 rounded-xl brightness-75 contrast-125"
                      src={Background3}
                      alt="background2" >
                    </img>
                    <div className='z-10 w-5/6 space-y-4 rounded-lg aspect-4/3 overflow-clip'>
                      <img className="border-gray-700 rounded-lg shadow-md"
                        src={WebPortfolio}
                        alt="WebPortfolio" >
                      </img>
                    </div>

                  </div>
                  <div class="flex items-end gap-x-[10px] col-span-5 col-start-6 pt-5">
                    <span class="border rounded-full border-[#524D47] flex px-3 py-1 bg-[#080807]">Web-App</span>
                    <span class="border rounded-full border-[#524D47] flex px-3 py-1 bg-[#080807]">GitHub</span>
                    <span class="border rounded-full border-[#443e37] flex px-3 py-1 bg-[#080807]">2025</span>
                  </div>
                </div>
              </div>
              {/* Simplisplit */}
              <div className="sticky top-0 border-t border-[#524D47] bg-[#080807] pb-[10em]" style={{ top: 'calc(10vh + 0em)' }}>
                <div className="flex items-center justify-start font-semibold text-left gap-x-8 text-white-400 md:grid md:grid-cols-12 md:justify-between md:gap-x-8">
                  <h3 className="col-span-5 py-4 2xl:py-3 text-[3.5rem]">Simplisplit</h3>
                </div>
                <div className="grid gap-x-8 relative min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12">
                  <div className="flex flex-col w-full col-span-5 pt-4 col-start-0 gap-y-4 text-heading">
                    <p className="font-thin text-balance text-[1.25rem] ">
                      A mobile application that allows user to scan their bills
                      and split the cost with their friends seamlessly. Available through the App Store.

                    </p>

                    <div className="pt-4 border-t border-[#524D47]">
                      <div className="flex flex-col items-start gap-x-6">
                        <span className="flex items-center">
                          <div class="flex items-end gap-x-[10px] tracking-base">
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">React-native</span>
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">TypeScript</span>
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">Tailwind</span>
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">Python</span>
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">Flask</span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='relative top-0 flex items-center justify-center w-full col-span-7 col-start-6 marker:rounded-md aspect-square overflow-clip max-h-[600px]'>
                    <img className="absolute object-cover w-full h-full aspect-4/3 rounded-xl brightness-75 contrast-125"
                      src={Background1}
                      alt="background2" >
                    </img>
                    <div className='z-10 border-[#524D47] shadow-xl w-[30%] rounded-xl object-fit overflow-clip'>
                      <img className=""
                        src={SimPliSplitGif}
                        alt="SimPliSplit" >
                      </img>
                    </div>
                  </div>
                  <div class="flex items-end gap-x-[10px] col-span-5 col-start-6 pt-5">
                    <span class="border rounded-full border-[#524D47] flex px-3 py-1 bg-[#080807]">Mobile</span>
                    <span class="border rounded-full border-[#524D47] flex px-3 py-1 bg-[#080807]">GitHub</span>
                    <span class="border rounded-full border-[#524D47] flex px-3 py-1 bg-[#080807]">2023</span>
                  </div>
                </div>
              </div>

              {/* Food Swipe */}
              <div className="sticky top-0 border-t border-[#524D47] bg-[#080807] pb-[10em]" style={{ top: 'calc(10vh + 0em)', }}>

                <div className="grid gap-x-8 relative font-semibold min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12">
                  <h3 className="col-span-5 col-start-1 py-4 2xl:py-3 text-[3.5rem]">FoodSwipe</h3>
                  <div className="flex flex-col w-full col-span-5 col-start-1 pt-4 gap-y-4 text-heading">
                    <p className="font-thin text-balance text-[1.25rem] ">
                      Developed a Tinder-inspired restaurant discovery app designed to help users find the perfect dining spot.
                      The app allows users to swipe right for more details on local restaurants tailored to their location.
                    </p>

                    <div className="pt-4 border-t border-[#524D47]">
                      <div className="flex flex-col items-start gap-x-6">
                        <span className="flex items-center">
                          <div class="flex items-end gap-x-[10px] tracking-base">
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">React.js</span>
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">TypeScript</span>
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">Tailwind</span>
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">Next.js</span>
                            <span class="border rounded-full border-[#524D47] flex px-3 py-1">Google APIs </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='relative top-0 flex items-center justify-center w-full col-span-7 col-start-6 marker:rounded-md aspect-square overflow-clip max-h-[600px]'>
                    <img className="absolute object-cover w-full h-full aspect-4/3 rounded-xl brightness-75 contrast-125"
                      src={Background2}
                      alt="background2" >
                    </img>
                    <div className='z-10 w-5/6 space-y-4 rounded-lg aspect-4/3 overflow-clip'>
                      <img className="border-4 border-gray-700 rounded-lg shadow-md"
                        src={FoodSwipe}
                        alt="FoodSwipe" >
                      </img>
                    </div>

                  </div>
                  <div class="flex items-end gap-x-[10px] col-span-5 col-start-6 pt-5">
                    <span class="border rounded-full border-[#524D47] flex px-3 py-1 bg-[#080807]">Web-App</span>
                    <span class="border rounded-full border-[#524D47] flex px-3 py-1 bg-[#080807]">GitHub</span>
                    <span class="border rounded-full border-[#524D47] flex px-3 py-1 bg-[#080807]">2022</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='flex flex-col items-center justify-center '>
            <div className='text-center'>
              <div className='font-semibold text-[50px] '>
                Checkout More Projects
              </div>
              <a
                href="https://github.com/tadiday"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[35px] col-span-7 col-start-5 inline-block px-4 py-2 mt-4 font-semibold transition border bg-[#524D47] rounded-full border-[#080807] shadow-md hover:"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>



      </div>
    </div>
  );
};

export default Project;