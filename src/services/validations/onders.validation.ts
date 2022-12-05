import Joi from 'joi';
import { IOrder } from '../../interfaces';
/* import HttpException from '../../shared/http.exception'; */

const schemaBody = Joi.object<IOrder>({
  
  productsIds: Joi.array().min(1).required().messages({
    'any.required': '"productsIds" is required',
    'array.base': '"productsIds" must be an array',
    'array.min': '"productsIds" must include only numbers',
  }),
});

const validationBody = (body: number[]) => {
  const { error } = schemaBody.validate({ productsIds: body });
  if (error) {
    const errorCode = error.details[0].type === 'any.required' ? 400 : 422;
    return { message: error.message, code: errorCode };
    /* throw new HttpException(400, error.message); */
  }
  return { message: null, code: null };
};

export default validationBody;