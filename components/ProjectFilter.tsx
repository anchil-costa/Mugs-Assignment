import React from 'react';

const ProjectFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'
          } hover:bg-orange-500 hover:text-white transition`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
