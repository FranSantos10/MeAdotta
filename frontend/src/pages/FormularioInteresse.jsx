import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FormularioInteresse() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div>
            <Navbar /> {/* Navbar no topo */}

            <div style={pageStyle}>
                <h2 style={titleStyle}>Estamos felizes com seu interesse!</h2>

                {!formSubmitted ? (
                    <form onSubmit={handleSubmit} style={formStyle}>
                        <div style={inputGroupStyle}>
                            <label htmlFor="nome">Nome Completo:</label>
                            <input type="text" id="nome" name="nome" required style={inputStyle} />
                        </div>

                        <div style={inputGroupStyle}>
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="tel" id="telefone" name="telefone" required style={inputStyle} />
                        </div>

                        <div style={inputGroupStyle}>
                            <label>Tipo de Lar:</label>
                            <div style={checkboxGroupStyle}>
                                <label>
                                    <input type="checkbox" name="tipoLar" value="Casa" />
                                    Casa
                                </label>
                                <label>
                                    <input type="checkbox" name="tipoLar" value="Apartamento" />
                                    Apartamento
                                </label>
                                <label>
                                    <input type="checkbox" name="tipoLar" value="Quintal" />
                                    Quintal
                                </label>
                            </div>
                        </div>

                        <div style={inputGroupStyle}>
                            <label>Você tem outros animais?</label>
                            <div style={radioGroupStyle}>
                                <label>
                                    <input type="radio" name="outrosAnimais" value="Sim" />
                                    Sim
                                </label>
                                <label>
                                    <input type="radio" name="outrosAnimais" value="Nao" />
                                    Não
                                </label>
                            </div>
                        </div>

                        <div style={buttonGroupStyle}>
                            <button type="submit" style={buttonStyle}>Enviar Interesse</button>
                        </div>
                    </form>
                ) : (
                    <div style={successMessageStyle}>
                        <h3>Obrigado! O protetor entrará em contato em breve.</h3>
                    </div>
                )}
            </div>

            <Footer /> {/* Footer no final */}
        </div>
    );
}

// Estilos da página
const pageStyle = {
    padding: '2rem',
    maxWidth: '1440px',
    margin: '0 auto',
    textAlign: 'center',
};

const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: '500px',
};

const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
};

const inputStyle = {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '100%',
};

const checkboxGroupStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'space-between',
};

const radioGroupStyle = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'space-between',
};

const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'center', // Centraliza o botão
    marginTop: '1rem',
};

const buttonStyle = {
    padding: '1rem 2rem',
    backgroundColor: '#74C0FC',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
};

const successMessageStyle = {
    marginTop: '2rem',
    backgroundColor: '#e0ffe0',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

// Exportando o componente
export default FormularioInteresse;
