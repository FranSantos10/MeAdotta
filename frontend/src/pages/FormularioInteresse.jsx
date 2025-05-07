import React, { useState } from 'react';
import '../assets/styles/Formulariointeresse.css';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const API_URL =  'http://localhost:5000';


function FormularioInteresse() {
    const { id: animalId } = useParams();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        tipoLar: [],
        outrosAnimais: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => {
                const novoTipoLar = checked
                    ? [...prevData.tipoLar, value]
                    : prevData.tipoLar.filter((item) => item !== value);
                return { ...prevData, tipoLar: novoTipoLar };
            });
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dadosComId = { ...formData, animalId };

        try {
            const response = await axios.post(`${API_URL}/api/interesse`, dadosComId);
            console.log(response.data);
            setFormSubmitted(true);
            setError('');
        } catch (err) {
            console.error(err);
            setError('Erro ao enviar o formulário. Tente novamente.');
        }
    };


    return (
        <div>
            <div className='pageForm'>
                <h2 className='titleForm'>Estamos felizes com seu interesse!</h2>

                {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className='formInteresse'>
                        <div className='input-groupForm'>
                            <label htmlFor="nome">Nome Completo:</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                className='inputForm'
                            />
                        </div>

                        <div className='input-groupForm'>
                            <label htmlFor="telefone">Telefone:</label>
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                                required
                                className='inputForm'
                            />
                        </div>

                        <div className='input-groupForm'>
                            <label>Tipo de Lar:</label>
                            <div className='checkbox-groupForm'>
                                {['Casa', 'Apartamento', 'Quintal'].map(tipo => (
                                    <label key={tipo}>
                                        <input
                                            type="checkbox"
                                            name="tipoLar"
                                            value={tipo}
                                            checked={formData.tipoLar.includes(tipo)}
                                            onChange={handleChange}
                                        />
                                        {tipo}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className='input-groupForm'>
                            <label>Você tem outros animais?</label>
                            <div className='radio-groupForm'>
                                <label>
                                    <input
                                        type="radio"
                                        name="outrosAnimais"
                                        value="Sim"
                                        checked={formData.outrosAnimais === 'Sim'}
                                        onChange={handleChange}
                                    />
                                    Sim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="outrosAnimais"
                                        value="Nao"
                                        checked={formData.outrosAnimais === 'Nao'}
                                        onChange={handleChange}
                                    />
                                    Não
                                </label>
                            </div>
                        </div>

                        <div className='button-groupForm'>
                            <button type="submit" className='buttonForm'>Enviar Interesse</button>
                        </div>
                        {error && <Alert severity="error">{error}</Alert>}
                    </form>
                ) : (
                    <div className='alert'>
                        <Alert severity="success">Obrigado! O protetor entrará em contato em breve.</Alert>
                    </div>

                )}
            </div>
        </div>
    );
}


// Exportando o componente
export default FormularioInteresse;
