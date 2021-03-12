const Leavetype = require('../models/leavetypeModel');

// Create and Save a new dept
exports.create = (req, res) => {
    // Validate request
    if(!req.body.leavetype) {
        return res.status(400).send({
            message: "Leave type can not be empty"
        });
    }

    // Create a new leavetype
    const leavetype = new Leavetype({
        leavetype: req.body.leavetype || "leave type  is required",
        number_of_days: req.body.number_of_days || "number of days is required",

       
    });


    // Save leavetype in the database
    leavetype.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while adding leavetype."
        });
    });
};

// Retrieve and return all leavetype from the database.
exports.findAll = (req, res) => {
    Leavetype.find()
    .then(leavetypes => {
        res.send(leavetypes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving leavetypes."
        });
    });
};

// Find a single leavetypes with a leavetypeId
exports.findOne = (req, res) => {
    Leavetype.findById(req.params.leavetypeId)
    .then(leavetype => {
        if(!leavetype) {
            return res.status(404).send({
                message: "leavetype not found with id " + req.params.leavetypeId
            });            
        }
        res.send(leavetype);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "leavetype not found with id " + req.params.leavetypeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving leavetype with id " + req.params.leavetypeId
        });
    });
};

// Update a leavetype  identified by the leavetypeId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.leavetype) {
        return res.status(400).send({
            message: "leavetype  can not be empty"
        });
    }

    // Find leavetype and update it with the request body
    Leavetype.findByIdAndUpdate(req.params.leavetypeId, {
        leavetype: req.body.leavetype, 
     
    }, {new: true})
    .then(leavetype => {
        if(!leavetype) {
            return res.status(404).send({
                message: "leavetype not found with id " + req.params.leavetypeId
            });
        }
        res.send(leavetype);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "leavetype not found with id " + req.params.leavetypeId
            });                
        }
        return res.status(500).send({
            message: "Error updating leavetype with id " + req.params.leavetypeId
        });
    });
};

// Delete a leavetype with the specifiedleavetypeid in the request
exports.delete = (req, res) => {
    Leavetype.findByIdAndRemove(req.params.leavetypeId)
    .then(leavetype => {
        if(!leavetype) {
            return res.status(404).send({
                message: "leave type not found with id " + req.params.leavetypeId
            });
        }
        res.send({message: "leave type deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "leave type not found with id " + req.params.leavetypeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete leave type with id " + req.params.leavetypeId
        });
    });
};