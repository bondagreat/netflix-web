import * as Joi from 'joi';

const pinSchema = Joi.object({
  pin: Joi.string()
    .pattern(/^[0-9]{4}$/)
    .trim()
    .required()
    .messages({
      'string.empty': 'pin is required',
      'string.match': 'pin must be 4 numbers',
    }),
});

const validatePin = (input) => {
  const { error } = pinSchema.validate(input);
  if (error) {
    const result = error.details;
    return result;
  }
};

export default validatePin;
