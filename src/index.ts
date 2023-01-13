import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';
import { sequelizeInstance } from './config/sequelizeInstance';

dotenv.config();

const app: Express = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://localhost:53000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT;

app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Test endpoint');
});

app.listen(port, async () => {
  console.log(`⚡️[server]: Server  running at https://localhost:${port}`);
  await sequelizeInstance.sync();
});
