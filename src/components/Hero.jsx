import React, { useRef } from 'react';
import { Suspense } from 'react';
import styles from '../style';
import { discount } from '../assets';
import GetStarted from './GetStarted';
import Bitcoin from '../../public/Bitcoin';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount}
            alt="discount"
            className='w-[32px] h-[32px]'
          />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient'  />

          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>Start</span> your {" "}
          <span className='text-white'>FREE</span> 30 day trial today
          </p>

        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            The Next <br className="sm:block hidden" />
            {" "}
            <span className='text-gradient'>Generation</span>
            {" "}
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Payment Method.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.</p>
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

    </section>


  );
};

export default Hero;
