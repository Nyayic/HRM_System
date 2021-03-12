const Department = require('../models/departmentModel');

// Create and Save a new dept
exports.create = (req, res) => {
    // Validate request
    if(!req.body.department_name) {
        return res.status(400).send({
            message: "name can not be empty"
        });
    }

    // Create a new dept
    const department = new Department({
        department_name: req.body.department_name || "Department name is required",
       
    });

    // Save department in the database
    department.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while adding department."
        });
    });
};

// Retrieve and return all department from the database.
exports.findAll = (req, res) => {
    Department.find()
    .then(departments => {
        res.send(departments);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving departments."
        });
    });
};

// Find a single departments with a departmentId
exports.findOne = (req, res) => {
    Department.findById(req.params.departmentId)
    .then(department => {
        if(!department) {
            return res.status(404).send({
                message: "department not found with id " + req.params.departmentId
            });            
        }
        res.send(department);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "department not found with id " + req.params.departmentId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving department with id " + req.params.departmentId
        });
    });
};

// Update a department  identified by the departmentId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.department_name) {
        return res.status(400).send({
            message: "department name can not be empty"
        });
    }

    // Find department and update it with the request body
    Department.findByIdAndUpdate(req.params.departmentId, {
        department_name: req.body.department_name, 
     
    }, {new: true})
    .then(department => {
        if(!department) {
            return res.status(404).send({
                message: "department not found with id " + req.params.departmentId
            });
        }
        res.send(department);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "department not found with id " + req.params.departmentId
            });                
        }
        return res.status(500).send({
            message: "Error updating department with id " + req.params.departmentId
        });
    });
};

// Delete a department with the specifieddepartmentid in the request
exports.delete = (req, res) => {
    Department.findByIdAndRemove(req.params.departmentId)
    .then(department => {
        if(!department) {
            return res.status(404).send({
                message: "department not found with id " + req.params.departmentId
            });
        }
        res.send({message: "department deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "department not found with id " + req.params.departmentId
            });                
        }
        return res.status(500).send({
            message: "Could not delete department with id " + req.params.departmentId
        });
    });
};