import { IOrder } from '../interfaces';
import OrderModel from '../models/orders.model';

export default class OrderService {
  orderModel = new OrderModel();

  async getAllOrders(): Promise<IOrder[]> {
    const orders = await this.orderModel.getAllOrders();
    return orders;
  }
}