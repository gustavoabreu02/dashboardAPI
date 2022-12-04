import { RowDataPacket } from 'mysql2';
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
}