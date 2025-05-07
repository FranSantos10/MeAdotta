// Simulando um "banco" em memória
let animais = [
  {
    id: 1,
    nome: "Luna",
    idade: 3,
    porte: "medio",
    personalidade: ["calmo", "brincalhão"],
    descricao: "Luna é muito carinhosa e adora brincar.",
    emailProtetor: "franci.santos.silva10@gmail.com",
    foto: "/uploads/animal.jpg"
  },
  {
    id: 2,
    nome: "Thor",
    idade: 5,
    porte: "grande",
    personalidade: ["calmo", "tímido"],
    descricao: "Thor é calmo e adora um bom descanso.",
    emailProtetor: "franci.santos.silva10@gmail.com",
    foto: "/uploads/animal.jpg"
  },
  {
    id: 3,
    nome: "Ted",
    idade: 5,
    porte: "pequeno",
    personalidade: ["brincalhão"],
    descricao: "Ted é um cachorro muito brincalhão e energético.",
    emailProtetor: "franci.santos.silva10@gmail.com",
    foto: "/uploads/animal.jpg"
  }
];

const listarAnimais = (req, res) => {
  res.json(animais);
};

const filtrarAnimal = (req, res) => {
  const id = parseInt(req.params.id);
  const animal = animais.find(a => a.id === id);

  if (animal) {
    res.json(animal);
  } else {
    res.status(404).json({ erro: "Animal não encontrado" });
  }
};


const cadastrarAnimal = (req, res) => {
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

  const novoId = animais.length > 0 ? animais[animais.length - 1].id + 1 : 1;

  const animal = {
    id: novoId,
    nome,
    idade: parseInt(idade),
    porte,
    personalidade: Array.isArray(personalidade) ? personalidade : [personalidade],
    descricao,
    bomComCriancas: bomComCriancas === 'true',
    cuidadosEspeciais: cuidadosEspeciais === 'true',
    emailProtetor,
    foto
  };

  animais.push(animal);

  console.log("Animal cadastrado:", animal);
  res.status(201).json({ mensagem: "Animal cadastrado com sucesso!", animal });
};

const deletarAnimal = (req, res) => {
  const id = parseInt(req.params.id);
  const index = animais.findIndex(a => a.id === id);

  if (index !== -1) {
    animais.splice(index, 1);
    res.status(200).json({ mensagem: "Animal deletado com sucesso!" });
  } else {
    res.status(404).json({ erro: "Animal não encontrado" });
  }
};

const editarAnimal = (req, res) => {
  const id = parseInt(req.params.id);
  const index = animais.findIndex(a => a.id === id);

  if (index !== -1) {
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

      // Verificar se algum campo obrigatório está ausente
  if (!nome || !idade || !porte || !personalidade || !descricao || bomComCriancas === undefined || cuidadosEspeciais === undefined || !emailProtetor) {
    return res.status(400).json({ error: 'Faltam dados obrigatórios.' });
  }
    
    const bomComCriancasBoolean = (bomComCriancas === 'true' || bomComCriancas === true);
    const cuidadosEspeciaisBoolean = (cuidadosEspeciais === 'true' || cuidadosEspeciais === true);
    
    const foto = req.file ? `/uploads/${req.file.filename}` : animais[index].foto;

    animais[index] = {
      ...animais[index], // Mantém os dados que existem e atualiza os campos que foram editados
      nome,
      idade: parseInt(idade),
      porte,
      personalidade: Array.isArray(personalidade) ? personalidade : [personalidade],
      descricao,
      bomComCriancas: bomComCriancasBoolean, // Converte para booleano
      cuidadosEspeciais: cuidadosEspeciaisBoolean, // Converte para booleano
      emailProtetor,
      foto
    };

    res.status(200).json({ mensagem: "Animal editado com sucesso!", animal: animais[index] });
  } else {
    res.status(404).json({ erro: "Animal não encontrado" });
  }
}


module.exports = { listarAnimais, filtrarAnimal, cadastrarAnimal, deletarAnimal, editarAnimal, animais };
