import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TrendingCoins } from '../config/api';

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    try {
      const { data } = await axios.get(TrendingCoins('USD'));
      setTrending(data);
    } catch (error) {
      console.error("Error fetching trending coins:", error);
    }
  };

  console.log(trending)

  useEffect(() => {
    fetchTrendingCoins();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="h-1/2 flex items-center">
      Carousel
    </div>
  );
};

export default Carousel;
