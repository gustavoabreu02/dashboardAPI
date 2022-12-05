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

  async createProducts(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const [rows] = await this.connection.execute<ResultSetHeader>(sql, [name, amount]);
    const { insertId } = rows;
    return { id: insertId, ...product };
  }

  async updateProduct(productId: number, insertId: number) {
    const sql = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    await this.connection.execute<ResultSetHeader>(sql, [insertId, productId]);
  }
}