import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Filters from '../components/Filters';
import AnimalCard from '../components/AnimalCard';

function Adotar() {
  return (
    <div>
      <Navbar /> 
      
      <div style={pageStyle}>
        <div style={filtersStyle}>
          <Filters /> 
        </div>
        
        <div style={animalsListStyle}>
          
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
          <AnimalCard />
        </div>
      </div>

      <Footer /> 
    </div>
  );
}

// Estilos da página
const pageStyle = {
  display: 'flex',
  flexDirection: 'row',  
  padding: '2rem',
};

const filtersStyle = {
  flex: 1,
  marginRight: '2rem',  
};

 const animalsListStyle = {
  flex: 3,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)', 
  gap: '1.5rem', 
};
 
export default Adotar;
