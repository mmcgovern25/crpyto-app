import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import { screenshot1 } from '../assets'; // Make sure to import the required asset
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
  const [animate, setAnimate] = useState(false);

  const handleScrollTrigger = () => {
    setAnimate(true);
  };

  return (
    <ScrollTrigger onEnter={handleScrollTrigger}>
      <section className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}><span className='text-gradient'>Compare & Constrast</span> <br className='sm:block hidden' /> Like Never Before.</h2>
          <p className={`${styles.paragraph}<span className='text-gradient'> max-w-[470px] mt-5 mb-5`}>Compatiable on both Mobile & Desktop versions, you'll be able to compare coins side by side at lightning speeds.</p>
          <Button styles='mt-10'/>
        </div>

        <motion.div
          className={layout.sectionImg}
          initial={{ x: '5vw' }} // Move element off-screen to the right
          animate={{ x: animate ? 0 : '5vw' }} // Move element back to its original position on scroll
          transition={{ type: 'easeIn', duration: 3 }} // Adjust animation duration and type as needed
        >
          <img src={screenshot1} alt='screenshot' className='w-[100%] h-[100%] rounded-[30px]' />
        </motion.div>
      </section>
    </ScrollTrigger>
  );
}

export default CardDeal;
