import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import router from './routers/products.router';
import loginRouter from './routers/login.router';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import routerUsers from './routers/users.router';
import routerVendas from './routers/vendas.router';

const app = express();
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());

app.use('/products', router);
app.use('/login', loginRouter);
app.use('/users', routerUsers);
app.use('/vendas', routerVendas);

app.use(httpErrorMiddleware);
export default app;
