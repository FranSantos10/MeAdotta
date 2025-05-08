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
  especie VARCHAR(50),
  cidade VARCHAR(100),
  estado VARCHAR(2),
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
  emailProtetor,
  especie,
  cidade,
  estado
  
) VALUES (
  'Bob',
  1,
  ARRAY['sociável', 'brincalhão'],
  'grande',
  'Bob é um cãozinho adorável que ama brincar.',
  TRUE,
  FALSE,
  '/uploads/bob.jpg',
  'franci.santos.silva10@gmail.com',
  'cão',
  'Gravataí',
  'RS'
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
  emailProtetor,
  especie,
  cidade,
  estado
) VALUES (
  'Garfield',
  4,
  ARRAY['sociável', 'carinhoso'],
  'pequeno',
  'Garfield é muito leal e adora estar com sua família.',
  TRUE,
  FALSE,
  '/uploads/garfield.jpg',
  'franci.santos.silva10@gmail.com',
  'gato',
  'Gravataí',
  'RS'
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
  emailProtetor,
  especie,
  cidade,
  estado
) VALUES (
  'Ted',
  3,
  ARRAY['inteligente', 'sociável'],
  'médio',
  'Ted é um cãozinho muito leal e adora estar com sua família.',
  TRUE,
  FALSE,
  '/uploads/ted.jpg',
  'franci.santos.silva10@gmail.com',
  'cão',
  'Gravataí',
  'RS'
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
  emailProtetor,  
  especie,
  cidade,
  estado
) VALUES (
  'Tom',
  4,
  ARRAY['dorminhoco', 'carinhoso'],
  'pequeno',
  'Tom adora o conforto de sua caminha e é muito carinhoso.',
  TRUE,
  FALSE,
  '/uploads/tom.jpg',
  'franci.santos.silva10@gmail.com',
  'gato',
  'Gravataí',
  'RS'
);

-- Inserção de dados iniciais na tabela "usuarios" (opcional)
INSERT INTO usuarios (nome, email, senha)
VALUES
('Protetor', 'protetor@gmail.com', '123456'),
('Franciele', 'franci.santos.silva10@gmail.com', '123456');
