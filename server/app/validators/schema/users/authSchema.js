const Joi = require("joi");

const loginSchema = Joi.object({
  // Username Must be a String
  // Username is Required
  username: Joi.string().required().messages({
    'any.string': "Your passwod must be a string",
    'any.required': "Username is a required field",
  }),

  //Password is required
  // Password Must be a string
  password: Joi.string().required().messages({
    'any.string': "Your passwod must be a string",
    'any.required': "Password is a required field",
  }),
});

module.exports = loginSchema;
