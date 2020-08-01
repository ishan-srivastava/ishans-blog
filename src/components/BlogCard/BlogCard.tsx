import React from 'react';
import './BlogCard.scss';

const BlogCard: React.FC = () => (
  <div className="BlogCard flex-column justify-end items-center rounded-lg space-y-3">
      <div style={{backgroundImage: `url("./assets/images/dummy/${Math.floor(Math.random() * (4)) + 1}.jpg")`}}
           className={'rounded-lg header-image'}></div>
      <div className={'h-3/5 text-sm font-semibold truncate'}>Javascript engines, you beauty !</div>
      <div className={'w-full flex-row-reverse justify-start items-center text-xs text-gray-darker'}>
          <p className={'text-xs text-gray-darker w-full text-right'}>July 14th 2020</p>
      </div>
  </div>
);

export default BlogCard;
