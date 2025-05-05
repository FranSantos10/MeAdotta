import React from 'react';
import Filters from '../components/Filters';
import AnimalCard from '../components/AnimalCard';
import '../assets/styles/Adotar.css'; 

function Adotar() {
  return (
    <div>    
      <div className='pageAdotar'>
        <div className='filtersAdotar'>
          <Filters /> 
        </div>
        
        <div className='animals-list'>
          <AnimalCard />
        </div>
      </div>
    </div>
  );
}
 
export default Adotar;
