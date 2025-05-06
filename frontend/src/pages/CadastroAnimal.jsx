import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import '../assets/styles/CadastroAnimal.css';
import axios from 'axios';

const API_URL =  'http://localhost:5000';

function CadastroAnimal() {
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        porte: 'pequeno',
        personalidade: [],
        descricao: '',
        bomComCriancas: '',
        cuidadosEspeciais: '',
        foto: null,
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => {
                const newPersonalidade = checked
                    ? [...prevData.personalidade, value]
                    : prevData.personalidade.filter((item) => item !== value);
                return { ...prevData, personalidade: newPersonalidade };
            });
        } else if (type === 'file') {
            setFormData((prevData) => ({ ...prevData, foto: e.target.files[0] }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        // Preenchendo o FormData com os dados do formulário
        Object.keys(formData).forEach((key) => {
            if (key === 'personalidade') {
                formData.personalidade.forEach((item) => formDataToSend.append('personalidade', item));
            } else if (key === 'foto') {
                console.log('Enviando foto:', formData.foto);
                formDataToSend.append('foto', formData.foto);
            } else {
                console.log(`Enviando ${key}:`, formData[key]);
                formDataToSend.append(key, formData[key]);
            }
        });

        try {
            const response = await axios.post(`${API_URL}/api/animais`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            setFormSubmitted(true);
            setError('');
        } catch (err) {
            console.error(err);
            setError('Erro ao cadastrar o animal. Tente novamente.');
        }
    };

    return (
        <div>
            <div className="page">
                <h2 className="title">Cadastrar Animal</h2>

                {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className="form">
                        <div className="input-group">
                            <label htmlFor="nome">Nome do Animal:</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                className="input"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="idade">Idade:</label>
                            <input
                                type="number"
                                id="idade"
                                name="idade"
                                value={formData.idade}
                                onChange={handleChange}
                                required
                                className="input"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="porte">Porte:</label>
                            <select
                                id="porte"
                                name="porte"
                                value={formData.porte}
                                onChange={handleChange}
                                required
                                className="select"
                            >
                                <option value="pequeno">Pequeno</option>
                                <option value="medio">Médio</option>
                                <option value="grande">Grande</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Personalidade:</label>
                            <div className="checkbox-group">
                                {['brincalhão', 'calmo', 'timido'].map((personalidade) => (
                                    <label key={personalidade}>
                                        <input
                                            type="checkbox"
                                            name="personalidade"
                                            value={personalidade}
                                            checked={formData.personalidade.includes(personalidade)}
                                            onChange={handleChange}
                                        />
                                        {personalidade.charAt(0).toUpperCase() + personalidade.slice(1)}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="descricao">Descrição / História:</label>
                            <textarea
                                id="descricao"
                                name="descricao"
                                value={formData.descricao}
                                onChange={handleChange}
                                required
                                className="textarea"
                            ></textarea>
                        </div>
                        {/* Resumo Rápido */}
                        <div className="input-group">
                            <label>Se dá bem com crianças?</label>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="bomComCriancas"
                                        value="true"
                                        checked={formData.bomComCriancas === 'true'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Sim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="bomComCriancas"
                                        value="false"
                                        checked={formData.bomComCriancas === 'false'}
                                        onChange={handleChange}
                                    />
                                    Não
                                </label>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Precisa de cuidados especiais?</label>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="cuidadosEspeciais"
                                        value="true"
                                        checked={formData.cuidadosEspeciais === 'true'}
                                        onChange={handleChange}
                                        required
                                    />
                                    Sim
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="cuidadosEspeciais"
                                        value="false"
                                        checked={formData.cuidadosEspeciais === 'false'}
                                        onChange={handleChange}
                                    />
                                    Não
                                </label>
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="foto">Upload de Foto:</label>
                            <input
                                type="file"
                                id="foto"
                                name="foto"
                                onChange={handleChange}
                                required
                                className="input"
                            />
                        </div>

                        <div className="button-group">
                            <button type="submit" className="button">Cadastrar Animal</button>
                        </div>
                        {error && <Alert severity="error">{error}</Alert>}
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
