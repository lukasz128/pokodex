/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import cors from 'cors';
import express from 'express';
import * as path from 'path';
import 'reflect-metadata';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(cors({ origin: ['http://localhost', 'https://pokodex-dev.byst.re'] }));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to pokodex api!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
