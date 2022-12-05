import Joi from 'joi';

const schemaBody = Joi.object({
  
  productsIds: Joi.array().min(1).required().messages({
    'any.required': '"productsIds" is required',
    'array.base': '"productsIds" must be an array',
    'array.min': '"productsIds" must include only numbers',
  }),
});

const validationBody = (productsIds: number[]) => {
  const { error } = schemaBody.validate({ productsIds });
  if (error) {
    const errorCode = error.details[0].type === 'any.required' ? 400 : 422;
    return { message: error.message, code: errorCode };
  }
  return { message: null, code: null };
};

export default validationBody;