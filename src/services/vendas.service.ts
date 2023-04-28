import { ISup, IVendas } from '../interfaces';
/* import ProductsModel from '../models/products.model'; */
import VendasModel from '../models/vendas.model';
/* import validationBody from './validations/onders.validation'; */

export default class VendasService {
  vendasModel = new VendasModel();

  /* productModel = new ProductsModel(); */

  async getVendasSup(sup: ISup): Promise<IVendas[]> {
    const vendas = await this.vendasModel.getVendasSup(sup);
    return vendas;
  }

  async getVendasRCA(sup: ISup): Promise<IVendas[]> {
    const vendasRCA = await this.vendasModel.getVendasRCA(sup);
    return vendasRCA;
  }  

/*   async ordersCreate(order: IOrder) {
    const { productsIds, user } = order;

    console.log(order);
    
    const { message, code } = validationBody(productsIds);

    if (code) return { code, message };
    
    const insertId = await this.orderModel.createOrder(user);
    
    await Promise.all(productsIds
      .map((productId) => this.productModel.updateProduct(productId, insertId)));

    return { message: { userId: user.id, productsIds }, code: null };
  } */
}