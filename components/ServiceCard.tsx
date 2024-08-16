// components/ServiceCard.js
import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-[#F8F8F8] shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="flex mb-4">
        <Image src={icon} alt={`${title} icon`} className="h-12 w-12" />
      </div>
      <h3 className="text-xl font-semibold  mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
