import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ILogin, IUser } from '../interfaces';
import connection from './connection';

export default class UserModel {
  connection = connection;

  async findByUsername(username: string): Promise<ILogin> {
    const sql = 'SELECT * FROM Trybesmith.Users WHERE username=?';

    const [[row]] = await this.connection.execute<ILogin[] & RowDataPacket[]>(sql, [username]);
    return row;
  }

  async createUser(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);', 
      [username, classe, level, password],
    );
    const { insertId } = result;
    return { id: insertId, ...user };
  }
}