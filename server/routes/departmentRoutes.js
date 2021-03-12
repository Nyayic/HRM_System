const express = require('express')
const router = express.Router()

const department = require('../controllers/departmentController');

    // Create a new department
    router.post('/new-department',
        department.create
    );

    // Retrieve all departments
    router.get(
        '/departments',
        department.findAll
    );

    // Retrieve a single department
    router.get(
        '/departments/:departmentId', 
        department.findOne);

    // Update dept with deptId
    router.put(
        '/departments/:departmentId', 
        department.update
    );

    // Delete an dept with edeptId
    router.delete(
        '/departments/:departmentId', 
        department.delete
    );

module.exports= router;