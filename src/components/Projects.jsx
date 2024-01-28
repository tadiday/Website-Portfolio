import React from 'react';

const Project = ({ refProp }) => {
  return (
    <div ref={refProp} className="bg-slate-400 h-full rounded-[12px] p-4">
      <div className='flex justify-center item-center font-display text-[50px] mb-5'>Projects</div>
      <ul className='grid md:gap-10 lg:gap-42'>
        <li className='bg-blue-100 rounded-[12px] p-11'>
          Portfolio Website
        <div>A web application that functions as a restaurant discovery app, similar to Tinder. It allows users to browse through local restaurants. The app utilizes the Google Places API to search for restaurants based on the user's location. The user interface enables users to swipe right if they want more information about a particular restaurant.</div>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Odit dolore reprehenderit consectetur iure.</p>
        <p>Est tempora voluptatibus necessitatibus ad?</p>
        <p>Iure rem harum eaque fugit.</p>
        <p>Ad architecto et ab quia.</p>
        </li>
        <li className='bg-blue-100 rounded-[12px] p-11'>Animation
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Odit dolore reprehenderit consectetur iure.</p>
        <p>Est tempora voluptatibus necessitatibus ad?</p>
        <p>Iure rem harum eaque fugit.</p>
        <p>Ad architecto et ab quia.</p>
        </li>
        <li className='bg-blue-100 rounded-[12px] p-11'>Credit Card Fraud Dection
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Odit dolore reprehenderit consectetur iure.</p>
        <p>Est tempora voluptatibus necessitatibus ad?</p>
        <p>Iure rem harum eaque fugit.</p>
        <p>Ad architecto et ab quia.</p>        </li>
        <li className='bg-blue-100 rounded-[12px] p-11'>Food Swipe
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Odit dolore reprehenderit consectetur iure.</p>
        <p>Est tempora voluptatibus necessitatibus ad?</p>
        <p>Iure rem harum eaque fugit.</p>
        <p>Ad architecto et ab quia.</p>
        </li>
      </ul>
    </div>
  );
};

export default Project;