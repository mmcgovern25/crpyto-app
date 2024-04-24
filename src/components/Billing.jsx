import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import { apple, screenshot3, google } from '../assets'; // Make sure to import the required assets
import styles, { layout } from '../style';

const Billing = () => {
  const [animate, setAnimate] = useState(false);

  const handleScrollTrigger = () => {
    setAnimate(true);
  };

  return (
    <ScrollTrigger onEnter={handleScrollTrigger}>
      <section
        id='product'
        className={layout.sectionReverse}
      >
        <div className={layout.sectionImgReverse}>
        <motion.img
  src={screenshot3}
  alt='screenshot'
  className={`w-[100%] h-[100%] relative z-[5] rounded-[30px] ${animate ? '' : 'animate__animated animate__slideInLeft'}`}
  initial={{ x: '-5vw' }} // Move element off-screen to the left
  animate={{ x: animate ? 0 : '-5vw' }} // Move element back to its original position on scroll
  transition={{ type: 'easeIn', duration: 3 }} // Adjust animation duration and type as needed
/>


          <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
          <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'  />

        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Signing Up has Never Been<br /> <span className='text-gradient'>So Easy.</span><br className='sm:block hidden'/></h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Your new account will be ready to go in as quick as 30 seconds, so you waste no time getting to the data.
          </p>

          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
            <img src={google} alt='google_store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Billing;
