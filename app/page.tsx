'use client';

import Button from '@/components/Button';
import SkillSlider from '@/components/Slider';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';
import TestimonialSlider from '@/components/TestimonialSlider';
import Image1 from '@/public/image1.png';
import Image2 from '@/public/image2.png';
import UiImage from '@/public/ui_img.png';
import AdImage from '@/public/ad_img.png';
import GdImage from '@/public/gd_img.png';
import WdImage from '@/public/wd_img.png';
import WdProj1 from '@/public/wd_proj1.png';
import WdProj2 from '@/public/wd_proj2.png';
import WdProj3 from '@/public/wd_proj3.png';
import SocialLogos from '@/components/SocialLogos';
import Image from 'next/image';
import { useState } from 'react';


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Web Design');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const categories = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'];

  const skills = [
    { name: 'UX', value: 90 },
    { name: 'Website Design', value: 75 },
    { name: 'App Design', value: 85 },
    { name: 'Graphic Design', value: 70 },
  ];

  const services = [
    {
      icon: UiImage,
      title: 'UI/UX',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
    },
    {
      icon: WdImage,
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
    },
    {
      icon: AdImage,
      title: 'App Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
    },
    {
      icon: GdImage,
      title: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
    },
  ];

  const projects = [
    {
      image: WdProj1,
      title: 'AirCalling Landing Page Design',
      category: 'Web Design',
    },
    {
      image: WdProj2,
      title: 'Business Landing Page Design',
      category: 'Web Design',
    },
    {
      image: WdProj3,
      title: 'Ecom Web Page Design',
      category: 'Web Design',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="flex flex-col poppins">
      {/* Hero Section */}
      <div className="lg:flex justify-between  mt-[60px] gap-8 px-4 sm:px-16 lg:px-40 space-y-12 lg:space-y-0">
        <div className='flex flex-col mt-[0px] lg:mt-[50px]'>
        <div className="flex flex-col items-center lg:items-start ">
          <p className="poppins text-[24px] font-semibold">Hi I am</p>
          <p className="poppins text-[32px] font-semibold text-[#FD6F00]">
            Muhammad Umair
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-4">
          <p className="text-[60px] font-bold">UI & UX</p>
          <p className="text-[60px] font-bold">Designer</p>
        </div>
        <p className="poppins lg:w-[669px] leading-[31.5px] text-[18px] text-center lg:text-start ">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
          nibh lectus netus in. Aliquet donec morbi convallis pretium.
          Turpis tempus pharetra
        </p>
        <div className="flex justify-center lg:justify-start space-x-4 mt-[18px]">
          <Button label="Hire me" />
        </div>
        </div>
        <div className='flex flex-col items-center justify-center  lg:justify-start space-y-6'>
        <div className="relative w-[340px] h-[340px]">
          <Image
            src={Image1}
            alt="Product Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex justify-center items-center">
          <SocialLogos />
        </div>
        </div>
      </div>

      {/* About Section */}
      <div className=" lg:flex   justify-between mt-[110px] gap-8 px-4 sm:px-16 lg:px-40">
        <div className='flex flex-col'>
        <div className="flex lg:justify-start justify-center gap-4">
          <p className="text-[60px] font-semibold">About me</p>
        </div>
        <p className="poppins lg:w-[669px] leading-[31.5px] text-[18px] text-center lg:text-start">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
          nibh lectus netus in. Aliquet donec morbi convallis pretium.
          Turpis tempus pharetra
        </p>
        <div className="w-[350px] lg:w-[640px]">
          {skills.map((skill, index) => (
            <SkillSlider key={index} skillName={skill.name} value={skill.value} />
          ))}
        </div>
        </div>
        <div className='flex lg:justify-start justify-center mt-[30px] lg:mt-0'>
        <div className="relative w-[340px] h-[340px]">
          <Image
            src={Image2}
            alt="Product Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col items-center mt-[60px] gap-8 px-4 sm:px-16 lg:px-24">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[60px] font-bold">Services</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col items-center mt-[60px] gap-8 px-4 sm:px-20 lg:px-24">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[60px] font-bold">My Projects</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
            mauris est risus lectus. Phasellus consequat urna tellus
          </p>
        </div>
        <div className="max-w-7xl mx-auto p-6">
          <ProjectFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col items-center mt-[60px] gap-8 px-4 sm:px-16 lg:px-24">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[60px] font-bold">Testimonials</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
            mauris est risus lectus. Phasellus consequat urna tellus
          </p>
        </div>
        <div className="max-w-4xl mx-auto p-6">
          <TestimonialSlider />
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center mt-[60px] gap-8 px-4 sm:px-16 lg:px-24">
        <div className="flex flex-col items-center gap-4">
          <p className="text-[60px] font-bold">Lets Design Together</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <input
            className="w-[627px] h-[40px] px-4 rounded-[14px] bg-[#F8F8F8] border-[#AFAFAF] text-[#797979]"
            type="email"
            placeholder="Enter your email"
          />
          <Button label="Contact me" />
        </div>
      </div>
    </main>
  );
}