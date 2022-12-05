import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  ordersService = new OrderService();

  async getAllOrders(req: Request, res: Response) {
    const orders = await this.ordersService.getAllOrders();
    res.status(200).json(orders);
  }

  async ordersCreate(req: Request, res: Response) {
    const { message, code } = await this.ordersService.ordersCreate(req.body);
    if (code) return res.status(code).json({ message });
    res.status(201).json(message);
  }
}