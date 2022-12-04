import { IProduct } from '../interfaces';
import ProductsModel from '../models/products.model';

/* const productsModel = new ProductsModel();

const getAllProducts = async (): Promise<IProduct[]> => {
  const products = await productsModel.getAllProducts();
  return products;
};
 */
export default class ProductsService {
  productsModel = new ProductsModel();

  async getAllProducts(): Promise<IProduct[]> {
    const products = await this.productsModel.getAllProducts();
    return products;
  }
}