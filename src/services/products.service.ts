import { IProduct } from '../interfaces';
import ProductsModel from '../models/products.model';
/* import validationBody from './validations/products.validation'; */

/* const productsModel = new ProductsModel();

const getAllProducts = async (): Promise<IProduct[]> => {
  const products = await productsModel.getAllProducts();
  return products;
};
 */
export default class ProductsService {
  productsModel = new ProductsModel();

  /*   async createProducts(product: IProduct) {
    const { message, code } = validationBody(product);
    
    if (message) return { code, message };
    const productCreated = await this.productsModel.createProducts(product);
    return { message: productCreated, code: null };
  } */

  async getProductCodigo(product: IProduct): Promise<IProduct[]> {
    const products = await this.productsModel.getProductCodigo(product);
    return products;
  }
}