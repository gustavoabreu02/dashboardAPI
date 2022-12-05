import { IUser } from '../interfaces';
import UserModel from '../models/users.model';

export default class UsersService {
  userModel = new UserModel();

  async createUser(user: IUser): Promise<IUser> {
    const userCreated = await this.userModel.createUser(user);
    return userCreated;
  }
}