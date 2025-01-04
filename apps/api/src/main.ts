import cors from 'cors';
import express from 'express';
import * as path from 'path';
import 'reflect-metadata';
import { initDatabase } from './app/config/db-config';
import { initDocs } from './app/config/docs-config';
import { registerRoutes } from './routes';

export type ExpressType = ReturnType<typeof express>;

const app = express();
const db = initDatabase();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(cors({ origin: ['http://localhost', 'https://pokodex-dev.byst.re'] }));
app.use(express.json());

registerRoutes(app);
initDocs(app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(
    `Server is running http://localhost:${port}/api, api-docs http://localhost:${port}/api/api-docs`,
  );
});
server.on('error', console.error);

export { db };
