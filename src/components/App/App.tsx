import React from 'react';
import './App.scss';
import { Grommet } from 'grommet';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import BlogsList from '../BlogsList/BlogsList';


function App() {
    return (
      <Grommet plain>
          <div
            className={'box-border w-screen px-10 py-8 sm:p-3 space-y-10 flex flex-col justify-start items-center'}>
              <Header/>
              <Banner/>
              <BlogsList/>
          </div>
      </Grommet>);
}


// @ts-ignore
export default App;
