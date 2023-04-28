import { RowDataPacket } from 'mysql2';
import { IRca } from '../interfaces';
import connection from './connection';

export default class RcasModel {
  connection = connection;

  /*   async getAllProducts(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products;',
    );
    return rows;
  } */

  async getRcaCodigo(rca: IRca): Promise<IRca[]> {
    const sql = `SELECT REPRESENTANTE FROM DashboardAPI.Vendas WHERE CODUSUR = (?)
    GROUP BY REPRESENTANTE;`;
    const [result] = await this.connection.execute<IRca[] & RowDataPacket[]>(
      sql,
      [rca.codigo],
    );
    return result;
  }

/*   async updateProduct(productId: number, insertId: number) {
    const sql = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    await this.connection.execute<ResultSetHeader>(sql, [insertId, productId]);
  } */
}