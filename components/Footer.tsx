import React from 'react'
import SocialLogos from './SocialLogos';


const Footer = () => {
    return (
     <div className='flex flex-col h-fit w-full mt-[110px]'>
        <div className='flex flex-col h-[400px] bg-[#F8F8F8] justify-evenly items-center'>
        <div className='flex poppins'> Mumair</div>
            <div className='flex'>
            <ul className='flex space-x-8 items-center justify-center hover:cursor-pointer'>
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
            </div>
            <div><SocialLogos/></div>
        </div>
        <div className='flex w-full h-[50px] bg-[#545454] justify-center items-center'>
            <p className='text-white'>© 2023 Mumair All Rights Reserved , Inc.</p>
        </div>
     </div>
    );
  };

export default Footer