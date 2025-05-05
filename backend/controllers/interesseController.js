let interesses = [];

const cadastrarInteresse = (req, res) => {
  const { nome, telefone, tipoLar, outrosAnimais } = req.body;

  if (!nome || !telefone) {
    return res.status(400).json({ erro: "Nome e telefone são obrigatórios." });
  }

  const novoInteresse = {
    nome,
    telefone,
    tipoLar: tipoLar || [],
    outrosAnimais: outrosAnimais || false,
    data: new Date(),
  };

  interesses.push(novoInteresse);
  console.log("📩 Interesse recebido:", novoInteresse);

  res.status(201).json({ mensagem: "Interesse enviado com sucesso!" });
};

const listarInteresses = (req, res) => {

  res.status(200).json(interesses);
};

module.exports = { cadastrarInteresse, listarInteresses };
