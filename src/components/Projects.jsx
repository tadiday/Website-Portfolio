import React from 'react';

const Project = ({ refProp }) => {
  return (
    <div ref={refProp} className="bg-blue-100 h-[58rem] rounded-[12px]">
      <div>Projects</div>
    </div>
  );
};

export default Project;