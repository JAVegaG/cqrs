FROM node:lts-alpine AS BUILD
WORKDIR /api
COPY ["package*.json","./"]
RUN npm ci
COPY . .
RUN npm run build

# --

FROM node:lts-alpine AS DEPLOY
WORKDIR /api
COPY ["package*.json","."]
RUN npm ci --omit=dev
COPY --from=BUILD ["/api/dist/","./dist/"]
ENTRYPOINT npm run start:prod