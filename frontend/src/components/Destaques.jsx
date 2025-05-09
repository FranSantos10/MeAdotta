import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Destaques.css';

const API_URL = import.meta.env.VITE_API_URL;

const Destaques = () => {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/animais`)
      .then(response => response.json())
      .then(data => setAnimais(data))
      .catch(error => console.error('Erro ao buscar destaques:', error));
  }, []);

  const destaquesOrdenados = [...animais].sort((a, b) => {
    const aPrioridade = (a.cuidadosespeciais ? 1 : 0) + (a.idade >= 7 ? 1 : 0);
    const bPrioridade = (b.cuidadosespeciais ? 1 : 0) + (b.idade >= 7 ? 1 : 0);
    return bPrioridade - aPrioridade;
  });


  return (
    <div className="destaques-container-Destaques">
      <h2 className="title-Destaques">Heróis que merecem uma chance</h2>
      <div className="card-container-Destaques">
        {destaquesOrdenados.slice(0, 4).map((animal, index) => (
          <Link to={`/animais/${animal.id}`} key={index} className="card-Destaques">
            <img src={`${API_URL}${animal.foto}`} alt={animal.nome} className="card-image-Destaques" />
            <h4 className="card-name-Destaques">{animal.nome}</h4>

            {/* Selos visuais */}
            <div className="badges-Destaques">
              {animal.idade >= 7 && <span className="badge-Destaques idoso">🏅 Idoso</span>}
              {animal.cuidadosespeciais && <span className="badge-Destaques especiais">🏅 Especial</span>}
            </div>
          </Link>
        ))}
    </div>
    </div >
  );
}

export default Destaques;
