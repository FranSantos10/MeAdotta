# 🐾 Me Adotta

**Conectando vidas através da adoção responsável de animais.**

---

## 📚 Sobre o Projeto

O **Me Adotta** é uma plataforma que aproxima **protetores** e **adotantes** de forma empática e acolhedora, focando em conexões reais e suporte pós-adoção.

Nosso propósito é tornar o processo de adoção mais humano, acessível e transparente, priorizando **animais invisibilizados** e **histórias reais**.

---

## 🚀 Funcionalidades do MVP

- 🐶 **Cadastro de animais** com foto e perfil afetivo
- 🔍 **Busca com filtros** por personalidade, porte, espécie e localização
- 💌 **Formulário de interesse** com envio automático de e-mail para o protetor
- 🌟 **Destaque para animais idosos** ou com necessidades especiais
- 🔐 **Área protegida para protetores** com login para cadastro e edição de animais

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React + Vite
- **Backend**: Node.js + Express + Nodemailer
- **Banco de Dados**: PostgreSQL(em container Docker)
- **Containerização**: Docker + Docker Compose

---

## 🐳 Rodando com Docker

### Pré-requisitos
Antes de rodar a aplicação, instale as seguintes ferramentas:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Passos para rodar o projeto:

# Clone o repositório
<pre> bash 
  git clone https://github.com/FranSantos10/MeAdotta.git 
  cd MeAdotta </pre>

# Configuração do ambiente:
Crie um arquivo .env baseado no .env.example. Este arquivo contém variáveis de ambiente, como as credenciais do banco de dados e outras configurações necessárias para a aplicação. Um exemplo de como configurar essas variáveis:
<pre># Banco de dados
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=meadotta
</pre>

# Suba os containers do Docker:
Para construir e iniciar os containers do projeto, execute:
<pre> docker-compose up --build </pre>

Isso irá construir as imagens necessárias e iniciar os containers do frontend, backend e banco de dados PostgreSQL.

# Acessando a aplicação:

- O frontend estará disponível em http://localhost:5173.
- O backend estará disponível em http://localhost:5000.
  
O frontend e o backend se comunicam por meio de APIs RESTful, sendo que o frontend chama as rotas do backend para realizar ações como cadastro de animais e envio de formulários de interesse.

# Banco de Dados:

- O banco de dados PostgreSQL será iniciado automaticamente dentro de um container Docker. As credenciais de acesso podem ser configuradas no arquivo .env.
- O nome do banco de dados, usuário e senha podem ser personalizados diretamente no arquivo .env conforme suas necessidades.
