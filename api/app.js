import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

dotenv.config({ path: './configs/.env' });

export { app }