import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes); 

app.listen(3333);

//Parei no video 2 - Minuto  00:49:00