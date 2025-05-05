import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import '../assets/styles/CadastroAnimal.css';

function CadastroAnimal() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div>
            <div className="page">
                <h2 className="title">Cadastrar Animal</h2>

                {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className="form">
                        <div className="input-group">
                            <label htmlFor="nome">Nome do Animal:</label>
                            <input type="text" id="nome" name="nome" required className="input" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="idade">Idade:</label>
                            <input type="number" id="idade" name="idade" required className="input" />
                        </div>

                        <div className="input-group">
                            <label htmlFor="porte">Porte:</label>
                            <select id="porte" name="porte" required className="select">
                                <option value="pequeno">Pequeno</option>
                                <option value="medio">Médio</option>
                                <option value="grande">Grande</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Personalidade:</label>
                            <div className="checkbox-group">
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

                        <div className="input-group">
                            <label htmlFor="descricao">Descrição / História:</label>
                            <textarea id="descricao" name="descricao" required className="textarea"></textarea>
                        </div>
                        {/* Resumo Rápido */}
                        <div className="input-group">
                            <label>Se dá bem com crianças?</label>
                            <div className="radio-group">
                                <label>
                                    <input type="radio" name="bomComCriancas" value="true" required />
                                    Sim
                                </label>
                                <label>
                                    <input type="radio" name="bomComCriancas" value="false" />
                                    Não
                                </label>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Precisa de cuidados especiais?</label>
                            <div className="radio-group">
                                <label>
                                    <input type="radio" name="cuidadosEspeciais" value="true" required />
                                    Sim
                                </label>
                                <label>
                                    <input type="radio" name="cuidadosEspeciais" value="false" />
                                    Não
                                </label>
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="foto">Upload de Foto:</label>
                            <input type="file" id="foto" name="foto" required className="input" />
                        </div>

                        <div className="button-group">
                            <button type="submit" className="button">Cadastrar Animal</button>
                        </div>
                    </form>
                ) : (
                    <div className="alert">
                        <Alert severity="success">Animal cadastrado com sucesso!</Alert>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CadastroAnimal;
