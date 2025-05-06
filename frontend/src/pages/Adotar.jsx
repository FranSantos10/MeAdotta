import React , { useState } from 'react';
import Filters from '../components/Filters';
import AnimalCard from '../components/AnimalCard';
import '../assets/styles/Adotar.css';

function Adotar() {

  // Definindo o estado para os filtros
  const [filtros, setFiltros] = useState({
    porte: [],
    personalidade: [],
    localizacao: '',
  });

    // Função para atualizar os filtros
    const handleFilterChange = (novosFiltros) => {
      setFiltros(novosFiltros);
    };

  return (
    <div>
      <div className='pageAdotar'>
        <div className='filtersAdotar'>
        <Filters onFilterChange={handleFilterChange} />
        </div>

        <div className='animals-list'>
           <AnimalCard filters={filtros} />
        </div>
      </div>
    </div>
  );
}

export default Adotar;
