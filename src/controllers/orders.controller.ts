import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  ordersService = new OrderService();

  async getAllOrders(req: Request, res: Response) {
    const orders = await this.ordersService.getAllOrders();
    res.status(200).json(orders);
  }
}