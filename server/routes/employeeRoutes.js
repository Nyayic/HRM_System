const express = require("express");
const router = express.Router();

const employee = require("../app/controllers/employeeController");

// Create a new employee
router.post("/new-employee", employee.create);

// Retrieve all employee
router.get("/employees", employee.findAll);

// Retrieve a single employee with Id
router.get("/employees/:employeeId", employee.findOne);

// Update employee with employeeId
router.put("/employees/:employeeId", employee.update);

// Delete an employee with employeeId
router.delete("/employees/:employeeId", employee.delete);

module.exports = router;
