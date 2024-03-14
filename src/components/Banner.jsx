import React from 'react';
import banner2 from '../assets/banner2.jpg';
import Carousel from './Carousel';

// Tailwind CSS utility classes
const bannerStyles = "banner w-full h-96 rounded-2xl bg-cover bg-center flex flex-col justify-around w-full";
const containerStyles = "h-full w-full flex flex-col justify-center items-center space-y-";
const titleStyles = "text-3xl font-bold mb-4 text-gradient font-poppins anta-regular";
const subTitleStyles = "text-gray-600 capitalize";

const Banner = () => {
  return (
    <div className={bannerStyles} style={{ backgroundImage: `url(${banner2})` }}>
      <div className={containerStyles}>
        <div className="text-center">
          <h2 className={titleStyles}>Crypto Trackers</h2>
          <p className={subTitleStyles}>Get all the Info regarding your favorite Crypto Currency</p>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Banner;
