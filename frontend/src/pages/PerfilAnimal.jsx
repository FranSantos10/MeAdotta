import React from 'react';
import { Link } from 'react-router-dom';
import Filters from '../components/Filters';
import '../assets/styles/PerfilAnimal.css';  

function PerfilAnimal() {
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
                            <h2 className='name'>Tom</h2>
                            <p className='age'>2 anos</p>
                        </div>

                        {/* Tags do Animal */}
                        <div className='tags'>
                            <span className='tag'>Brincalhão</span>
                            <span className='tag'>Médio</span>
                        </div>
                    </div>

                    {/* História do Resgate - Agora é um Textarea */}
                    <div className='history-container'>
                        <label htmlFor="historyText"className='history-label'>História do Resgate:</label>
                        <textarea 
                            id="historyText" 
                            value="Tom foi resgatado após acidente..."
                            readOnly 
                           className='history'
                        />
                    </div>

                    {/* Resumo Rápido */}
                    <div className='summary'>
                        <div className='summary-item'>
                            <span>Se dá bem com crianças?</span> ✔️
                        </div>
                        <div className='summary-item'>
                            <span>Precisa de cuidados especiais?</span> ❌
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
