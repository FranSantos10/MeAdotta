const listarAnimais = (req, res) => {
    res.json([
      { id: 1, nome: "Luna", idade: 3 },
      { id: 2, nome: "Thor", idade: 5 },
      { id: 3, nome: "Ted", idade: 5 }
    ]);
  };
  
  module.exports = { listarAnimais };
  