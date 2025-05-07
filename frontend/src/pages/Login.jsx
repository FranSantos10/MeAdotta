import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css';

const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', senha: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/api/login`, formData);
            localStorage.setItem('tokenProtetor', res.data.token); // salvar token
            navigate('/cadastrar');
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Login inválido';
            setError(errorMessage);
        }
    };

    return (
        <div className="login-page">
            <h2>Login do Protetor</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
                <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
                <button className="buttonLogin" type="submit">Entrar</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;