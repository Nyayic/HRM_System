const express = require('express')
const router = express.Router()

const designation = require('../controllers/designationController');

    // Create a new designation
    router.post('/new-designation',
        designation.create
    );

    // Retrieve all designations
    router.get(
        '/designations',
        designation.findAll
    );

    // Retrieve a single designation
    router.get(
        '/designations/:designationId', 
        designation.findOne);

    // Update dept with deptId
    router.put(
        '/designations/:designationId', 
        designation.update
    );

    // Delete an dept with edeptId
    router.delete(
        '/designations/:designationId', 
        designation.delete
    );

module.exports= router;