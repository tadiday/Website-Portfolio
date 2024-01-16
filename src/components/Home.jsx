import React from 'react';

const Home = ({ refProp }) => {
  return (
    <div className='rounded-[12px] bg-red-100'> 
    <div ref={refProp} className=" h-[58rem] text-center flex flex-col justify-center items-center">
      <div style={{ fontSize: '30px', fontFamily: 'Roboto-Condensed' }}>Peter Cao</div>
      <div>Upcoming Software Engineer</div>
    </div>
    </div>

  );
};

export default Home;