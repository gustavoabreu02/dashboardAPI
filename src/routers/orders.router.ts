import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const routerOrders = Router();

const ordersController = new OrderController();

routerOrders.get('/', ordersController.getAllOrders.bind(ordersController));

export default routerOrders;