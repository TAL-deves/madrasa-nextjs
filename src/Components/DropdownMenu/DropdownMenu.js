"use client"
import { motion } from 'framer-motion';

const menuItems = ['Home', 'About', 'Services', 'Contact'];

const DropdownMenu = ({ isOpen }) => {

    const menuItemVariants = {
        closed: { opacity: 0, y: -10 },
        open: (custom) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: custom * 0.1, // Stagger delay
          },
        }),
      };
      
  return (
    <motion.ul
      className={`dropdown-menu ${isOpen ? 'open' : ''}`}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
    >
      {menuItems.map((item, index) => (
        <motion.li
          key={item}
          custom={index}
          variants={menuItemVariants}
          className="menu-item text-white"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default DropdownMenu;
