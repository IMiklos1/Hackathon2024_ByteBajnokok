import express from 'express';
import 'reflect-metadata';
import authUserController from './routes/AuthUserRoutes';
import cors from 'cors';
import { AppDataSource } from './context/dataSource';

const app = express();
const port = process.env.PORT || 3000;

//AppDataSource.initialize(); //NOTE: add back if we have the db connection informations

const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use('/auth', authUserController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
