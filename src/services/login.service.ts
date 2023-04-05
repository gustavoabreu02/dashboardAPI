/* import Joi from 'joi'; */
import 'dotenv/config';
import { IData } from '../interfaces';
import UserModel from '../models/users.model';
/* import HttpException from '../shared/http.exception'; */
/* import validationBody from './validations/login.validation'; */

export default class LoginService {
  userModel = new UserModel();

  async findByData(data: IData) {
  /*     const { message, code } = validationBody(data);
    if (message) return { code, message }; */
    const user = await this.userModel.findByData(data);

    if (!user) {
      return { message: 'Email or password invalid', code: 401 };
      /* const e = new HttpException(401, 'Usuário não encontrado');
      throw e; */
    }

    return { message: user, code: null };
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