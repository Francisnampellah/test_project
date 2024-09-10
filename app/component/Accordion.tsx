import { useState } from 'react';
import { motion } from 'framer-motion';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title,children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full text-left py-4 flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium">{title}</span>
        <motion.svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        style={{ overflow: 'hidden' }}
        transition={{ duration: 0.4 }}
      >
        <div className="px-4 pb-4 text-gray-700">{children}</div>
      </motion.div>
    </div>
  );
};

export default Accordion;
