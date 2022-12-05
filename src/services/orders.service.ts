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
    const { productsIds } = order;
       
    const { message, code } = validationBody(productsIds);
    
    if (message) return { code, message };
    const orderCreated = await this.orderModel.createOrder(1);
    console.log(orderCreated);  

    await Promise.all(productsIds
      .map((prududctId: number) => this.productModel.uptdateProduct(prududctId, orderCreated)));
    
    return { message: { userId: orderCreated, productsIds }, code: null };
  }
}