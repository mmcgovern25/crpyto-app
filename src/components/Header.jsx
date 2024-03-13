import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Header = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setShowDropdown(false);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/Dashboard" className="flex items-center"> {/* Added flex and items-center here */}
        <img src={logo} alt="hoobank" className="w-[60px] h-[60px] mr-2" /> {/* Added mr-2 for spacing */}
        <h1 className="text-white font-poppins text-gradient text-2xl anta-regular -ml-1">RYTO TRACKERS</h1>
      </Link>
      <div className="relative">
        <button
          className="text-white font-poppins text-lg anta-regular focus:outline-none"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {selectedCurrency}
          <svg
            className="w-5 h-5 ml-2"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12.667L15.333 7.333H4.66699L10 12.667Z"
              fill="currentColor"
            />
          </svg>
        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              onClick={() => handleCurrencyChange('USD')}
            >
              USD
            </button>
            <button
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              onClick={() => handleCurrencyChange('Euro')}
            >
              Euro
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
