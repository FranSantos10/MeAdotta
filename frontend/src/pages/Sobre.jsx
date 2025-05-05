import React from 'react';

function Sobre() {
    return (
        <div>
            <div style={sobreContainerStyle}>
                <h2 style={titleStyle}>Sobre o Me Adotta</h2>
                <p style={contentStyle}>
                    O Me Adotta é uma plataforma dedicada a ajudar animais abandonados a encontrar um lar seguro e amoroso. Através da nossa plataforma, protetores podem cadastrar animais para adoção, enquanto adotantes podem encontrar o animal perfeito para sua casa.
                </p>
                <p style={contentStyle}>
                    Acreditamos que cada animal merece uma chance e estamos comprometidos em tornar o processo de adoção mais simples e transparente. Estamos aqui para ajudar tanto os animais quanto os adotantes, promovendo conexões reais e duradouras.
                </p>
                <p style={contentStyle}>
                    Junte-se a nós e faça a diferença na vida de um animal!
                </p>
            </div>
        </div>

    );
}

// Estilos para a página Sobre
const sobreContainerStyle = {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Poppins',
};

const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
};

const contentStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginTop: '1rem',
    lineHeight: '1.5',
};

export default Sobre;
