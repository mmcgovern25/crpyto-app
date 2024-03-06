import React, { useState } from 'react';
import styles from '../style';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Stats = () => {
  const [counterOn, setCounterOn] = useState(false)


  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={()=> setCounterOn(false)} >
       <section className={`${styles.flexCenter} text-white flex-row flex-wrap sm:mb-20 mb-6 gap-2`}>
      <div>
        <span>{counterOn && <CountUp start={0} end={100} duration={2} delay={0} />} + </span>
        <span>expert coaches</span>
      </div>
      <div>
        <span>+978</span>
        <span>members joined</span>
      </div>
      <div>
        <span>+50</span>
        <span>fitness programs</span>
      </div>
    </section>
    </ScrollTrigger>

  )
}

export default Stats
