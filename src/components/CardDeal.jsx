import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import { card } from '../assets'; // Make sure to import the required asset
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
          <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>random text. random text. random text. random text. random text. random text. random text. random text. random text. random text. random text. random text. random text. random text. </p>
          <Button styles='mt-10'/>
        </div>

        <motion.div
          className={layout.sectionImg}
          initial={{ x: '5vw' }} // Move element off-screen to the right
          animate={{ x: animate ? 0 : '5vw' }} // Move element back to its original position on scroll
          transition={{ type: 'easeIn', duration: 3 }} // Adjust animation duration and type as needed
        >
          <img src={card} alt='card' className='w-[100%] h-[100%]' />
        </motion.div>
      </section>
    </ScrollTrigger>
  );
}

export default CardDeal;
