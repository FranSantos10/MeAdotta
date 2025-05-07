const nodemailer = require('nodemailer');

let interesses = [];
let animais = require('./animalController').animais;

module.exports = { animais };


const cadastrarInteresse = async (req, res) => {
  const { nome, telefone, tipoLar, outrosAnimais, animalId } = req.body;

  if (!nome || !telefone || !animalId) {
    return res.status(400).json({ erro: "Nome, telefone e ID do animal são obrigatórios." });
  }
  const animal = animais.find(a => a.id === parseInt(animalId));
  if (!animal) {
    return res.status(404).json({ erro: "Animal não encontrado." });
  }

  const protetorEmail = animal.emailProtetor;

  const novoInteresse = {
    nome,
    telefone,
    tipoLar: tipoLar || [],
    outrosAnimais: outrosAnimais || false,
    data: new Date(),
    animalId: animal.id,
    animalNome: animal.nome
  };

  interesses.push(novoInteresse);

  // Enviar e-mail com Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USUARIO,
      pass: process.env.EMAIL_SENHA
    }
  });

  const mailOptions = {
    from: `"Me Adotta" <${process.env.EMAIL_USUARIO}>`,
    to: protetorEmail,
    subject: `💌 Novo interesse em ${animal.nome}`,
    text: `
            Olá!
            
            Alguém demonstrou interesse em adotar o animal "${animal.nome}", que possui as seguintes características:
            📅 Idade: ${animal.idade} anos  
            📐 Porte: ${animal.porte}  

            Informações do interessado:
            📍 Nome: ${nome}  
            📱 Telefone: ${telefone}  
            🏡 Tipo de lar: ${tipoLar}  
            🐾 Outros animais em casa? ${outrosAnimais ? 'Sim' : 'Não'}

            Entre em contato para dar seguimento à adoção!

            Equipe Me Adotta 🐾💙
            `
            };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📧 E-mail enviado para o protetor:", protetorEmail);
    res.status(201).json({ mensagem: "Interesse enviado com sucesso!" });
  } catch (error) {
    console.error("❌ Erro ao enviar e-mail:", error);
    res.status(500).json({ erro: "Erro ao enviar e-mail para o protetor." });
  }
};

const listarInteresses = (req, res) => {

  res.status(200).json(interesses);
};

module.exports = { cadastrarInteresse, listarInteresses };
