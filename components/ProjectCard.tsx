import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ image, title, category }) => {
  return (
    <div className="p-4">
      <div className="bg-[#FFEBDB] shadow-md rounded-lg overflow-hidden h-[400px] relative">
        <Image src={image} alt={title} className="w-full h-[400px] object-cover px-4 " />
        
      </div>
      <div className="p-4">
      <p className="text-orange-500 mt-2">{category}</p>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
    </div>
  );
};

export default ProjectCard;
