import React from 'react';
import { logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10 } from '../assets';
import '../carousel.css';

const Carousel = () => {
  return (
    <div className="scroller">
      <div className="tag-list scroller__inner">
        <img src={logo1} alt="Logo 1" className="carousel-image"/>
        <img src={logo2} alt="Logo 2" className="carousel-image" />
        <img src={logo3} alt="Logo 3" className="carousel-image"/>
        <img src={logo4} alt="Logo 4" className="carousel-image"/>
        <img src={logo5} alt="Logo 5" className="carousel-image"/>
        <img src={logo6} alt="Logo 6" className="carousel-image"/>
        <img src={logo7} alt="Logo 7" className="carousel-image"/>
        <img src={logo8} alt="Logo 8" className="carousel-image"/>
        <img src={logo9} alt="Logo 9" className="carousel-image"/>
        <img src={logo10} alt="Logo 10" className="carousel-image"/>
      </div>
    </div>
  );
}

export default Carousel;
