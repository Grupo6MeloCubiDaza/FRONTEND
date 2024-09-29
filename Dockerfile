# Usa la imagen oficial de Node.js
FROM node:18-alpine

# Crea el directorio de la aplicación
WORKDIR /app

# Copia el archivo package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que Preact correrá
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
