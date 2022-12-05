import Joi from 'joi';
import { IProduct } from '../../interfaces';
/* import HttpException from '../../shared/http.exception'; */

const schemaBody = Joi.object<IProduct>({
  
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validationBody = (body: IProduct) => {
  const { error } = schemaBody.validate(body);
  if (error) {
    return { message: error.message, code: 422 };
    /* throw new HttpException(400, error.message); */
  }
  return { message: null, code: null };
};

export default validationBody;