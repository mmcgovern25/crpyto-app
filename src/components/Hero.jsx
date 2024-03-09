import React from 'react';
import { Suspense } from 'react';
import styles from '../style';
import { discount } from '../assets';
import GetStarted from './GetStarted';
import Bitcoin from '../../public/Bitcoin';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from "framer-motion";

const Hero = () => {
  const titleVariants = {
    hidden: {
      x: '-5vw', // Move element off-screen to the left
    },
    visible: {
      x: 0, // Move element back to its original position
      transition: {
        type: 'Ease', // You can adjust the transition type as needed
        stiffness: 100,
        delay: 0.8, // Delay before the animation starts
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0, // Initially hidden
    },
    visible: {
      opacity: 1, // Fades in
      transition: {
        delay: 0.5, // Delay before the animation starts
      },
    },
  };

  return (
    <motion.section
      id='home'
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      initial="hidden" // Initial state
      animate="visible" // Final state
      variants={containerVariants} // Animation variants
    >
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient'  />
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 '>
          <img src={discount}
            alt="discount"
            className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>Start</span> your {" "}
            <span className='text-white'>FREE</span> 30 day trial today
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <motion.h1
            className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'
            variants={titleVariants} // Animation variants
          >
            The Next <br className="sm:block hidden" />
            {" "}
            <span className='text-gradient'>Generation</span>
            {" "}
          </motion.h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <motion.h1
          className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'
          variants={titleVariants} // Animation variants
        >
          Payment Method.
        </motion.h1>
        <div
          className={`${styles.paragraph} max-w-[470px] mt-5`} // Animation variants
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>


        <Canvas style={{ cursor: 'grab' }}>
          <ambientLight intensity={0.5} /> {/* Adjust the intensity as needed */}
          <pointLight position={[10, 10, 10]} />
          {/* Add more lights as necessary */}
          <OrbitControls />
          <Suspense fallback={null}>
            <Bitcoin />
          </Suspense>
        </Canvas>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </motion.section>
  );
};

export default Hero;
