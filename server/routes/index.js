const router = require("express").Router();
const loginRequired = require("../app/middleware/authRoute");
const employeeRouter = require("./employeeRoutes");
const userRouter = require("./usersRoute");

const prefix = "/api/v1";
router.use(`${prefix}/employees`, [loginRequired], employeeRouter);
router.use(`${prefix}/users`, userRouter);

module.exports = router;
