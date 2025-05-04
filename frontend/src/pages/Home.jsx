import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Destaques from '../components/Destaques';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />      
      <Destaques />
      <Footer /> 
    </div>
  );
}

export default Home;
