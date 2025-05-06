import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/AnimalCard.css';


const API_URL = 'http://localhost:5000';

function AnimalCard({ filters }) {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/animais`)
      .then(response => response.json())
      .then(data => setAnimais(data))
      .catch(error => console.error('Erro ao buscar animais:', error));
  }, []);

  // Função que aplica os filtros
  const AnimaisFiltrados = animais.filter(animal => {
    const porteCorresponde = filters.porte.length === 0 || filters.porte.includes(animal.porte);
    const personalidadeCorresponde = filters.personalidade.length === 0 || filters.personalidade.some(personalidade => animal.personalidade.includes(personalidade));
    const localizacaoCorresponde = filters.localizacao ? animal.localizacao.includes(filters.localizacao) : true;

    return porteCorresponde && personalidadeCorresponde && localizacaoCorresponde;
  });


  return (
    <div className='cards-container-Animal'>
      {AnimaisFiltrados.map((animal) => (
        <div key={animal.id} className='card-Animal'>
          <img src={`${API_URL}${animal.foto}`} alt={animal.nome} className='card-image-Animal' />
          <div className='card-info-Animal'>
            <h4>{animal.nome}</h4>
            <p>Idade: {animal.idade} {animal.idade === 1 ? 'ano' : 'anos'}</p>
            <div className='tags-Animal'>
              {animal.personalidade.map((tag, index) => (
                <span key={index} className='tag-Animal'>{tag}</span>
              ))}
              <span className='tag-Animal'>{animal.porte}</span>
            </div>
            <Link to={`/animais/${animal.id}`}>
              <button className='button-Animal'>Ver Mais</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnimalCard;
