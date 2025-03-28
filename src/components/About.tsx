

const About = (() => {

  return (
    <section id='about' className="h-full rounded-t-[25px] bg-[#080807] p-4 z-30  text-[#bebebe]">
      <div className="relative z-20 w-full overflow-x-clip">
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20 text-home'>
            <h2 className='col-span-8 col-start-2 text-[120px] font-semibold'>
              WHO AM I?
            </h2>
            <h2 className='col-span-1 col-start-10 text-[120px] font-semibold'>
              (3)
            </h2>

          </div>


          <div className='pr-[5%] pb-[5%] pl-[5%] rounded-b-3xl min-h-screen text-home '>
            <div className="w-full pt-16">
              <div className="flex flex-col justify-between  py-5 mt-12 gap-y-16 border-t border-[#524D47]">
                <div className="grid gap-x-8 relative h-full min-h-[30vh] flex-col place-items-start pt-1 md:grid md:min-h-[40vh] md:grid-cols-12 ">

                  <div  className="object-contain w-full shadow-md grayscale col-span-4 col-start-1 py-4 pl-2">
                    <img
                      className="object-contain w-full  border-gray-700 rounded-2xl shadow-md grayscale col-span-4 col-start-1 overflow-hidden"
                      src="../assets/me2.jpg"
                      alt="Example" />
                  </div>


                  <div className='flex flex-col col-span-10 col-start-6 text-[20px] font-thin gap-y-10 py-4'>

                    <p className="text-[30px] text-balance font-light">
                      With a passion for full-stack development, I specialize in creating user-friendly front-end designs and integrating them with robust back-end systems,
                      combining creativity and technical expertise to deliver impactful user experiences.
                    </p>
                    <div className="flex flex-col gap-x-10 gap-y-space-sm lg:flex-row text-[20px]">

                      <span className='flex h-fit overflow-clip font-mono tracking-mono flex-grow max-w-[150px]'>
                        <span className="h-full text-nowrap">(About Me)</span>
                      </span>
                      <p className="max-w-[40ch] text-balance">
                        I’m a Computer Science student at Virginia Tech, graduating May 2025. I’ve contributed to projects involving optimizing systems,
                        automation tools, and user interfaces allowing me to build well-rounded solutions and collaborating across development areas.
                      </p>




                    </div>

                    <div className="flex flex-col gap-x-10 gap-y-space-sm lg:flex-row ">

                      <span className='flex h-fit overflow-clip font-mono tracking-mono flex-grow max-w-[150px]'>
                        <span className="h-full text-nowrap ">(Hobbies)</span>
                      </span>
                      <p className="max-w-[40ch] text-balance">
                        When I’m not coding, I like to play games and watch anime, as well as I enjoy try new restaurants and cooking.
                        I also love to travel and currently have (Seattle, Miami, Austin, and Las Vegas) on my bucket travel list.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
});

export default About;
