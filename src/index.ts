// src/app.ts
import express, { Application, Request, Response } from 'express';
import initAPIRoutes from './router/routes';
import { AppDataSource } from './data-source';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initAPIRoutes(app);

app.listen(port, () => {
  AppDataSource.initialize();
  console.log(`Server is running on port ${port}`);
});
