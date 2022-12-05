import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';
import UserModel from '../models/users.model';
import validationBody from './validations/users.validation';

export default class UsersService {
  userModel = new UserModel();

  async createUser(user: IUser) {
    /* const { password, level } = user; */
    /* if (!password) return { code: 400, message: '"password" is required' }; */
    const { message, code } = validationBody(user);
    /* if (!level) return { code: 400, message: '"level" is required' }; */

    if (message) return { code, message };
    const userCreated = await this.userModel.createUser(user);

    const token = jwt.sign(
      { id: userCreated.id, username: userCreated.username },
      process.env.JWT_SECRET as string,

      { algorithm: 'HS256', expiresIn: '1d' },
    );
 
    return { message: { token }, code: null };
  }
}