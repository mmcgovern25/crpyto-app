import React from 'react';
import styles from '../style';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-blue-gradient rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
    <h2 className={`font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-black`}>Lets try our service now!</h2>
    <p className={`font-poppins font-normal text-black text-[18px] leading-[30.8px]`}>
      Everything you need to accept card payments and grow your business
      anywhere on the planet.
    </p>
    </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <a href="/signin" className={`button-theme relative h-12 w-40 overflow-hidden bg-gray-gradient font-semibold text-white shadow-2xl transition-all flex justify-center items-center before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-yellow-500 hover:before:-translate-x-40`}>
          Get Started
        </a>
      </div>
    </section>
  );
}

export default CTA;
