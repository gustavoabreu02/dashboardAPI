import { RowDataPacket } from 'mysql2';
import { IRca } from '../interfaces';
import connection from './connection';

export default class RcasModel {
  connection = connection;

  async getRcaCodigo(rca: IRca): Promise<IRca[]> {
    const sql = `SELECT REPRESENTANTE FROM DashboardAPI.Vendas WHERE CODUSUR = (?)
    GROUP BY REPRESENTANTE;`;
    const [result] = await this.connection.execute<IRca[] & RowDataPacket[]>(
      sql,
      [rca.codigo],
    );
    return result;
  }
}