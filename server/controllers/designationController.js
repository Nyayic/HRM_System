const Designation = require('../models/designationModel');

// Create and Save a new dept
exports.create = (req, res) => {
    // Validate request
    if(!req.body.designation_name) {
        return res.status(400).send({
            message: "name can not be empty"
        });
    }

    // Create a new designation
    const designation = new Designation({
        designation_name: req.body.designation_name || "designation name is required",
        department_name: req.body.department_name || "department name is required",

       
    });


    // Save designation in the database
    designation.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while adding designation."
        });
    });
};

// Retrieve and return all designation from the database.
exports.findAll = (req, res) => {
    Designation.find()
    .then(designations => {
        res.send(designations);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving designations."
        });
    });
};

// Find a single designations with a designationId
exports.findOne = (req, res) => {
    Designation.findById(req.params.designationId)
    .then(designation => {
        if(!designation) {
            return res.status(404).send({
                message: "designation not found with id " + req.params.designationId
            });            
        }
        res.send(designation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "designation not found with id " + req.params.designationId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving designation with id " + req.params.designationId
        });
    });
};

// Update a designation  identified by the designationId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.designation_name) {
        return res.status(400).send({
            message: "designation name can not be empty"
        });
    }

    // Find designation and update it with the request body
    Designation.findByIdAndUpdate(req.params.designationId, {
        designation_name: req.body.designation_name, 
     
    }, {new: true})
    .then(designation => {
        if(!designation) {
            return res.status(404).send({
                message: "designation not found with id " + req.params.designationId
            });
        }
        res.send(designation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "designation not found with id " + req.params.designationId
            });                
        }
        return res.status(500).send({
            message: "Error updating designation with id " + req.params.designationId
        });
    });
};

// Delete a designation with the specifieddesignationid in the request
exports.delete = (req, res) => {
    Designation.findByIdAndRemove(req.params.designationId)
    .then(designation => {
        if(!designation) {
            return res.status(404).send({
                message: "designation not found with id " + req.params.designationId
            });
        }
        res.send({message: "designation deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "designation not found with id " + req.params.designationId
            });                
        }
        return res.status(500).send({
            message: "Could not delete designation with id " + req.params.designationId
        });
    });
};