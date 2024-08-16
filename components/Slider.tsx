
import React from 'react';

const SkillSlider = ({ skillName, value }) => {
  return (
    <div className="my-4">
      <div className="flex justify-between items-center">
        <span className="poppins font-bold">{skillName}</span>
      </div>
      <div className="relative mt-2">
        <div className="absolute top-0 left-0 h-2 rounded-full bg-orange-500" style={{ width: `${value}%` }}></div>
        <div className="h-2 rounded-full bg-gray-200"></div>
        <div
          className="absolute top-0 right-0 h-4 w-4 bg-orange-500 rounded-full -mt-1 -mr-1 border-2 border-white"
          style={{ left: `calc(${value}% - 8px)` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillSlider;
