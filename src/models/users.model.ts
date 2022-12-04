import { RowDataPacket } from 'mysql2';
import { ILogin } from '../interfaces';
import connection from './connection';

export default class UserModel {
  connection = connection;

  async findByUsername(username: string): Promise<ILogin> {
    const sql = 'SELECT * FROM Trybesmith.Users WHERE username=?';

    const [[row]] = await this.connection.execute<ILogin[] & RowDataPacket[]>(sql, [username]);
    return row;
  }
}