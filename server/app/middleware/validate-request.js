const { HttpResponse } = require("../helpers");

const http = new HttpResponse();

class ValidateRequest {
  static validateParamExistence(req, res, next, queryName) {
    if (!(queryName in req.query)) {
      http.setError(400, `Missing ${queryName} in query params`);
      return http.send(res);
    }
    return next();
  }
}

module.exports = ValidateRequest;
