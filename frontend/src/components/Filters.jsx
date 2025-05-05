import React from 'react';

function Filters() {
    return (
        <div style={filtersContainerStyle}>
            <h3>Filtros</h3>

            <div style={filterGroupStyle}>
                <label>Porte:</label>
                <div style={checkboxGroupStyle}>
                    <label>
                        <input type="checkbox" value="pequeno" /> Pequeno
                    </label>
                    <label>
                        <input type="checkbox" value="medio" /> Médio
                    </label>
                    <label>
                        <input type="checkbox" value="grande" /> Grande
                    </label>
                </div>
            </div>

            <div style={filterGroupStyle}>
                <label>Personalidade:</label>
                <div style={checkboxGroupStyle}>
                    <label>
                        <input type="checkbox" value="calmo" /> Calmo
                    </label>
                    <label>
                        <input type="checkbox" value="brincalhao" /> Brincalhão
                    </label>
                    <label>
                        <input type="checkbox" value="protetor" /> Protetor
                    </label>
                </div>


            </div>

            <div style={filterGroupStyle}>
                <label>Localização: </label>
                <input type="text" placeholder="Cidade ou Estado" />
            </div>
        </div>
    );
}

// Estilos do componente Filters
const filtersContainerStyle = {
    padding: '1.5rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
};

const checkboxGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
};

const filterGroupStyle = {
    marginBottom: '1rem',
};

export default Filters;
