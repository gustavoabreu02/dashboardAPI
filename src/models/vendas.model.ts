import { RowDataPacket } from 'mysql2';
import { IVendas, ISup } from '../interfaces';

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

  async getAllVendas(mes: string): Promise<IVendas[]> {
    const sql = `SELECT 
    SUM(QT_CAIXA) AS Total_Caixa, 
    SUM(QT_VENDA) AS Total_Venda, 
    SUM(VENDA) AS Total_Venda_Valor, 
    COUNT(CASE WHEN TIPO = 'VFA' THEN 1 ELSE NULL END) AS Total_Venda_VFA 
    FROM DashboardAPI.Vendas 
    WHERE MES = (?);`;
    const [result] = await this.connection.execute<IVendas[] & RowDataPacket[]>(
      sql,
      [mes],
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

  async getAllVendasRCA(mes: string): Promise<IVendas[]> {
    const sql = `SELECT REPRESENTANTE, CODUSUR, MES, SUM(VENDA) AS TOTAL_VENDAS
    FROM DashboardAPI.Vendas
    WHERE MES = (?)
    GROUP BY REPRESENTANTE, CODUSUR, MES
    ORDER BY TOTAL_VENDAS DESC;
    `;
    const [result] = await this.connection.execute<IVendas[] & RowDataPacket[]>(
      sql,
      [mes],
    );
    return result;
  }
}