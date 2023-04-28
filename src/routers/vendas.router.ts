import { Router } from 'express';
/* import OrderController from '../controllers/vendas.controller'; */
/* import auth from '../middlewares/auth'; */
import VendasController from '../controllers/vendas.controller';

const routerVendas = Router();

const vendasController = new VendasController();

routerVendas.post('/', vendasController.getVendasSup.bind(vendasController));
routerVendas.post('/rca', vendasController.getVendasRCA.bind(vendasController));
/* routerVendas.post('/', auth, vendasController.ordersCreate.bind(vendasController)); */

export default routerVendas;