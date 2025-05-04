// src/components/Destaques.jsx
import React from 'react';

function Destaques() {
  return (
    <div style={destaquesContainerStyle}>
      <h2 style={titleStyle}>Heróis que merecem uma chance</h2>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>Card Animal 1</div>
        <div style={cardStyle}>Card Animal 2</div>
        <div style={cardStyle}>Card Animal 3</div>
        <div style={cardStyle}>Card Animal 4</div>
      </div>
    </div>
  );
}

// Estilos para a seção Destaques
const destaquesContainerStyle = {
  textAlign: 'center',
  marginTop: '2rem',
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
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
};

export default Destaques;
