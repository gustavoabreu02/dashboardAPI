import Joi from 'joi';
import { ILogin } from '../../interfaces';
/* import HttpException from '../../shared/http.exception'; */

const schemaBody = Joi.object({
  username: Joi.string().required().messages({ 'any.required': '"username" is required' }),
  password: Joi.string().required().messages({ 'any.required': '"password" is required' }),
});

const validationBody = (body: ILogin) => {
  const { error } = schemaBody.validate(body);
  if (error) {
    return { message: error.message, code: 400 };
    /* throw new HttpException(400, error.message); */
  }
  return { message: null, code: null };
};

export default validationBody;

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