import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoute from './routes/auth.js'
import productRoute from './routes/product.js'
import discountRoute from './routes/discount.js'
import cartRoute from './routes/cart.js'
import wishlistRoute from './routes/wishlist.js'
import { verifyToken } from './utils/jwt.js';


const app = express();
dotenv.config({ path: './configs/.env' });

const corsOrigin = process.env.CORS_ORIGIN.split(',');

app.use(cors({
    origin: corsOrigin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(morgan('dev'));



app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);
app.use('/api/discount', verifyToken, discountRoute);
app.use('/api/cart', cartRoute);
app.use('/api/wishlist', wishlistRoute);


export { app }