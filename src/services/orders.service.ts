import { IOrder } from '../interfaces';
import OrderModel from '../models/orders.model';
import ProductsModel from '../models/products.model';
import validationBody from './validations/onders.validation';

export default class OrderService {
  orderModel = new OrderModel();

  productModel = new ProductsModel();

  async getAllOrders(): Promise<IOrder[]> {
    const orders = await this.orderModel.getAllOrders();
    return orders;
  }

  async ordersCreate(order: IOrder) {
    const { productsIds, user } = order;

    const { message, code } = validationBody(productsIds);

    if (code) return { code, message };

    const insertId = await this.orderModel.createOrder(user);

    await Promise.all(productsIds
      .map((productId) => this.productModel.updateProduct(productId, insertId)));

    return { message: { userId: 3, productsIds }, code: null };
  }
}