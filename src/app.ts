import express from 'express';
import router from './routers/products.router';

const app = express();

app.use(express.json());

app.use('/products', router);

export default app;
