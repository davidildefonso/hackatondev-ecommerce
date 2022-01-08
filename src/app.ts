import express from 'express';
import router from './routes/index';
import productRouter from './routes/products';

const app = express();
app.use(express.json());

app.use('/api/ping', router);
app.use('/api/products', productRouter);

export default app;