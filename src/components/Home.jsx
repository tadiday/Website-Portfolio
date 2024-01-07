import React from 'react';

const Home = ({ refProp }) => {
  return (
    <div ref={refProp} className="bg-blue-100 h-[64rem]">
      <div>Home</div>
    </div>
  );
};

export default Home;