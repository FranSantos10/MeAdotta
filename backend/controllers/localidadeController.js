const axios = require('axios');

const listarEstados = async (req, res) => {
  try {
    // Realiza uma requisição GET para a API do IBGE para listar os estados
    const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    
    // Retorna os dados dos estados
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao listar estados:', error);
    res.status(500).json({ erro: 'Erro ao listar estados' });
  }
};

const listarCidades = async (req, res) => {
  const { estado } = req.params;  // Pega o estado da URL (ex: RS, SP)

  try {
    // Realiza uma requisição GET para a API do IBGE para listar as cidades de um estado
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`);
    
    // Retorna os dados das cidades
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao listar cidades:', error);
    res.status(500).json({ erro: 'Erro ao listar cidades' });
  }
};

module.exports = { listarEstados, listarCidades };
