import React, { useState } from 'react';
import '../assets/styles/Filters.css';
import { PERSONALIDADE_OPCOES, PORTE_OPCOES } from '../opcoes';

function Filters({ onFilterChange }) {
    const [filtrosSelecionados, setfiltrosSelecionados] = useState({
        porte: [],
        personalidade: [],
        localizacao: '',
    });

    const handleCheckboxChange = (categoria, valor) => {
        setfiltrosSelecionados((prevFiltros) => {
            const atualizaCategoria = prevFiltros[categoria].includes(valor)
                ? prevFiltros[categoria].filter((item) => item !== valor)
                : [...prevFiltros[categoria], valor];

            const novosFiltros = { ...prevFiltros, [categoria]: atualizaCategoria };
            onFilterChange(novosFiltros);
            return novosFiltros;
        });
    };

 /*    const handleLocationChange = (e) => {
        const location = e.target.value;
        setfiltrosSelecionados((prevFiltros) => {
            const novosFiltros = { ...prevFiltros, localizacao: location };
            onFilterChange(novosFiltros);
            return novosFiltros;
        });
    }; */

    return (
        <div className="filters-container">
            <h2>Filtros</h2>

            <div className="filter-group">
                <h3>Porte:</h3>
                <div className="checkbox-group">
                    {PORTE_OPCOES.map((tamanho) => (
                        <label key={tamanho}>
                            <input
                                type="checkbox"
                                value={tamanho}
                                checked={filtrosSelecionados.porte.includes(tamanho)}
                                onChange={() => handleCheckboxChange('porte', tamanho)}
                            /> {tamanho.charAt(0).toUpperCase() + tamanho.slice(1)}
                        </label>
                    ))}
                </div>
            </div>

            <div className="filter-group">
                <h3>Personalidade:</h3>
                <div className="checkbox-group">
                    {PERSONALIDADE_OPCOES.map((personalidade) => (
                        <label key={personalidade}>
                            <input
                                type="checkbox"
                                value={personalidade}
                                checked={filtrosSelecionados.personalidade.includes(personalidade)}
                                onChange={() => handleCheckboxChange('personalidade', personalidade)}
                            /> {personalidade.charAt(0).toUpperCase() + personalidade.slice(1)}
                        </label>
                    ))}
                </div>
            </div>

          {/*   <div className="filter-group">
                <label>Localização:</label>
                <input classesName="localizacao-group"
                    type="text"
                    placeholder="Cidade ou Estado"
                    value={filtrosSelecionados.localizacao}
                    onChange={handleLocationChange}
                />
            </div> */}
        </div>
    );
}

export default Filters;
