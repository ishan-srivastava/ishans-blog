import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';


function App() {
    return (
      <div className={'box-border h-screen w-screen px-10 sm:p-3 space-y-10 flex flex-col justify-start items-center'}>
          <Header/>
          <Banner/>
      </div>
    );
}


export default App;
