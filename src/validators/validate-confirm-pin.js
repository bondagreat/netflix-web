import * as Joi from 'joi';

const newPinSchema = Joi.object({
  pin: Joi.string()
    .pattern(/^[0-9]{4}$/)
    .trim()
    .required()
    .messages({
      'string.empty': 'pin is required',
      'string.match': 'pin must be 4 numbers',
    }),
  confirmPin: Joi.string()
    .valid(Joi.ref('pin'))
    .required()
    .trim()
    .messages({
      'any.only': 'pin and confirm pin did not match',
      'string.empty': 'confirm pin is required',
    })
    .strip(),
});

const validateNewPin = (input) => {
  const { error } = newPinSchema.validate(input);
  if (error) {
    const result = error.details;
    return result;
  }
};

export default validateNewPin;
