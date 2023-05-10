import { /* ResultSetHeader, */ RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

export default class ProductsModel {
  connection = connection;

  async getProductCodigo(product: IProduct): Promise<IProduct[]> {
    const sql = `SELECT PRODUTO FROM DashboardAPI.Vendas WHERE CODPROD = (?)
    GROUP BY PRODUTO;`;
    const [result] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      sql,
      [product.codigo],
    );
    return result;
  }
}