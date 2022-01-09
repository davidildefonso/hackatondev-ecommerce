import express from 'express';
import router from './routes/index';
import productRouter from './routes/products';
import testRouter from './routes/test';
import orderRouter from './routes/orders';
import paymentRouter from './routes/payments';

const app = express();
app.use(express.json());


app.use('/api/ping', router);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/payments', paymentRouter );
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.use('/api/test', testRouter);



export default app;