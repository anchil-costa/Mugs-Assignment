// components/MobileMenu.tsx
import { FC } from 'react';
import { IoMdClose } from "react-icons/io";
import Button from '@/components/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-white transition-transform transform h-full w-full ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-black">
        <IoMdClose size={28} />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center space-y-4">
        <a href="#" className="text-black text-lg">
          Home
        </a>
        <a href="#" className="text-black text-lg">
          About me
        </a>
        <a href="#" className="text-black text-lg">
          Services
        </a>
        <a href="#" className="text-black text-lg">
          Projects
        </a>
        <a href="#" className="text-black text-lg">
          Testimonials
        </a>
        <a href="#" className="text-black text-lg">
          Contact
        </a>
        <Button label='Download CV'/>
      </nav>
    </div>
  );
};

export default MobileMenu;
