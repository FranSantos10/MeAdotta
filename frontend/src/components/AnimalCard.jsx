import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/AnimalCard.css'; 

function AnimalCard() {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/animais')
      .then(response => response.json())
      .then(data => setAnimais(data))
      .catch(error => console.error('Erro ao buscar animais:', error));
  }, []);

  return (
    <div className='cards-container-Animal'>
    {animais.map((animal) => (
      <div key={animal.id} className='card-Animal'>
        <img src={animal.foto} alt={animal.nome} className='card-image-Animal' />
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
