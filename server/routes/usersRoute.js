const express = require("express");
const userController = require("../app/controllers/user.controller");
const { userValidator } = require("../app/validators/users/");

const userRouter = express.Router();
const controller = new userController();

// User Management Routes.
userRouter.get("/", [], controller.index);

userRouter.post("/", [userValidator.validateCreateUser], controller.createUser);

userRouter.post("/login", controller.login);
//get user by id
userRouter.get("/:id", [], controller.getOne);

// update users
userRouter.get("/:id", [], controller.getOne);
userRouter.put(
  "/:id",

  [userValidator.validateUpdateUser],
  controller.updateUser
);

module.exports = userRouter;
