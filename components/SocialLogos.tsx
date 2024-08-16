import React from 'react'
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialLogos = () => {
  return (
    <div className='flex space-x-3'>
    <MdOutlineFacebook size={28} />
    <FaTwitter size={28} />
    <FaInstagram size={28} />
    <FaLinkedin size={28} />
    </div>
  )
}

export default SocialLogos