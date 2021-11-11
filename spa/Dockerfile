FROM node:current-alpine as build
USER node
RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install -g @angular/cli

FROM build as publish
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN ng update --all --force
RUN npm run build --  

FROM nginx:latest as deploy
COPY --from=build dist/ /app
EXPOSE 80
CMD ["nginx"]
