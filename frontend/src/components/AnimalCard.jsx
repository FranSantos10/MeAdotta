import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/AnimalCard.css';

const API_URL = import.meta.env.VITE_API_URL;

function AnimalCard({ filters }) {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/animais`)
      .then(response => response.json())
      .then(data => setAnimais(data))
      .catch(error => console.error('Erro ao buscar animais:', error));
  }, []);

  const normalizar = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const AnimaisFiltrados = animais.filter(animal => {
    const porteCorresponde = filters.porte.length === 0 || filters.porte.includes(animal.porte);
    const personalidadeCorresponde = filters.personalidade.length === 0 || filters.personalidade.some(personalidade => animal.personalidade.includes(personalidade));
    const localizacao = `${animal.cidade}-${animal.estado}`;
    const localizacaoCorresponde = filters.localizacao
      ? normalizar(localizacao).includes(normalizar(filters.localizacao))
      : true;
    const especieCorresponde = filters.especie ? animal.especie === filters.especie : true;

    return porteCorresponde && personalidadeCorresponde && localizacaoCorresponde && especieCorresponde;
  });

  return (
    <div className='cards-container-Animal'>
      {AnimaisFiltrados.length > 0 ? (
        AnimaisFiltrados.map((animal) => {
          // Concatenando cidade e estado para a localização
          const localizacao = `${animal.cidade}-${animal.estado}`;

          return (
            <div key={animal.id} className='card-Animal'>
              <img src={`${API_URL}${animal.foto}`} alt={animal.nome} className='card-image-Animal' />
              <div className='card-info-Animal'>
                <h4>{animal.nome}</h4>
                <p>Idade: {animal.idade} {animal.idade === 1 ? 'ano' : 'anos'}</p>
                <p>Espécie: {animal.especie ? animal.especie.charAt(0).toUpperCase() + animal.especie.slice(1) : 'Não especificada'}</p>
                <p>Localização: {localizacao || 'Localização não informada'}</p>
                <div className='tags-Animal'>
                  {animal.personalidade && Array.isArray(animal.personalidade) && animal.personalidade.length > 0 ? (
                    animal.personalidade.map((tag, index) => (
                      <span key={index} className='tag-Animal'>{tag}</span>
                    ))
                  ) : (
                    <span className='tag-Animal'>Sem personalidade definida</span>
                  )}
                  <span className='tag-Animal'>{animal.porte || 'Porte não informado'}</span>
                </div>
                <Link to={`/animais/${animal.id}`}>
                  <button className='button-Animal'>Ver Mais</button>
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <p>Nenhum animal encontrado com os filtros aplicados.</p>
      )}
    </div>
  );
}

export default AnimalCard;
