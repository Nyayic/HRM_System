const { JoiValidator } = require("../../middleware");
const { userSchema } = require("../schema/users");

const validateCreateUser = async (req, res, next) => {
  return await JoiValidator(req, res, next, userSchema.createUserSchema);
};

const validateUpdateUser = async (req, res, next) => {
  return await JoiValidator(req, res, next, userSchema.updateUserSchema);
};

module.exports = { validateCreateUser, validateUpdateUser };
