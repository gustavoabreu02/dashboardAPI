import { ResultSetHeader } from 'mysql2';
import { ICampanha } from '../interfaces';
import connection from './connection';

export default class CampanhasModel {
  connection = connection;

  async createCampanhas(campanha: any): Promise<ICampanha> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO DashboardAPI.Campanhas (name, mimetype, size, path) VALUES (?, ?, ?, ?)', 
      [campanha.originalname, campanha.mimetype, campanha.size, campanha.path],
    );
    const { insertId } = result;
    return { id: insertId, ...campanha };
  }
}