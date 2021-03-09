const Joi = require("joi");

const userRole = Joi.number();

const createUserSchema = Joi.object({
  username: Joi.string().required().trim().max(60),

  password: Joi.string().required().trim().max(60),

  email: Joi.string().email().required().trim().max(60),

  phone: Joi.string().required().trim().max(30),
});

/**
 *
 *
 * update user
 */

const updateUserSchema = Joi.object({
  username: Joi.string().required().trim().max(60),

  email: Joi.string().required().trim().max(60),

  phone: Joi.string().trim().max(30),
});

module.exports = { createUserSchema, updateUserSchema };
