import React from 'react';
import Product from './Product.js';
import data from '../data.js';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt='Home Img'
        />

        <div className='home__row'>
          <Product dataObj={data[0]} />
          <Product dataObj={data[1]} />
        </div>

        <div className='home__row'>
          <Product dataObj={data[2]} />
          <Product dataObj={data[3]} />
          <Product dataObj={data[4]} />
        </div>

        <div className='home__row'>
          <Product dataObj={data[5]} />
        </div>
      </div>
    </div>
  );
}

export default Home;
