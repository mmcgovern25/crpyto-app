import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../config/api";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins());
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <div className="flex flex-row items-center justify-center cursor-pointer uppercase text-white" key={coin.id}>
        <Link
          to={`/coins/${coin.id}`}
          className="flex items-center"
        >
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
          />
          <span>
            {coin?.symbol}
            &nbsp;
            <span
              className={
                profit ? "text-green-500 font-semibold" : "text-red-500 font-semibold"
              }
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>
          <span className="text-lg font-semibold">
            {numberWithCommas(coin?.current_price.toFixed(2))}
          </span>
        </Link>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="flex flex-row items-center h-1/2">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
