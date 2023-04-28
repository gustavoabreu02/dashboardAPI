import { IRca } from '../interfaces';
import RcasModel from '../models/rcas.model';
/* import validationBody from './validations/products.validation'; */

/* const productsModel = new ProductsModel();

const getAllProducts = async (): Promise<IProduct[]> => {
  const products = await productsModel.getAllProducts();
  return products;
};
 */
export default class RcasService {
  rcasModel = new RcasModel();

  /*   async createProducts(product: IProduct) {
    const { message, code } = validationBody(product);
    
    if (message) return { code, message };
    const productCreated = await this.productsModel.createProducts(product);
    return { message: productCreated, code: null };
  } */

  async getRcaCodigo(rca: IRca): Promise<IRca[]> {
    const rcas = await this.rcasModel.getRcaCodigo(rca);
    return rcas;
  }
}