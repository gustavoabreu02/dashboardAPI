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

  async createProducts(product: IProduct): Promise<IProduct> {
    const productCreated = await this.productsModel.createProducts(product);
    return productCreated;
  }

  async getAllProducts(): Promise<IProduct[]> {
    const products = await this.productsModel.getAllProducts();
    return products;
  }
}