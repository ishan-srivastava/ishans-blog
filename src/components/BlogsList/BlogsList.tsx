import React from 'react';
import './BlogsList.scss';
import { TextInput } from 'grommet';
import { For } from 'react-extras';
import BlogCard from '../BlogCard/BlogCard';

const BlogsList: React.FC = () => (
  <div className="w-full flex flex-col justify-start items-start space-y-5">
      <div className={'flex w-full flex-row justify-between items-center '}>
          <p className={'font-semibold text-2xl'}>All blogs 🚀</p>
          <div className={'w-1/3'}>
              <TextInput className={'text-sm shadow-none w-full'}
                         placeholder="Search for tags, topics, content."
              />
          </div>
      </div>
      <div className={'flex w-full max-w-full grid grid-cols-6 gap-4 row-gap-20'}>
          <For of={['🌈', '🦄', '😎', '🌈', '🦄', '😎', '🌈', '🦄', '😎', '🌈',]} render={(item, index) =>
            <BlogCard key={index}/>
          }/>
      </div>
  </div>
);

export default BlogsList;
