import React from 'react';

const Experience = ({ refProp }) => {
  return (
    <div ref={refProp} className="bg-blue-100 h-[58rem] rounded-[12px]">
      <div>Works</div>
      <div className='flex flex-col gap-5'>
      <p> 
        Rural Trash Collection Research Jan 2024 - Present
        Virginia Tech Blacksburg, VA
        • Developing an automated trash collection robot, allowing the monitor/operator to work remotely.
        • Selecting and installing sensors necessary for autonomous navigation and trash collection.
        • Identifying and reviewing algorithms to govern path planning, obstacle avoidance, safety, and trash collection.</p>

      <p>
      Undergraduate Teaching Assistant May 2023 - Present
      Virginia Tech Blacksburg, VA
      • Courses: CS 2505 & CS 2506 - Computer Organization I & II
      • Conducted office hours, providing troubleshooting support and answering questions to enhance students’ understanding.
      • Actively guided and monitored online forums and lab sessions to provide interactive learning experiences.
      </p>

      <p>
      SMART Research Aug 2023 - Dec 2023
      Virginia Tech Blacksburg, VA
      • Conducted research and successfully designed a Software Managed Arduino-based Residential Toolkit (SMART).
      • Integrated Raspberry Pi to facilitate connectivity and optimized system functionality for an enhanced user experience.
      • Engineered a user-friendly mobile application using Swift, enabling remote control and monitoring of smart devices.
      Card Isle Sep 2023 - Nov 2023 
      </p>

      <p>
      Software Engineer Intern
      • Collaborated as a front-end development and testing intern, actively contributing to client projects.
      • Utilized Alpine.js to craft dynamic and responsive web interfaces, enhancing user interactions and experiences.
      • Implemented Playwright testing for a demo website to ensure functionality within a single-page layout. 
      </p>
      </div>
    </div>
  );
};

export default Experience;