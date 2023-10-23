import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import ejs from 'ejs';
import authRoute from './routes/auth.js'


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

dotenv.config({ path: './configs/.env' });
// Register view engine 
app.set('view engine', 'ejs')

app.use('/api/auth', authRoute);

export { app }