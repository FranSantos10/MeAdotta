# Escolher a imagem base do Node.js (versão LTS mais recente)
FROM node:20.16.0

# Definir o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json (ou yarn.lock) primeiro para aproveitar o cache do Docker
COPY package*.json ./

# Instalar as dependências
RUN npm install --legacy-peer-deps

# Copiar o restante dos arquivos para o container
COPY . .

# Expor a porta que o Vite vai usar (5173 por padrão)
EXPOSE 5173

# Comando para iniciar o servidor de desenvolvimento do Vite
CMD ["npm", "run", "dev"]
