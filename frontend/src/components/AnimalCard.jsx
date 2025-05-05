import React from 'react';
import { Link } from 'react-router-dom';

function AnimalCard() {
  return (
    <div style={cardStyle}>
      <img src="/animal.jpg" alt="Animal" style={cardImageStyle} />
      <div style={cardInfoStyle}>
        <h4>Nome do Animal</h4>
        <p>Idade: 2 anos</p>
        <div style={tagsStyle}>
          <span style={tagStyle}>Brincalhão</span>
          <span style={tagStyle}>Médio</span>
        </div>
        <Link to="/adotar/PerfilAnimal">
          <button style={buttonStyle}>Ver Mais</button>
        </Link>
      </div>
    </div>
  );
}

// Estilos do card
const cardStyle = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
};

const cardImageStyle = {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
};

const cardInfoStyle = {
  padding: '1rem',
};

const tagsStyle = {
  display: 'flex',
  justifyContent: 'center', // Centralizar as tags
  gap: '0.5rem',
  marginTop: '0.5rem',
};

const tagStyle = {
  backgroundColor: '#E0E0E0',
  color: '#343A40',
  padding: '0.5rem',
  borderRadius: '12px',
  justifyContent: 'center', 
};

const buttonStyle = {
  padding: '0.5rem 2.5rem',
  fontSize: '1rem',
  backgroundColor: '#74C0FC',
  color: '#fff',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  marginTop: '1rem', // Espaço entre o botão e o restante do conteúdo
  transition: 'background-color 0.3s ease', // Efeito de transição no botão
  display: 'block', 
  marginLeft: 'auto', 
  marginRight: 'auto', 
};

export default AnimalCard;
