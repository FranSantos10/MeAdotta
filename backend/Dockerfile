# Usando a versão 20.16.0 do Node.js
FROM node:20.16.0

# Defina o diretório de trabalho no container
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Instalar nodemon globalmente, caso necessário
RUN npm install -g nodemon

# Copie o restante dos arquivos do backend
COPY . .

# Exponha a porta que o backend vai usar
EXPOSE 5000

# Comando para rodar o servidor
CMD ["npm", "run", "dev"]
