const express = require('express')
const router = express.Router()

const leave = require('../controllers/empleaveController');

    // Create a new leave
    router.post('/new-leave',
        leave.create
    );

    // Retrieve all leaves
    router.get(
        '/leaves',
        leave.findAll
    );

    // Retrieve a single leave
    router.get(
        '/leaves/:leaveId', 
        leave.findOne);

    // Update dept with deptId
    router.put(
        '/leaves/:leaveId', 
        leave.update
    );

    // Delete an dept with edeptId
    router.delete(
        '/leaves/:leaveId', 
        leave.delete
    );

module.exports= router;