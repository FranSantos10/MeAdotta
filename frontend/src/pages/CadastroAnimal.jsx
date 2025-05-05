import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CadastroAnimal() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div>
            <Navbar /> {/* Navbar no topo */}

            <div style={pageStyle}>
                <h2 style={titleStyle}>Cadastrar Animal</h2>

                {!formSubmitted ? (
                    <form onSubmit={handleSubmit} style={formStyle}>
                        <div style={inputGroupStyle}>
                            <label htmlFor="nome">Nome do Animal:</label>
                            <input type="text" id="nome" name="nome" required style={inputStyle} />
                        </div>

                        <div style={inputGroupStyle}>
                            <label htmlFor="idade">Idade:</label>
                            <input type="number" id="idade" name="idade" required style={inputStyle} />
                        </div>

                        <div style={inputGroupStyle}>
                            <label htmlFor="porte">Porte:</label>
                            <select id="porte" name="porte" required style={selectStyle}>
                                <option value="pequeno">Pequeno</option>
                                <option value="medio">Médio</option>
                                <option value="grande">Grande</option>
                            </select>
                        </div>

                        <div style={inputGroupStyle}>
                            <label>Personalidade:</label>
                            <div style={checkboxGroupStyle}>
                                <label>
                                    <input type="checkbox" name="personalidade" value="brincalho" />
                                    Brincalhão
                                </label>
                                <label>
                                    <input type="checkbox" name="personalidade" value="calmo" />
                                    Calmo
                                </label>
                                <label>
                                    <input type="checkbox" name="personalidade" value="timido" />
                                    Tímido
                                </label>
                            </div>
                        </div>

                        <div style={inputGroupStyle}>
                            <label htmlFor="descricao">Descrição / História:</label>
                            <textarea id="descricao" name="descricao" required style={textareaStyle}></textarea>
                        </div>

                        <div style={inputGroupStyle}>
                            <label htmlFor="foto">Upload de Foto:</label>
                            <input type="file" id="foto" name="foto" required style={inputStyle} />
                        </div>

                        {/* Botão de Cadastro */}
                        <div style={buttonGroupStyle}>
                            <button type="submit" style={buttonStyle}>Cadastrar Animal</button>
                        </div>
                    </form>
                ) : (
                    <div style={successMessageStyle}>
                        <h3>Animal cadastrado com sucesso!</h3>
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

const selectStyle = {
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

const textareaStyle = {
    width: '100%',
    height: '150px',
    fontSize: '1rem',
    color: '#555',
    borderRadius: '8px',
    border: '1px solid #ddd',
    resize: 'none',
    backgroundColor: '#FFFFFF',
    outline: 'none',
    fontFamily: 'Open Sans, sans-serif',
};

const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'center', // Centraliza o botão
    marginTop: '1rem',
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

const successMessageStyle = {
    marginTop: '2rem',
    backgroundColor: '#e0ffe0',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
};

// Exportando o componente
export default CadastroAnimal;
