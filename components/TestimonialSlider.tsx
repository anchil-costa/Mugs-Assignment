
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Testi1 from '@/public/testi1.jpeg'
import Testi2 from '@/public/Testi2.jpeg'
import Image from 'next/image';

const testimonials = [
  {
    image: Testi1,
    text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
    name: 'John Doe',
    position: 'CEO',
  },
  {
    image: Testi2,
    text: 'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
    name: 'Jane Smith',
    position: 'CTO',
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      className="my-8"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="flex  items-center justify-center">
            <div className='flex'>
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="h-[150px] w-[400px] rounded-full mb-4"
            />
            </div>
            <div className='flex flex-col'>
              <div>
            <p className="text-lg text-center text-gray-600 italic mb-4">
              <span className="text-orange-500 text-3xl mr-2 poppins">“</span>
              {testimonial.text}
              <span className="text-orange-500 text-3xl ml-2">”</span>
            </p>
            </div>
            <div className='flex flex-col ml-[20px]'>
            <p className=" font-semibold text-lg poppins">{testimonial.name}</p>
            <p className=" text-sm text-gray-500 poppins">{testimonial.position}</p>
            </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;



