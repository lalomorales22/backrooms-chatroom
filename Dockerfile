# Build stage for client
FROM node:14 as client-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ ./
RUN npm run build || true

# Build stage for server
FROM node:14 as server-build
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ ./
COPY --from=client-build /app/client/build /app/server/public || true

# Final stage
FROM node:14-alpine
WORKDIR /app
COPY --from=server-build /app/server ./
COPY shared ./shared

ENV NODE_ENV=production
EXPOSE 5000

CMD ["npm", "start"]