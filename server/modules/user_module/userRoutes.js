//requiring dependecies
const express = require("express");
const router = express.Router();
const userController = require("./userController");

const loginController = require("../user_module/loginController");
//All users routes
router.post("/user/userlogin:id", loginController.loginUser);

//create new user

// router.post('/signup', userController.signup);
// router.post('/login', userController.login);

//get all users
router.get("/users", userController.usersList);

//get all hrs
router.get(
  "/users/hrs",
  loginController.CheckToken,
  userController.hrList
);

//get all employees
router.get(
  "/users/employees",
  loginController.CheckToken,
  userController.employeeList
);

//get a single employee
router.get(
  "/users/employee/:requestId",
  loginController.CheckToken,
  userController.singleEmployeeRequest
);

module.exports = router;