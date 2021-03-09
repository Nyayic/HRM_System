const { isObject, isEmpty } = require("lodash");
const { decodeToken } = require("../helpers");
const { HttpResponse } = require("../helpers");
const { userService } = require("../services");

const http = new HttpResponse();

/**
 * ENSURE the user token is provided and valid;
 *
 * @param {*} req Request Header that contains the token.
 * @param {*} res Handle http Response.
 * @param {*} next continue to the next middleware if token is valid.
 *
 * @return {*} Return Json of function next response.
 */
const loginRequired = async (req, res, next) => {
  // GET authorization from request Headers
  const {
    headers: { authorization },
  } = req;
  if (authorization) {
    try {
      // SPLIT Headers and check if Token is Bearer type
      const authToken = authorization.split(" ");
      if (authToken[0] !== "Bearer") {
        http.setError(403, "Invalid access token type provided.");
        return http.send(res);
      }

      // DECODE the token to check it returns user Object or an Error message
      const decodedToken = await decodeToken(authToken[1]);
      if (!isObject(decodedToken)) {
        http.setError(401, "Invalid token provided", {
          error: { message: decodedToken },
        });
        return http.send(res);
      }

      // IDENTIFY the token user and set the request user to the new user Object
      const tokenUser = await userService.findOneUser({
        where: { id: decodedToken.id, email: decodedToken.email },
      });
      if (
        isEmpty(tokenUser) ||
        isEmpty(tokenUser.dataValues) ||
        tokenUser.dataValues.remember_token !== authToken[1]
      ) {
        http.setError(401, "Invalid token provided.", {
          error: { message: "Token user does not exist" },
        });
        return http.send(res);
      }

      req.user = tokenUser;

      // PROCEED to the next middleware
      return next();
    } catch (error) {
      http.setError(400, "Unable to process your request", {
        error: { message: error.message },
      });
      return http.send(res);
    }
  }

  // Return Unauthorized access message if no authorization in the request header
  http.setError(401, "Unauthorized access.");
  return http.send(res);
};

module.exports = loginRequired;
