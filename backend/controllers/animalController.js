// Simulando um "banco" em memória
let animais = [
  { 
    id: 1, 
    nome: "Luna", 
    idade: 3, 
    porte: "medio", 
    personalidade: ["calmo", "brincalhão"], 
    descricao: "Luna é muito carinhosa e adora brincar.", 
    foto: "/animal.jpg" 
  },
  { 
    id: 2, 
    nome: "Thor", 
    idade: 5, 
    porte: "grande", 
    personalidade: ["calmo", "tímido"], 
    descricao: "Thor é calmo e adora um bom descanso.", 
    foto: "/animal.jpg" 
  },
  { 
    id: 3, 
    nome: "Ted", 
    idade: 5, 
    porte: "pequeno", 
    personalidade: ["brincalhão"], 
    descricao: "Ted é um cachorro muito brincalhão e energético.", 
    foto: "/animal.jpg" 
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
  const novoAnimal = req.body;

  // Criar um ID simples e adicionar ao array
  const novoId = animais.length > 0 ? animais[animais.length - 1].id + 1 : 1;
  const animalComId = { id: novoId, ...novoAnimal };
  animais.push(animalComId);

  console.log("Animal cadastrado:", animalComId);
  res.status(201).json({ mensagem: "Animal cadastrado com sucesso!", animal: animalComId });
};

module.exports = { listarAnimais, filtrarAnimal, cadastrarAnimal };
