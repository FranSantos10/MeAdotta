import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={navbarStyle}>
      <div style={logoContainerStyle}>
        <img src="/logo.png" alt="Me Adotta" style={logoImageStyle} />
      </div>
      <div style={menuStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/adotar" style={linkStyle}>Adote</Link>
        <Link to="/cadastro" style={linkStyle}>Cadastro</Link>
        <Link to="/sobre" style={linkStyle}>Sobre</Link>
      </div>
    </div>
  );
}

// 🖼️ Estilos do Navbar
const navbarStyle = {
  height: '100px',
  backgroundColor: '#F4FAFF',
  padding: '1rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff',
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};


const logoImageStyle = {
  height: '60px', // Ajuste o tamanho da imagem do logo
  objectFit: 'contain', // Garantir que a imagem não distorça
};

const menuStyle = {
  display: 'flex',
  gap: '2rem',
};

const linkStyle = {
  color: '#343A40',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
};

export default Navbar;
