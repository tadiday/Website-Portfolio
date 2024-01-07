import React from 'react';

const About = ({ refProp }) => {
  return (
    <div ref={refProp} className="bg-blue-100 h-[64rem]">
      <div>About</div>
    </div>
  );
};

export default About;