import React from 'react';

// Dados simulados (mock)
const animais = [
  {
    id: 1,
    nome: 'Luna',
    idade: '2 anos',
    personalidade: 'Brincalhona',
    imagem: 'https://placekitten.com/300/200'
  },
  {
    id: 2,
    nome: 'Tico',
    idade: '1 ano',
    personalidade: 'Calmo',
    imagem: 'https://placekitten.com/301/200'
  }
];

const AnimalList = () => {
  return (
    <div>
      <h2>Animais para Adoção</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {animais.map(animal => (
          <div key={animal.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '300px' }}>
            <img src={animal.imagem} alt={animal.nome} style={{ width: '100%', height: 'auto' }} />
            <h3>{animal.nome}</h3>
            <p><strong>Idade:</strong> {animal.idade}</p>
            <p><strong>Personalidade:</strong> {animal.personalidade}</p>
            <button>Quero conhecer</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
