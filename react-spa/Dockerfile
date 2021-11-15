FROM node:alpine as build
RUN mkdir /build
WORKDIR /build

COPY package.json .
RUN npm install 
COPY . .
RUN export NODE_OPTIONS=--openssl-legacy-provider \
	npm run build

FROM nginx:alpine as release
COPY --from=build /build /usr/share/nginx/html
EXPOSE 80
