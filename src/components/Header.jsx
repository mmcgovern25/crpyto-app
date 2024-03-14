import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Header = () => {

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/Dashboard" className="flex items-center"> {/* Added flex and items-center here */}
        <img src={logo} alt="hoobank" className="w-[60px] h-[60px] mr-2" /> {/* Added mr-2 for spacing */}
        <h1 className="text-white font-poppins text-gradient text-2xl anta-regular -ml-1">RYTO TRACKERS</h1>
      </Link>
      <div className="absolute z-[3] right-0 -top-1/2 transform translate-x-1/2 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[3] right-0 -top-1/2 transform translate-x-1/2 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] right-0 -top-1/2 transform translate-x-1/2 w-[50%] h-[50%] rounded-full blue__gradient" />
    </nav>

  );
};

export default Header;
