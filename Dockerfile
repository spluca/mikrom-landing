FROM node:20-alpine AS build

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar código fuente y construir
COPY . .
RUN npm run build

# Imagen de ejecución
FROM node:20-alpine AS runtime

WORKDIR /app

# Solo necesitamos las dependencias de producción y el build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/wrangler.jsonc ./

EXPOSE 4321

# Comando para previsualizar el build en local
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4321"]
