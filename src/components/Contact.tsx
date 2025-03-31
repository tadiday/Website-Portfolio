import { forwardRef } from "react";


const Contact = (() => {
  return (
    <section id='contact' className="bg-home min-h-screen rounded-[12px] z-20">
      < div className="relative z-20 w-full overflow-x-clip" >
        <div className="flex flex-col w-full gap-y-space-lg md:gap-y-space-2xl" >
          <div className='grid gap-x-2 grid-cols-[repeat(20,minmax(0,1fr))] md:grid md:grid-cols-20 text-home' >
            <h2 className='col-span-5 col-start-2 text-[120px] font-semibold text-home'>
              CONTACT
            </h2>
            <h2 className='col-span-1 col-start-9 text-[120px] font-semibold'>
              (4)
            </h2>

            <div id = "contact-container" className="col-span-18 min-h-[750px] col-start-2 bg-section rounded-3xl">
              email
              phone
              linkedin
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});


export default Contact;