FROM node:12
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD /app/node_modules/.bin/ng serve --open --host 0.0.0.0 --disable-host-check
