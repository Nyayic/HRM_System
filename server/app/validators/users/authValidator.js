const { authSchema } = require("../schema/users");
const { JoiValidator } = require("../../middleware");

const validateLogin = async (req, res, next) => {
  return await JoiValidator(req, res, next, authSchema);
};

module.exports = { validateLogin };
