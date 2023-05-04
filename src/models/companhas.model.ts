import { ResultSetHeader } from 'mysql2';
import { ICampanha } from '../interfaces';
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
}