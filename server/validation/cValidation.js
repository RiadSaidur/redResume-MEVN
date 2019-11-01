const Joi = require('@hapi/joi');

const cvSchema = Joi.object({
  name: Joi.string().min(3).max(100),
  email: Joi.string().min(8).max(255).email(),
  sex: Joi.string().min(3).max(6),
  dob: Joi.string().min(8).max(20),
  address: Joi.string().min(8).max(255),
  mobile: Joi.string().min(8).max(15),
  education: Joi.array(),
  father: Joi.string().min(3).max(100),
  mother: Joi.string().min(3).max(100),
  nationality: Joi.string().min(3).max(15),
  permanent: Joi.string().min(8).max(255),
  skills: Joi.array(),
  religion: Joi.string().min(3).max(10),
  blood: Joi.string().min(2).max(10),
  status: Joi.string().min(3).max(10),
  hobby: Joi.string().min(3).max(255)
});

const cValid = cv => cvSchema.validate(cv);

module.exports = cValid;