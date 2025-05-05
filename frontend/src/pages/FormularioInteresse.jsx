import React, { useState } from 'react';
import '../assets/styles/Formulariointeresse.css'; 

function FormularioInteresse() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div>
            <div className='pageForm'>
                <h2 className='titleForm'>Estamos felizes com seu interesse!</h2>

                {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className='formInteresse'>
                        <div className='input-groupForm'>
                            <label htmlFor="nome">Nome Completo:</label>
                            <input type="text" id="nome" name="nome" required className='inputForm' />
                        </div>

                        <div className='input-groupForm'>
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="tel" id="telefone" name="telefone" required className='inputForm' />
                        </div>

                        <div className='input-groupForm'>
                            <label>Tipo de Lar:</label>
                            <div className='checkbox-groupForm'>
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

                        <div className='input-groupForm'>
                            <label>Você tem outros animais?</label>
                            <div className='radio-groupForm'>
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

                        <div className='button-groupForm'>
                            <button type="submit" className='buttonForm'>Enviar Interesse</button>
                        </div>
                    </form>
                ) : (
                    <div className='success-messageForm'>
                        <h3>Obrigado! O protetor entrará em contato em breve.</h3>
                    </div>
                )}
            </div>
        </div>
    );
}


// Exportando o componente
export default FormularioInteresse;
