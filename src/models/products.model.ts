import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct } from '../interfaces';
import connection from './connection';

/* export const getAllProducts = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products;');

return rows
}; */

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

  async uptdateProduct(id: number, order: number) {
    console.log(id);
    console.log(order);
    
    const sql = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    const result = await this.connection.execute<ResultSetHeader>(sql, [order, id]);
    return result;
  }
}