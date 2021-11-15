FROM node:alpine as build
RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm install 
COPY . .
RUN export NODE_OPTIONS=--openssl-legacy-provider \
	npm run build

FROM nginx:alpine as release
COPY --from=build /app/build /var/www
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
