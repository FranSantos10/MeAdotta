import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Filters from '../components/Filters';
import '../assets/styles/PerfilAnimal.css';

function PerfilAnimal() {
    const { id } = useParams(); // id do animal
    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/animais/${id}`)
            .then(response => response.json())
            .then(data => setAnimal(data))
            .catch(error => console.error('Erro ao buscar animal:', error));
    }, [id]);

    if (!animal) {
        return <div>Carregando...</div>;
    }
    return (
        <div>
            <div className='pagePerfil'>
                <div className='filtersPerfil'>
                    <Filters />
                </div>

                <div className='profile'>
                    {/* Foto Grande */}
                    <img src="/animal.jpg" alt="Animal" className='image' />

                    {/* Informações do Animal */}
                    <div className='info-container'>
                        <div className='name-and-age'>
                            <h2 className='name'>{animal.nome}</h2>
                            <p className='age'>{animal.idade} {animal.idade === 1 ? 'ano' : 'anos'}</p>
                        </div>

                        {/* Tags do Animal */}
                        <div className='tags'>
                            {animal.personalidade.map((tag, index) => (
                                <span key={index} className='tag'>{tag}</span>
                            ))}
                            <span className='tag'>{animal.porte}</span>
                        </div>
                    </div>

                    {/* História do Resgate - Agora é um Textarea */}
                    <div className='history-container'>
                        <label htmlFor="historyText" className='history-label'>História do Resgate:</label>
                        <textarea
                            id="historyText"
                            value={animal.descricao}
                            readOnly
                            className='history'
                        />
                    </div>

                    {/* Resumo Rápido */}
                    <div className='summary'>
                        <div className='summary-item'>
                            <span>Se dá bem com crianças?</span> {animal.bomComCriancas ? '✔️' : '❌'}
                        </div>
                        <div className='summary-item'>
                            <span>Precisa de cuidados especiais?</span> {animal.cuidadosEspeciais ? '✔️' : '❌'}
                        </div>
                    </div>

                    {/* Botões de Interesse */}
                    <Link to="/adotar/Formulario-Adocao" className='button-link'>
                        <button className='button'>Tenho Interesse</button>
                    </Link>

                    {/* Link para Voltar */}
                    <Link to="/adotar" className='back-link'>Voltar</Link>
                </div>
            </div>
        </div>
    );
}


export default PerfilAnimal;
