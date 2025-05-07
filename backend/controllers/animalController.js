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
    emailProtetor ,
    foto
  };

  const protetorEmail = animal.emailProtetor;

  animais.push(animal);

  console.log("Animal cadastrado:", animal);
  res.status(201).json({ mensagem: "Animal cadastrado com sucesso!", animal });
};


module.exports = { listarAnimais, filtrarAnimal, cadastrarAnimal, animais  };
