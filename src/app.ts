import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import router from './routers/products.router';
import loginRouter from './routers/login.router';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import routerUsers from './routers/users.router';
import routerVendas from './routers/vendas.router';
import routerRcas from './routers/rcas.router';
import routerCampanhas from './routers/campanhas.router';

const app = express();
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json({ limit: '50mb' }));

app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/products', router);
app.use('/login', loginRouter);
app.use('/users', routerUsers);
app.use('/vendas', routerVendas);
app.use('/rcas', routerRcas);
app.use('/campanhas', routerCampanhas);

app.use(httpErrorMiddleware);
export default app;