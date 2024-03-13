import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = ({ hideDropdown }) => {
  const [toggle, setToggle] = useState(false);

  const containerVariants = {
    hidden: {
      x: '5vw', // Move element off-screen to the right
    },
    visible: {
      x: 0, // Move element back to its original position
      transition: {
        type: 'ease', // You can adjust the transition type as needed
        stiffness: 100,
        delay: 0.8, // Delay before the animation starts
      },
    },
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[60px] h-[60px]" />
      <h1 className="text-white font-poppins text-gradient text-2xl anta-regular">RYTO TRACKERS</h1>

      <div className="absolute z-[3] right-0 -top-1/2 transform translate-x-1/2 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] right-0 -top-1/2 transform translate-x-1/2 w-[50%] h-[50%] rounded-full blue__gradient" />

      {!hideDropdown && (
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white hover-blue-gradient hover:text-yellow-200`}
              variants={containerVariants} // Animation variants
              initial="hidden" // Initial state
              animate="visible" // Final state
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          ))}
        </ul>
      )}

      {!hideDropdown && (
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white hover-blue-gradient hover:text-yellow-200`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
