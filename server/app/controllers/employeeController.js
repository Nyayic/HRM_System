const Employee = require("../../models/employeeModel");

// Create and Save a new employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    return res.status(400).send({
      message: "Email can not be empty",
    });
  }

  // Create a employee
  const employee = new Employee({
    first_name: req.body.first_name || "First name is required",
    last_name: req.body.last_name || "last name is required",
    user_name: req.body.user_name || "First name is required",
    email: req.body.email || "Email is required",
    employee_id: req.body.first_name || "ID is required",
    joining_date: req.body.joining_date,
    phone_number: req.body.phone_number,
    qualification: req.body.qualification,
    department: req.body.department,
    designation: req.body.designation,
  });

  // Save employee in the database
  employee
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while adding employee.",
      });
    });
};

// Retrieve and return all employees from the database.
exports.findAll = (req, res) => {
  Employee.find()
    .then((employees) => {
      res.send(employees);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees.",
      });
    });
};

// Find a single employee with a employeeId
exports.findOne = (req, res) => {
  Employee.findById(req.params.employeeId)
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId,
        });
      }
      res.send(employee);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving employee with id " + req.params.employeeId,
      });
    });
};

// Update a employee identified by the employeeId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.email) {
    return res.status(400).send({
      message: "Email can not be empty",
    });
  }

  // Find employee and update it with the request body
  Employee.findByIdAndUpdate(
    req.params.employeeId,
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_name: req.body.user_name,
      email: req.body.email,
      employee_id: req.body.employee_id,
      joining_date: req.body.joining_date,
      phone_number: req.body.phone_number,
      qualification: req.body.qualification,
      department: req.body.department,
      designation: req.body.designation,
    },
    { new: true }
  )
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId,
        });
      }
      res.send(employee);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId,
        });
      }
      return res.status(500).send({
        message: "Error updating employee with id " + req.params.employeeId,
      });
    });
};

// Delete a employee with the specified employeeid in the request
exports.delete = (req, res) => {
  Employee.findByIdAndRemove(req.params.employeeId)
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId,
        });
      }
      res.send({ message: "Employee deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Employee not found with id " + req.params.employeeId,
        });
      }
      return res.status(500).send({
        message: "Could not delete employee with id " + req.params.employeeId,
      });
    });
};
