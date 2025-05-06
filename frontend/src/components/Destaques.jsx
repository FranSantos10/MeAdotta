import React , { useEffect, useState } from 'react';
import '../assets/styles/Destaques.css'; 

const API_URL =  'http://localhost:5000';

const Destaques = () => {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/animais`)
      .then(response => response.json())
      .then(data => setAnimais(data))
      .catch(error => console.error('Erro ao buscar destaques:', error));
  }, []);

  return (
    <div className="destaques-container-Destaques">
      <h2 className="title-Destaques">Heróis que merecem uma chance</h2>
      <div className="card-container-Destaques">
        {animais.map((animal, index) => (
          <div key={index} className="card-Destaques">
            <img src={`${API_URL}${animal.foto}`} alt={animal.nome} className="card-image-Destaques" />
            <h4 className="card-name-Destaques">{animal.nome}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Destaques;
