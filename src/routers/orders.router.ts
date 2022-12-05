import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import auth from '../middlewares/auth';

const routerOrders = Router();

const ordersController = new OrderController();

routerOrders.get('/', ordersController.getAllOrders.bind(ordersController));
routerOrders.post('/', auth, ordersController.ordersCreate.bind(ordersController));

export default routerOrders;