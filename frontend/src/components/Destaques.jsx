import React from 'react';
import '../assets/styles/Destaques.css'; 

function Destaques() {
  // Dados dos animais (exemplo)
  const animals = [
    { name: 'Tom', photo: '/animal.jpg' },
    { name: 'Fred', photo: '/animal.jpg' },
    { name: 'Luna', photo: '/animal.jpg' },
    { name: 'Max', photo: '/animal.jpg' },
  ];

  return (
    <div className="destaques-container-Destaques">
      <h2 className="title-Destaques">Heróis que merecem uma chance</h2>
      <div className="card-container-Destaques">
        {animals.map((animal, index) => (
          <div key={index} className="card-Destaques">
            <img src={animal.photo} alt={animal.name} className="card-image-Destaques" />
            <h4 className="card-name-Destaques">{animal.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Destaques;
