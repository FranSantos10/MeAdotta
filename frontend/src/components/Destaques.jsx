import React from 'react';

function Destaques() {
  // Dados dos animais (exemplo)
  const animals = [
    { name: 'Tom', photo: '/animal.jpg' },
    { name: 'Fred', photo: '/animal.jpg' },
    { name: 'Luna', photo: '/animal.jpg' },
    { name: 'Max', photo: '/animal.jpg' },
  ];

  return (
    <div style={destaquesContainerStyle}>
      <h2 style={titleStyle}>Heróis que merecem uma chance</h2>
      <div style={cardContainerStyle}>
        {animals.map((animal, index) => (
          <div key={index} style={cardStyle}>
            <img src={animal.photo} alt={animal.name} style={cardImageStyle} />
            <h4 style={cardNameStyle}>{animal.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

// Estilos para a seção Destaques
const destaquesContainerStyle = {
  textAlign: 'center',
  marginTop: '2rem',
  fontFamily: 'Poppins',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '1rem',
};

const cardStyle = {
  width: '200px',
  height: '250px',
  backgroundColor: '#f8f9fa',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
  padding: '1rem',
};

const cardImageStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const cardNameStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginTop: '1rem',
  color: '#343A40',
};

export default Destaques;
