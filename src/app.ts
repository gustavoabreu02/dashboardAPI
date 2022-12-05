import express from 'express';
import 'express-async-errors';
import router from './routers/products.router';
import loginRouter from './routers/login.router';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import routerUsers from './routers/users.router';
import routerOrders from './routers/orders.router';

const app = express();

app.use(express.json());

app.use('/products', router);
app.use('/login', loginRouter);
app.use('/users', routerUsers);
app.use('/orders', routerOrders);

app.use(httpErrorMiddleware);
export default app;
