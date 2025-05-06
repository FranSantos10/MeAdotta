import React , { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
        {animais.slice(0, 4).map((animal, index) => (
          <Link to={`/animais/${animal.id}`} key={index} className="card-Destaques">
          <img src={`${API_URL}${animal.foto}`} alt={animal.nome} className="card-image-Destaques" />
          <h4 className="card-name-Destaques">{animal.nome}</h4>
        </Link>
        
        ))}
      </div>
    </div>
  );
}


export default Destaques;
