const pool = require('../db');
const nodemailer = require('nodemailer');

const cadastrarInteresse = async (req, res) => {
  const { nome, telefone, tipoLar, outrosAnimais, animalId } = req.body;

  if (!nome || !telefone || !animalId) {
    return res.status(400).json({ erro: "Nome, telefone e ID do animal são obrigatórios." });
  }

  try {
    // Consultar o animal no banco de dados
    const resultado = await pool.query('SELECT * FROM animais WHERE id = $1', [animalId]);
    const animal = resultado.rows[0];  // Pega o primeiro animal encontrado

    if (!animal) {
      return res.status(404).json({ erro: "Animal não encontrado." });
    }

    const protetorEmail = animal.emailprotetor;

    // Salvar o interesse no banco
    await pool.query(
      'INSERT INTO interesses (nome, telefone, tipolar, outrosanimais, data, animalid) VALUES ($1, $2, $3, $4, $5, $6)',
      [nome, telefone, tipoLar || [], outrosAnimais || false, new Date(), animal.id]
    );


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

  } catch (error) {
    console.error('Erro ao cadastrar interesse:', error);
    res.status(500).json({ erro: 'Erro ao processar o interesse.' });
  }
};

const listarInteresses = async (req, res) => {
  try {
    // Consultar todos os interesses no banco de dados
    const resultado = await pool.query('SELECT * FROM interesses');
    const interesses = resultado.rows; // Obtendo os interesses retornados da consulta

    // Retornar os interesses encontrados
    res.status(200).json(interesses);
  } catch (error) {
    console.error('Erro ao listar interesses:', error);
    res.status(500).json({ erro: 'Erro ao listar interesses' });
  }
};

module.exports = { cadastrarInteresse, listarInteresses };
