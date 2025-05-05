import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Destaques from '../components/Destaques';

function Home() {
  return (
    <div>
      <Banner />      
      <Destaques />
    </div>
  );
}

export default Home;
