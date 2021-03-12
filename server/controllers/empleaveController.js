const Leave = require('../models/empleaveModel');

// Create and Save a new dept
exports.create = (req, res) => {
    // Validate request
    if(!req.body.leave_type) {
        return res.status(400).send({
            message: "leave type can not be empty"
        });
    }

    // Create a new leave
    const leave = new Leave({
        leave_type: req.body.leave_type || "leave type is required",
        from_date: req.body.from_date || "leave date is required",
        to_date: req.body.to_date || "starting date is required",
        number_of_days: req.body.number_of_days || "Number of days is required",
        remaining_leaves: req.body.remaining_leaves || "Remaining leaves is required",
        leave_reason: req.body.leave_reason|| "Reason for leave is required",
       
    });

    // Save leave in the database
    leave.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while adding leave."
        });
    });
};

// Retrieve and return all leave from the database.
exports.findAll = (req, res) => {
    Leave.find()
    .then(leaves => {
        res.send(leaves);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving leaves."
        });
    });
};

// Find a single leaves with a leaveId
exports.findOne = (req, res) => {
    Leave.findById(req.params.leaveId)
    .then(leave => {
        if(!leave) {
            return res.status(404).send({
                message: "leave not found with id " + req.params.leaveId
            });            
        }
        res.send(leave);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "leave not found with id " + req.params.leaveId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving leave with id " + req.params.leaveId
        });
    });
};

// Update a leave  identified by the leaveId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.leave_name) {
        return res.status(400).send({
            message: "leave name can not be empty"
        });
    }

    // Find leave and update it with the request body
    Leave.findByIdAndUpdate(req.params.leaveId, {
        leave_name: req.body.leave_name, 
     
    }, {new: true})
    .then(leave => {
        if(!leave) {
            return res.status(404).send({
                message: "leave not found with id " + req.params.leaveId
            });
        }
        res.send(leave);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "leave not found with id " + req.params.leaveId
            });                
        }
        return res.status(500).send({
            message: "Error updating leave with id " + req.params.leaveId
        });
    });
};

// Delete a leave with the specifiedleaveid in the request
exports.delete = (req, res) => {
    Leave.findByIdAndRemove(req.params.leaveId)
    .then(leave => {
        if(!leave) {
            return res.status(404).send({
                message: "leave not found with id " + req.params.leaveId
            });
        }
        res.send({message: "leave deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "leave not found with id " + req.params.leaveId
            });                
        }
        return res.status(500).send({
            message: "Could not delete leave with id " + req.params.leaveId
        });
    });
};