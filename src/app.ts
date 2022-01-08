import express from 'express';
import router from './routes/index';
import productRouter from './routes/products';
import testRouter from './routes/test';

const app = express();
app.use(express.json());


app.use('/api/ping', router);
app.use('/api/products', productRouter);
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.use('/api/test', testRouter);



export default app;