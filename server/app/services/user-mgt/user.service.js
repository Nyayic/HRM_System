const User = require("../../../models/userModel");
const { omit, isEmpty } = require("lodash");

const { Op, Transaction, Association } = require("mongoose");

// This Class is responsible for handling all database interactions for a user
class UserService {
  /**
   * FIND All User Records;
   *
   * @param  {object} options
   * @returns {Promise}
   * @description returns all users or filtered using options param
   */
  static async findAllUsers(options) {
    const users = await User.find();
    return users;
  }

  /**
   * FIND One User Object;clear
   *
   *
   * @param  {object} options
   * @returns {Promise} any
   * @description returns a single user object basing on the options
   */
  static async findOneUser(id) {
    try {
      const user = await User.findById(id);
      if (user) {
        return user;
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * FIND User by Email or Phone;
   *
   * @param  {object} options
   * @returns {Promise} any
   * @description returns a single user object basing on the options
   */
  static async findByEmail(data) {
    const user = await User.findOne({ email: data });
    return user;
  }

  /**
   * CREATE New User Record;
   *
   * @param  {object} data
   * @returns {Promise}
   * @description creates a single user object from data object
   *@
   */
  static async createUser(data) {
    try {
      const user = new User(data);
      const newUser = await user.save();
      const token = await user.generateAuthToken();
      return { newUser, token };
    } catch (error) {
      throw error;
    }
  }

  /**
   * UPDATE Users table;
   *
   * @param  {object} data id of user object to be updated
   * @returns {Promise}
   * @description updates a single user object
   *@
   */
  static async updateUser(id, data) {
    const updated = await User.update(
      { ...data },
      { where: { id }, returning: true, excludes: ["password"], raw: true }
    )
      .then((resp) => resp[1][0])
      .catch((err) => {
        throw new Error(err.message);
      });
    return updated;
  }

  /**
   * DELETE User Record;
   *
   * @param {string} option user object to be deleted
   * @returns {Promise}
   * @description deletes a single user object
   *@
   */
  static async deleteUser(option) {
    const deleted = await User.destroy({
      where: { ...option },
    });
    return deleted;
  }

  /** VALIDATE User by phone and Email;
   *
   * @param  {Request} req
   * @returns {String} a specific error as a response from operation.
   */
  static async invalidPhoneAndEmail(body) {
    const phone = body.phone;
    const email = body.email;

    const userByphone = await User.findOne({ where: { phone: phone } });
    const userByemail = await User.findOne({ where: { email: email } });

    if (!isEmpty(userByemail)) {
      return "This Email address is already associated with an account";
    } else if (!isEmpty(userByphone)) {
      return `Phone number "${phone}" is already in use`;
    }
  }
}

module.exports = UserService;
