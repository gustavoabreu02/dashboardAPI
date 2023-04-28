import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IVendas, IUser, ISup } from '../interfaces';

import connection from './connection';

export default class VendasModel {
  connection = connection;

  async getVendasSup(sup: ISup): Promise<IVendas[]> {
    const sql = `SELECT 
    SUM(QT_CAIXA) AS Total_Caixa, 
    SUM(QT_VENDA) AS Total_Venda, 
    SUM(VENDA) AS Total_Venda_Valor, 
    COUNT(CASE WHEN TIPO = 'VFA' THEN 1 ELSE NULL END) AS Total_Venda_VFA 
    FROM DashboardAPI.Vendas 
    WHERE CODUSPERVISOR = (?) AND MES = (?);`;
    const [result] = await this.connection.execute<IVendas[] & RowDataPacket[]>(
      sql,
      [sup.codSup, sup.mes],
    );
    return result;
  }

  async getVendasRCA(sup: ISup): Promise<IVendas[]> {
    const sql = `SELECT REPRESENTANTE, CODUSUR, MES, SUM(VENDA) AS TOTAL_VENDAS
    FROM DashboardAPI.Vendas
    WHERE CODUSPERVISOR = (?) AND MES = (?)
    GROUP BY REPRESENTANTE, CODUSUR, MES
    ORDER BY TOTAL_VENDAS DESC;
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