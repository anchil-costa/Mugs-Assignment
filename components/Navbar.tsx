'use client'


import React from 'react'
import Button from './Button'
import { FiMenu } from "react-icons/fi";
import Image from 'next/image';
import { useState } from 'react';
import Logo from '@/public/logo (1).png'
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='flex pt-[40px] px-[150px]'>
    <div className='flex items-center justify-between h-[67px] w-[1420px]'>
      <div className='text-[25px] md:text-[18px]'>
        <Image src={Logo}></Image>
      </div>
      <div className='lg:hidden flex'><FiMenu onClick={toggleMenu} size={28}/></div>
      <div className='hidden lg:flex '>
        <ul className='flex space-x-1 items-center justify-center hover:cursor-pointer poppins font-semibold '>
          <li className='hover:bg-[#F8F8F8] px-[20px] py-[10px] rounded-lg'>Home</li>
          <li className='hover:bg-[#F8F8F8] px-[20px] py-[10px] rounded-lg'>About Me</li>
          <li className='hover:bg-[#F8F8F8] px-[20px] py-[10px] rounded-lg'>Services</li>
          <li className='hover:bg-[#F8F8F8] px-[20px] py-[10px] rounded-lg'>Projects</li>
          <li className='hover:bg-[#F8F8F8] px-[20px] py-[10px] rounded-lg'>Testimonials</li>
          <li className='hover:bg-[#F8F8F8] px-[20px] py-[10px] rounded-lg'>Contact</li>
          <li><Button label='Download CV' /></li>
        </ul>
      </div>
    </div>
    <MobileMenu isOpen={menuOpen} onClose={toggleMenu} />
    </div>
  )
}

export default Navbar