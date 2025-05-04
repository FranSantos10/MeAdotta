import React from 'react';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div style={bannerStyle}>
      <div style={contentStyle}>
        <div style={leftSideStyle}>
          <h1 style={titleStyle}>Adote um amigo!</h1>
          <div style={buttonGroupStyle}>
            <Link to="/adotar">
              <button style={buttonStyle}>Quero Adotar</button>
            </Link>
            <Link to="/protetor">
              <button style={buttonStyle}>Sou Protetor</button>
            </Link>
          </div>
        </div>
        <img
          src="/banner.png"
          alt="Banner Me Adotta"
          style={imageStyle}
        />
      </div>
    </div>
  );
}

// Estilos para o Banner
const bannerStyle = {
  backgroundColor: '#eaf6ff',
  height: '300px', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Poppins',
};

const contentStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 4rem',
  boxSizing: 'border-box',
};

const titleStyle = {
  fontSize: '2.8rem',
  fontWeight: 'bold',
  margin: 0,
  textAlign: 'left',
  width: '100%',
};

const buttonGroupStyle = {
  display: 'flex',
  gap: '1rem', 
};

const buttonStyle = {
  padding: '0.8rem 2.5rem',
  fontSize: '1rem',
  backgroundColor: '#74C0FC', 
  color: '#fff',
  border: 'none',
  borderRadius: '12px', 
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)', // Sombras do botão
  whiteSpace: 'nowrap',
};

const leftSideStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '1.5rem',
};

const imageStyle = {
  height: '100%',
  maxHeight: '200px', // Garantir que a imagem não ultrapasse a altura do banner
  objectFit: 'contain',
};

export default Banner;
