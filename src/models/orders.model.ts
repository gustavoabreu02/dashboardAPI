import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder, IUser } from '../interfaces';

import connection from './connection';

export default class OrderModel {
  connection = connection;

  async getAllOrders(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) AS productsIds
      FROM Trybesmith.Orders ord
      INNER JOIN Trybesmith.Products prod
      ON ord.id = prod.orderId
      GROUP BY ord.id;
      `,
    );
    return result;
  }

  async createOrder(order: IUser) {
    const sql = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';

    const [result] = await this.connection.execute<ResultSetHeader>(sql, [order.id]);
    const { insertId } = result;
    return insertId;
  }
}