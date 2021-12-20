const Joi = require('@hapi/joi');

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().min(8).max(255).required().email(),
  password: Joi.string().min(8).max(1024).required(),
  repeat_password: Joi.ref('password'),
});

const loginSchema = Joi.object({
  email: Joi.string().min(8).max(255).required().email(),
  password: Joi.string().min(8).max(1024).required(),
});

const resgisterValid = user => registerSchema.validate(user);
const loginValid = user => loginSchema.validate(user);

module.exports = { resgisterValid, loginValid };