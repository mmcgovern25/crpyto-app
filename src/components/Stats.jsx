import React, { useState } from 'react';
import styles from '../style';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Stats = () => {
  const [counterOn, setCounterOn] = useState(false)


  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={()=> setCounterOn(false)} >
      <section className={`${styles.flexCenter} text-white flex-row flex-wrap sm:mb-20 mb-6 gap-5`}>
      <div>
        <span className='text-2xl sm:text-[40px] font-bold text-white'>{counterOn && <CountUp start={1526500} end={1527000} duration={5} delay={0} />}+ </span>
        <span className='font-poppins sm:text-[25px] text-gradient'>ACTIVE USERS</span>
      </div>
      <div>
      <span className='text-2xl sm:text-[40px] font-bold text-white'>{counterOn && <CountUp start={8750} end={9000} duration={5} delay={0} />}+ </span>
        <span className='font-poppins sm:text-[25px] text-gradient'>CRYPTO CURRENCIES TRACKED</span>
      </div>
      <div>
      <span className='text-2xl sm:text-[40px] font-bold text-white'>{counterOn && <CountUp start={226000} end={226580} duration={5} delay={0} />}+ </span>
      <span className='font-poppins sm:text-[25px] text-gradient'>FIVE STAR REVIEWS</span>
      </div>
    </section>
    </ScrollTrigger>

  )
}

export default Stats
