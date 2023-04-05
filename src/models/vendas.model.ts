import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IVendas, IUser, ISup } from '../interfaces';

import connection from './connection';

export default class VendasModel {
  connection = connection;

  async getVendasSup(sup: ISup): Promise<IVendas[]> {
    const sql = `SELECT CLIENTE,
    FORNECEDOR,
    REPRESENTANTE,
    SUPERVISOR,
    DEPARTAMENTO,
    SECAO,
    LINHA,
    PRODUTO, QT_VENDA, QT_CAIXA, VENDA, MES, ANO, CIDADE 
    FROM DashboardAPI.Vendas 
    WHERE CODUSPERVISOR = (?) AND MES = (?);
    `;
    const [result] = await this.connection.execute<IVendas[] & RowDataPacket[]>(
      sql,
      [sup.codSup, sup.mes],
    );
    return result;
  }

  async createOrder(order: IUser) {
    const sql = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(sql, [order.id]);

    return insertId;
  }
}