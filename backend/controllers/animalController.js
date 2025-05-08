const pool = require('../db');

// Listar todos os animais
const listarAnimais = async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM animais ORDER BY id DESC');
    res.status(200).json(resultado.rows);  // Retorna todos os animais do banco de dados
  } catch (error) {
    console.error('Erro ao listar animais:', error);
    res.status(500).json({ erro: 'Erro ao listar animais' });
  }
};

// Filtrar um animal pelo ID
const filtrarAnimal = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const resultado = await pool.query('SELECT * FROM animais WHERE id = $1', [id]);

    if (resultado.rows.length === 0) {
      console.log(`Nenhum animal encontrado com o ID: ${id}`);  // Log para verificar se o animal não existe
      return res.status(404).json({ erro: 'Animal não encontrado' });
    }

    console.log('Animal encontrado:', resultado.rows[0]);  // Log do animal encontrado
    res.status(200).json(resultado.rows[0]);  // Retorna o animal encontrado
  } catch (error) {
    console.error('Erro ao buscar animal:', error);
    res.status(500).json({ erro: 'Erro ao buscar animal' });
  }
};


// Cadastrar um novo animal
const cadastrarAnimal = async (req, res) => {
  const {
    nome,
    idade,
    porte,
    personalidade,
    descricao,
    bomComCriancas,
    cuidadosEspeciais,
    emailProtetor
  } = req.body;

  const foto = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const resultado = await pool.query(
      'INSERT INTO animais (nome, idade, porte, personalidade, descricao, bomComCriancas, cuidadosEspeciais, emailProtetor, foto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [nome, idade, porte, personalidade, descricao, bomComCriancas, cuidadosEspeciais, emailProtetor, foto]
    );

    const novoAnimal = resultado.rows[0];
    console.log("Animal cadastrado:", novoAnimal);
    res.status(201).json({ mensagem: "Animal cadastrado com sucesso!", animal: novoAnimal });
  } catch (error) {
    console.error('Erro ao cadastrar animal:', error);
    res.status(500).json({ erro: 'Erro ao cadastrar animal' });
  }
};

// Deletar um animal
const deletarAnimal = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const resultado = await pool.query('DELETE FROM animais WHERE id = $1 RETURNING *', [id]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({ erro: 'Animal não encontrado' });
    }

    res.status(200).json({ mensagem: "Animal deletado com sucesso!" });
  } catch (error) {
    console.error('Erro ao deletar animal:', error);
    res.status(500).json({ erro: 'Erro ao deletar animal' });
  }
};

// Editar um animal
const editarAnimal = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    nome,
    idade,
    porte,
    personalidade,
    descricao,
    bomComCriancas,
    cuidadosEspeciais,
    emailProtetor
  } = req.body;

  const foto = req.file ? `/uploads/${req.file.filename}` : null;

  const personalidadeArray = Array.isArray(personalidade) ? personalidade : [personalidade];

  const bomComCriancasBoolean = (bomComCriancas === 'true' || bomComCriancas === true);
  const cuidadosEspeciaisBoolean = (cuidadosEspeciais === 'true' || cuidadosEspeciais === true);

  try {
    const resultado = await pool.query(
      'UPDATE animais SET nome = $1, idade = $2, porte = $3, personalidade = $4, descricao = $5, bomComCriancas = $6, cuidadosEspeciais = $7, emailProtetor = $8, foto = $9 WHERE id = $10 RETURNING *',
      [nome, idade, porte, personalidadeArray, descricao, bomComCriancasBoolean, cuidadosEspeciaisBoolean, emailProtetor, foto, id]
    );

    if (resultado.rows.length === 0) {
      return res.status(404).json({ erro: 'Animal não encontrado' });
    }

    const animalAtualizado = resultado.rows[0];
    res.status(200).json({ mensagem: "Animal editado com sucesso!", animal: animalAtualizado });
  } catch (error) {
    console.error('Erro ao editar animal:', error);
    res.status(500).json({ erro: 'Erro ao editar animal' });
  }
};

module.exports = { listarAnimais, filtrarAnimal, cadastrarAnimal, deletarAnimal, editarAnimal };
