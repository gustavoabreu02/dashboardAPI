import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ICampanha, ICampanhaFile, ICampanhaSup } from '../interfaces';
import connection from './connection';

export default class CampanhasModel {
  connection = connection;

  async createCampanhas(campanha: ICampanha): Promise<ICampanha> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO DashboardAPI.Campanhas (name, sup, file) VALUES (?, ?, ?)', 
      [campanha.name, campanha.sup, campanha.file],
    );
    const { insertId } = result;
    return { id: insertId, ...campanha };
  }

  async getCampanhasSup(sup: ICampanhaSup): Promise<ICampanha[]> {
    const sql = 'SELECT * FROM DashboardAPI.Campanhas WHERE sup = (?);';
    const [result] = await this.connection.execute<ICampanha[] & RowDataPacket[]>(
      sql,
      [sup.sup],
    );
    return result;
  }

  async getAllCampanhas(): Promise<ICampanha[]> {
    const sql = 'SELECT * FROM DashboardAPI.Campanhas;';
    const [result] = await this.connection.execute<ICampanha[] & RowDataPacket[]>(
      sql,
    );
    return result;
  }

  async removeCampanha(file: ICampanhaFile): Promise<ICampanha[]> {
    const sql = 'DELETE FROM DashboardAPI.Campanhas WHERE id = (?) AND file = (?);';
    const [result] = await this.connection.execute<ICampanha[] & RowDataPacket[]>(
      sql,
      [file.id, file.file],
    );
    return result;
  }
}