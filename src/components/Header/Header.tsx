import React from 'react';
import './Header.scss';
import { RiSearch2Line } from 'react-icons/all';

const Header: React.FC = () => (
  <div className="h-25 w-full flex flex-row justify-between items-center">
      <p className='cursor-pointer text-3xl font-bold'>Ishan's blog logo</p>
      <span className='flex-grow flex flex-row justify-end items-center space-x-8'>
          <p className='cursor-pointer text-xs'>View All</p>
          <p className='cursor-pointer text-xs'>Ishan's Watchlist</p>
          <p className='cursor-pointer text-xs'>Contact me</p>
          <RiSearch2Line className='cursor-pointer'></RiSearch2Line>
      </span>

  </div>
);

export default Header;
