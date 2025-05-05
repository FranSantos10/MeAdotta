import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Filters from '../components/Filters';

function PerfilAnimal() {
    return (
        <div>
            <Navbar /> {/* Navbar no topo */}
            <div style={pageStyle}>
                <div style={filtersStyle}>
                    <Filters />
                </div>

                <div style={profileStyle}>
                    {/* Foto Grande */}
                    <img src="/animal.jpg" alt="Animal" style={imageStyle} />

                    {/* Informações do Animal */}
                    <div style={infoContainerStyle}>
                        <div style={nameAndAgeStyle}>
                            <h2 style={nameStyle}>Tom</h2>
                            <p style={ageStyle}>2 anos</p>
                        </div>

                        {/* Tags do Animal */}
                        <div style={tagsStyle}>
                            <span style={tagStyle}>Brincalhão</span>
                            <span style={tagStyle}>Médio</span>
                        </div>
                    </div>

                    {/* História do Resgate - Agora é um Textarea */}
                    <div style={historyContainerStyle}>
                        <label htmlFor="historyText" style={historyLabelStyle}>História do Resgate:</label>
                        <textarea 
                            id="historyText" 
                            value="Tom foi resgatado após acidente..."
                            readOnly 
                            style={historyStyle} 
                        />
                    </div>

                    {/* Resumo Rápido */}
                    <div style={summaryStyle}>
                        <div style={summaryItemStyle}>
                            <span>Se dá bem com crianças?</span> ✔️
                        </div>
                        <div style={summaryItemStyle}>
                            <span>Precisa de cuidados especiais?</span> ❌
                        </div>
                    </div>

                    {/* Botões de Interesse */}
                    <Link to="/adotar/Formulario-Adocao" style={buttonLinkStyle}>
                        <button style={buttonStyle}>Tenho Interesse</button>
                    </Link>

                    {/* Link para Voltar */}
                    <Link to="/adotar" style={backLinkStyle}>Voltar</Link>
                </div>
            </div>

            <Footer /> {/* Footer no final */}
        </div>
    );
}

// Estilos ajustados
const filtersStyle = {
    flex: 1,
    marginRight: '2rem',
    maxWidth: '350px',
    width: '100%',
};

const pageStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '2rem',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
};

const profileStyle = {
    maxWidth: '1440px',
    margin: '0 auto',
    textAlign: 'center',
    flex: 2,
};

const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
};

const infoContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
};

const nameAndAgeStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
};

const nameStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',  // Alinha os itens (nome e idade) ao topo
    textAlign: 'left',
    gap: '0.5rem',
};

const ageStyle = {
    fontSize: '1.2rem',
    color: '#555',
};

const tagsStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-start',
};

const tagStyle = {
    backgroundColor: '#E0E0E0',
    color: '#343A40',
    padding: '0.5rem 1rem',
    borderRadius: '12px',
};

const historyContainerStyle = {
    marginTop: '1.5rem',
    textAlign: 'left',
};

const historyLabelStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
};

const historyStyle = {
    width: '100%',
    height: '150px',
    fontSize: '1.2rem',
    color: '#555',
    borderRadius: '8px',
    border: '1px solid #ddd',
    resize: 'none', 
    backgroundColor: '#FFFFFF',
    outline: 'none',
    fontFamily: 'Open Sans, sans-serif',
};

const summaryStyle = {
    marginTop: '2rem',
};

const summaryItemStyle = {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
};

const buttonLinkStyle = {
    display: 'inline-block',
    marginTop: '2rem',
};

const buttonStyle = {
    padding: '1rem 3rem',
    fontSize: '1.2rem',
    backgroundColor: '#74C0FC',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
};

const backLinkStyle = {
    display: 'block',
    marginTop: '1rem',
    textDecoration: 'none',
    color: '#74C0FC',
    fontSize: '1rem',
};

export default PerfilAnimal;
