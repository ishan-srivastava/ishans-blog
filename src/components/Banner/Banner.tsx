import React from 'react';
import './Banner.scss';

const Banner: React.FC = () => (
  <div
    className="w-full bg-primary p-10 sm:p-3 rounded flex flex-row justify-between items-center sm:flex-col h-70-screen">
      <div className='flex flex-col justify-center items-start space-y-2 max-w-xs'>
          <p className={'text-4xl sm:text-xl text-left sm:text-center w-full font-bold'}>Crisp.<br/>Clear.<br/>Concise.</p>
          <p className={'text-xs text-left sm:text-center'}>
              Namaste!<br/>Welcome to my little tech-blog corner on the internet. I am a full time software developer, and have a passion
              for boiling down complex tech topics to simple explanations. Because if you can't explain that to a <i>five year old</i>, do you really understand it?
          </p>
      </div>
      <div className='flex-grow-1 flex-shrink-1 flex flex-row justify-end items-center w-full h-full'>
          <img src={'/assets/images/banner-reading.svg'} className={'h-full'}/>
      </div>
  </div>
);

export default Banner;
