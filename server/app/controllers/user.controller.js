const bcrypt = require("bcrypt");
const { isEmpty } = require("lodash");
const moment = require("moment");
const { userService } = require("../services");
const { HttpResponse, createToken } = require("../helpers");
const models = require("../../models/employeeModel");
const { random } = require("faker");
const User = require("../../models/userModel");

const http = new HttpResponse();

class UserController {
  /**
   * Login User with Either phone or Email and Password
   *
   * @param {function} req Http Request Body
   * @param {function} res Http Response
   *
   * @return {JSON} Return Json Response
   */
  async login(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const userByEmailOrPhone = await userService.findByEmail(email);
      if (isEmpty(userByEmailOrPhone)) {
        http.setError(400, "Invalid email provided.");
        return http.send(res);
      }

      const comparePassword = bcrypt.compareSync(
        password,
        userByEmailOrPhone.password
      );

      bcrypt
        .compare(password, userByEmailOrPhone.password)
        .then((result) => {
          if (result) {
            console.log("authentication successful");
          } else {
            console.log("authentication failed. Password doesn't match");
          }
        })
        .catch((err) => console.error(err));

      console.log(password, userByEmailOrPhone.password);
      console.log(comparePassword);
      if (comparePassword) {
        const token = createToken({
          id: userByEmailOrPhone.id,
          email: userByEmailOrPhone.email,
        });
        const tokenResponse = {
          token_type: "Bearer",
          token,
        };
        await User.updateOne(
          { _id: userByEmailOrPhone.id },
          {
            last_login: moment(new Date()).format(),
            remember_token: token,
          }
        );

        const user = await userService.findOneUser({
          where: { id: userByEmailOrPhone.id },
          include: [
            { association: models.User.roles, include: ["apps"] },
            "roleGroups",
          ],
          attributes: { exclude: ["remember_token"] },
        });

        http.setSuccess(200, "Login successful", {
          // user,
          access_token: tokenResponse,
        });
      } else {
        http.setError(400, "Incorrect password!");
      }
      return http.send(res);
    } catch (error) {
      http.setError(400, "Unable to authenticate you", {
        error: { message: error.message },
      });
      return http.send(res);
    }
  }

  async getAuthUserProfile(req, res) {
    try {
      const { id } = req.user;
      const user = await userService.findOneUser({
        where: { id },
        include: [
          { association: models.User.roles, include: ["apps"] },
          "roleGroups",
        ],
        attributes: { exclude: ["remember_token"] },
      });
      http.setSuccess(200, "Profile fetched successfully", { user });
      if (isEmpty(user)) http.setError(404, "User Data Not Found.");
      return http.send(res);
    } catch (error) {
      http.setError(400, "Unable to get this User.", {
        error: { error: error.message },
      });
      return http.send(res);
    }
  }

  /**
   * CREATE New User Data.
   *
   * @param {*} req Request body
   * @param {*} res Response
   *
   * @return {JSON} Return JSON Response
   */

  async createUser(req, res) {
    const { username, email, phone } = req.body;
    const userByEmail_Phone = userService.invalidPhoneAndEmail(req.body);
    const password = req.body.password;
    console.log(userByEmail_Phone);
    if (!isEmpty(userByEmail_Phone)) {
      http.setError(400, userByEmail_Phone);
      return http.send(res);
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const validatedUser = {
      username,
      password: hashedPassword,
      email,
      phone,
    };

    try {
      const result = await userService.createUser(validatedUser);
      console.log("hello");
      http.setSuccess(201, "User created successfully", {
        result,
      });
      return http.send(res);
    } catch (error) {
      http.setError(400, "Unable to create this User.", {
        error: error,
      });
      return http.send(res);
    }
  }

  // index function to show users
  /**
   *
   * @param {*} req
   * @param {*} res
   */
  async index(req, res) {
    try {
      const users = await userService.findAllUsers();
      http.setSuccess(200, "Users fetch successful", {
        users,
      });
      return http.send(res);
    } catch (error) {
      http.setError(400, "Unable to fetch users", {
        error: { message: error.message },
      });
      return http.send(res);
    }
  }

  // update user
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updateUser = await userService.updateUser(id, req.body);
      const user = updateUser[1][0];
      http.setSuccess(200, "user updated successfully", {
        user,
      });
      if (isEmpty(user)) http.setError(404, "user Data Not Found.");
      return http.send(res);
    } catch (error) {
      http.setError(400, "Unable To Update This User.", {
        error: {
          message: error.message,
        },
      });
      return http.send(res);
    }
  }

  // get all method
  async getAll(req, res) {
    try {
      const users = await userService.findAllUsers();
      http.setSuccess(200, "Users", { users });
      return http.send(res);
    } catch (error) {
      http.setError(400, "Unable to get fetch Users.", {
        error: { error: error.message },
      });
      return http.send(res);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const user = await userService.findOneUser(id);
      http.setSuccess(200, "User fetch successful", { user });
      if (isEmpty(user)) http.setError(404, "User Data Not Found.");
      return http.send(res);
    } catch (error) {
      http.setError(404, "User not found");
      return http.send(res);
    }
  }

  /**
   * Destroy User token
   *
   * @param {Object} req Http Request Body
   * @param {Object} res Http Response
   *
   * @returns {JSON} Return Json Response
   */
  async logout(req, res) {
    const { id } = req.user;
    try {
      await userService.updateUser(id, { remember_token: null });
      http.setSuccess(200, "You have been logged out");
      return http.send(res);
    } catch (error) {
      http.setError(400, "Unable to log you out.", { error: error.message });
      return http.send(res);
    }
  }
}

module.exports = UserController;
