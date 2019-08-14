#same as Dockerfile.dev execept ading AS builder to the FROM agument
FROM node:12.6.0-alpine AS builder
WORKDIR '/app'
RUN npm install
RUN npm cache clean --force

COPY . .
# execept this command, should be npm run build
RUN npm rebuild node-sass --force
RUN npm run build

#I used nginx image from alpine to copy over the result of npm run build- which is responisble for running the server in container
FROM nginx
#nginx consumes port 80 - from dockerhub documentation
#copy over the builder phase- which folder we want to copy and should go
COPY --from=builder /app/build /usr/share/nginx/html