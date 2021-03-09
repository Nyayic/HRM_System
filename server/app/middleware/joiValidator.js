const Joi = require("joi");
const { HttpResponse } = require("../helpers");
const { isEmpty, replace } = require("lodash");

const http = new HttpResponse();

/**
 * Validate Request body against the schema
 *
 * @param {Object} req Http Request body
 * @param {Object} res Http Response
 * @param {Function} next
 * @param {Object} schema Schema to validate
 */
const JoiValidator = async (req, res, next, schema) => {
  const { body } = req;
  const validation = await schema.validate(body, { abortEarly: false });
  // If validation returns error, return invalid response else proceed with the request
  if (!isEmpty(validation) && validation.error) {
    const errors = [];
    validation.error.details.forEach((e) =>
      errors.push({
        field: e.context.key,
        message: replace(e.message, "\"", ""),
      })
    );
    http.setError(422, "Invalid request payload", { errors });
    return http.send(res);
  }
  return next();
};

module.exports = { JoiValidator };
