CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS animais (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  idade INTEGER,
  personalidade TEXT[], -- Array de strings
  porte VARCHAR(20),
  descricao TEXT,
  bomComCriancas BOOLEAN DEFAULT FALSE,
  cuidadosEspeciais BOOLEAN DEFAULT FALSE,
  foto VARCHAR(255), -- Caminho do upload local
  emailProtetor VARCHAR(100),
  disponivel BOOLEAN DEFAULT TRUE,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS adocoes (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  animal_id INTEGER REFERENCES animais(id),
  data_adocao DATE DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS interesses (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  tipoLar TEXT[],
  outrosAnimais BOOLEAN DEFAULT FALSE,
  data TIMESTAMP DEFAULT NOW(),
  animalId INTEGER REFERENCES animais(id),
  CONSTRAINT fk_animal FOREIGN KEY (animalId) REFERENCES animais(id)
);

-- Inserção de dados iniciais na tabela "animais"

INSERT INTO animais (
  nome,
  idade,
  personalidade,
  porte,
  descricao,
  bomComCriancas,
  cuidadosEspeciais,
  foto,
  emailProtetor
) VALUES (
  'Bella',
  4,
  ARRAY['sociável', 'brincalhão'],
  'Pequeno',
  'Bella é uma cachorrinha adorável que ama brincar.',
  TRUE,
  FALSE,
  '/uploads/animal.jpg',
  'franci.santos.silva10@gmail.com'
);

INSERT INTO animais (
  nome,
  idade,
  personalidade,
  porte,
  descricao,
  bomComCriancas,
  cuidadosEspeciais,
  foto,
  emailProtetor
) VALUES (
  'Max',
  6,
  ARRAY['inteligente', 'sociável', 'carinhoso'],
  'Médio',
  'Max é muito leal e adora estar com sua família.',
  TRUE,
  FALSE,
  '/uploads/animal.jpg',
  'franci.santos.silva10@gmail.com'
);

INSERT INTO animais (
  nome,
  idade,
  personalidade,
  porte,
  descricao,
  bomComCriancas,
  cuidadosEspeciais,
  foto,
  emailProtetor
) VALUES (
  'Ted',
  3,
  ARRAY['inteligente', 'sociável', 'carinhoso'],
  'Pequeno',
  'Ted é um cãozinho muito leal e adora estar com sua família.',
  TRUE,
  FALSE,
  '/uploads/animal.jpg',
  'franci.santos.silva10@gmail.com'
);

INSERT INTO animais (
  nome,
  idade,
  personalidade,
  porte,
  descricao,
  bomComCriancas,
  cuidadosEspeciais,
  foto,
  emailProtetor
) VALUES (
  'Tom',
  4,
  ARRAY['calmo', 'dorminhoco', 'carinhoso'],
  'Pequeno',
  'Tom adora o conforto de sua caminha e é muito carinhoso.',
  TRUE,
  FALSE,
  '/uploads/animal.jpg',
  'franci.santos.silva10@gmail.com'
);

-- Inserção de dados iniciais na tabela "usuarios" (opcional)
INSERT INTO usuarios (nome, email, senha)
VALUES
('Protetor', 'protetor@gmail.com', '123456'),
('Franciele', 'franci.santos.silva10@gmail.com', '123456');
