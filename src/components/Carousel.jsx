import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TrendingCoins } from '../config/api';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    try {
      const { data } = await axios.get(TrendingCoins('USD'));
      setTrending(data);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
      console.error("Error response data:", error.response.data); // Log response data if available
      console.error("Error response status:", error.response.status); // Log response status if available
      console.error("Error message:", error.message); // Log error message
    }
  };
  console.log(trending)

  useEffect(() => {
    fetchTrendingCoins();
  }, []); // Empty dependency array to run the effect only once on component mount


  const items = trending.map((coin) => {
      return (
        <Link to={`/coins/${coin.id}`} className='flex flex-col items-center cursor-pointer uppercase text-white h-20' key={''}>
          <img
            src={coin?.image}
            alt={coin.name}
            style={{ marginBottom: 10 }}

          />

          <span>{coin?.symbol}
            &nbsp;
          </span>

        </Link>
      )
  })

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };


  return (
    <div className="h-1/2 flex items-center">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuratiion={1500}
        disableDotsControls
        disableButtonsControls
            responsive={responsive}
            autoPlay
            items={items}
      />
    </div>
  );
};

export default Carousel;
