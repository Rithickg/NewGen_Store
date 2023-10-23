import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoute from './routes/auth.js'
import productRoute from './routes/product.js'
import discountRoute from './routes/discount.js'


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

dotenv.config({ path: './configs/.env' });


app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);
app.use('/api/discount', discountRoute);

export { app }