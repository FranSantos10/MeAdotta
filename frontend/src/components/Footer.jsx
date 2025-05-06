// Footer.js
import React from 'react';

function Footer() {
  return (
    <div style={footerStyle}>
      <p style={textStyle}>© 2025 Me Adotta. Todos os direitos reservados.</p>
    </div>
  );
}

// 🖼️ Estilos do Footer
const footerStyle = {
  backgroundColor: '#F4FAFF',
  width: '100%',
  color: '#343A40',
  padding: '2rem',
  textAlign: 'center',
  fontFamily: 'Poppins',
};

const textStyle = {
  fontSize: '1rem',
};


export default Footer;
