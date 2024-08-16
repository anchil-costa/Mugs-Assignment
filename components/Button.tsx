import React from 'react'

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({label})=>{
  return (
    <div>
        <button className=' poppins flex h-[40px] w-fit px-[18px] bg-[#FD6F00] text-white text-[15px] justify-center items-center rounded-[5px] hover:opacity-90'>{label}</button>
        </div>
  );
};

export default Button