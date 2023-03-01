import Joi from 'joi';

const GetStartEmailSchema = Joi.object({
  email: Joi.string().trim().email({ tlds: false }).required().messages({
    'string.empty': 'Email is required',
    'string.alphanum': 'Email must contain only numbers or alphabets',
    'string.email': 'Email must be a valid email',
  }),
});

const vlidateStartEmail = (input) => {
  const { error } = GetStartEmailSchema.validate(input);

  if (error) {
    const result = error.details;
    // console.log(result);
    return result;
  }
};

export default vlidateStartEmail;
