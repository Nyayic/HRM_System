const Holiday = require('../models/holidayModel');

// Create and Save a new dept
exports.create = (req, res) => {
    // Validate request
    if(!req.body.holiday_name) {
        return res.status(400).send({
            message: "Holiday name can not be empty"
        });
    }

    // Create a new holiday
    const holiday = new Holiday({
        holiday_name: req.body.holiday_name || "holiday name is required",
        holiday_date: req.body.holiday_date || "holiday date is required",
       
    });

    // Save holiday in the database
    holiday.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while adding holiday."
        });
    });
};

// Retrieve and return all holiday from the database.
exports.findAll = (req, res) => {
    Holiday.find()
    .then(holidays => {
        res.send(holidays);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving holidays."
        });
    });
};

// Find a single holidays with a holidayId
exports.findOne = (req, res) => {
    Holiday.findById(req.params.holidayId)
    .then(holiday => {
        if(!holiday) {
            return res.status(404).send({
                message: "holiday not found with id " + req.params.holidayId
            });            
        }
        res.send(holiday);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "holiday not found with id " + req.params.holidayId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving holiday with id " + req.params.holidayId
        });
    });
};

// Update a holiday  identified by the holidayId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.holiday_name) {
        return res.status(400).send({
            message: "holiday name can not be empty"
        });
    }

    // Find holiday and update it with the request body
    Holiday.findByIdAndUpdate(req.params.holidayId, {
        holiday_name: req.body.holiday_name, 
     
    }, {new: true})
    .then(holiday => {
        if(!holiday) {
            return res.status(404).send({
                message: "holiday not found with id " + req.params.holidayId
            });
        }
        res.send(holiday);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "holiday not found with id " + req.params.holidayId
            });                
        }
        return res.status(500).send({
            message: "Error updating holiday with id " + req.params.holidayId
        });
    });
};

// Delete a holiday with the specifiedholidayid in the request
exports.delete = (req, res) => {
    Holiday.findByIdAndRemove(req.params.holidayId)
    .then(holiday => {
        if(!holiday) {
            return res.status(404).send({
                message: "holiday not found with id " + req.params.holidayId
            });
        }
        res.send({message: "holiday deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "holiday not found with id " + req.params.holidayId
            });                
        }
        return res.status(500).send({
            message: "Could not delete holiday with id " + req.params.holidayId
        });
    });
};