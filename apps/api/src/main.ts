import cors from 'cors';
import express from 'express';
import * as path from 'path';
import 'reflect-metadata';
import { initDatabase } from './app/config/db-config';

const app = express();

const db = initDatabase();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(cors({ origin: ['http://localhost', 'https://pokodex-dev.byst.re'] }));

app.get('/api', (req, res) => {
  res.send({ id: 1, name: 'test2' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

export { db };
