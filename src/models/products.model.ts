import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

export default class ProductsModel {
  connection = connection;

  async getAllProducts(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products;',
    );
    return rows;
  }

  async getProductCodigo(product: IProduct): Promise<IProduct[]> {
    const sql = `SELECT PRODUTO FROM DashboardAPI.Vendas WHERE CODPROD = (?)
    GROUP BY PRODUTO;`;
    const [result] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      sql,
      [product.codigo],
    );
    return result;
  }

  async updateProduct(productId: number, insertId: number) {
    const sql = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    await this.connection.execute<ResultSetHeader>(sql, [insertId, productId]);
  }
}