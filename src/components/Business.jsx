import React, { useState } from 'react';
import styles, { layout } from '../style';
import Button from './Button';
import { features } from '../constants';
import { motion } from 'framer-motion';
import ScrollTrigger from 'react-scroll-trigger';


const Business = () => {
  const [animateIcons, setAnimateIcons] = useState(false);

  const handleScroll = (visible) => {
    setAnimateIcons(visible);
  };

  return (
    <ScrollTrigger onEnter={() => handleScroll(true)} onExit={() => handleScroll(false)}>
      <section id='features' className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>You do the <span className='text-gradient'>Investing,</span> <br className="sm:block hidden" /> we’ll do the <span className='text-gradient'>Tracking.</span></h2>

          <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
            With the right historical data, and a forecast for future trends, you´ll know when exactly when it is the time to buy, or sell.
          </p>
          <Button styles={'mt-20'} />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
  {features.map((feature, index) => (
    <div
      key={feature.id}
      className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} bg-blue-gradient-hover`}
    >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-goldishYellow dim-on-hover`}>
        <motion.img
          src={feature.icon}
          alt='icon'
          className='w-[50%] h-[50%] object-contain'
          animate={{ y: animateIcons ? 0 : -100 }}
          transition={{ duration: 2.5, delay: index * 0.1 }}
        />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 card-title'>
          {feature.title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1 card-content'>
          {feature.content}
        </p>
      </div>
    </div>
  ))}
</div>

      </section>
    </ScrollTrigger>
  );
};

export default Business;
