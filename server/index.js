import express from 'express';
import Connection from './database.js';
import User from './models/User.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import user from './routes/user.routes.js';


const server = express()
server.listen(3000, console.log('rodando à 3 mil por hora'))

try {
  await Connection.authenticate();
  console.log('rodando....................');
} catch (error) {
  console.error(error);
}

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use('/user', user)