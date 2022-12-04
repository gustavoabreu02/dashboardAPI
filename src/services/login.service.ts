/* import Joi from 'joi'; */
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { ILogin } from '../interfaces';
import UserModel from '../models/users.model';
/* import HttpException from '../shared/http.exception'; */
import validationBody from './validations/login.validation';

export default class LoginService {
  userModel = new UserModel();

  async createToken(login: ILogin) {
    const { message, code } = validationBody(login);
    if (message) return { code, message };
    const user = await this.userModel.findByUsername(login.username);

    if (!user || user.password !== login.password) {
      return { message: 'Username or password invalid', code: 401 };
      /* const e = new HttpException(401, 'Usuário não encontrado');
      throw e; */
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET as string,

      { algorithm: 'HS256', expiresIn: '1d' },
    );
    return { message: { token }, code: null };
  }
}

/* validateBody(params: ILogin): ILogin{
    const schema = Joi.object<ILogin>({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { error, value } = schema.validate(params);

    if (error) {
        throw error
    }
    return value;
    } */