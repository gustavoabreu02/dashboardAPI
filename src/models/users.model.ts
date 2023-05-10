import { RowDataPacket } from 'mysql2';
import { ILogin, IData } from '../interfaces';
import connection from './connection';

export default class UserModel {
  connection = connection;

  async findByData(data: IData): Promise<ILogin> {
    const sql = 'SELECT * FROM DashboardAPI.Users WHERE email=? AND password=?';

    const [[row]] = await this.connection.execute<ILogin[] & RowDataPacket[]>(
      sql,
      [data.email, data.password],
    );
    return row;
  }
}