import React from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  const containerVariants = {
    hidden: {
      opacity: 0, // Initially hidden
    },
    visible: {
      opacity: 1, // Fades in
      transition: {
        delay: 1.3, // Delay before the animation starts
      },
    },
  };

  return (
    <a href="/signin">
      <motion.div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer button-hover getstarted-theme overflow-hidden`}
        initial="hidden" // Initial state
        animate="visible" // Final state
        variants={containerVariants} // Animation variants
      >
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full overflow-hidden`}>
          <div className={`${styles.flexStart} flex-row`}>
            <p className='font-poppins font-medium text-[18px] leading-[23px] mr-'>
              <span className='text-gradient'>Get</span>
            </p>
            <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain' />
          </div>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>
        </div>
      </motion.div>
    </a>
  );
};

export default GetStarted;
