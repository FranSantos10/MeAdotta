import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('tokenProtetor');
    setLogado(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('tokenProtetor');
    localStorage.removeItem('protetorEmail');
    navigate('/');
    window.location.reload();
  };

  return (
    <div style={navbarStyle}>
      <div style={logoContainerStyle}>
        <img src="/logo.png" alt="Me Adotta" style={logoImageStyle} />
      </div>
      <div style={menuStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/adotar" style={linkStyle}>Adote</Link>
        <Link to="/cadastrar" style={linkStyle}>Cadastro</Link>
        <Link to="/sobre" style={linkStyle}>Sobre</Link>
        {logado && (
          <button onClick={handleLogout} style={logoutButtonStyle}>
            Sair
          </button>
        )}
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
  fontFamily: 'Poppins',
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
  alignItems: 'baseline',
};

const linkStyle = {
  color: '#343A40',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
};

const logoutButtonStyle = {
  backgroundColor: '#d16666',
  color: '#fff',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default Navbar;
