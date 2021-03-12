const express = require('express')
const router = express.Router()

const leavetype = require('../controllers/leavetypeController');

    // Create a new leavetype
    router.post('/new-leavetype',
        leavetype.create
    );

    // Retrieve all leavetypes
    router.get(
        '/leavetypes',
        leavetype.findAll
    );

    // Retrieve a single leavetype
    router.get(
        '/leavetypes/:leavetypeId', 
        leavetype.findOne);

    // Update dept with deptId
    router.put(
        '/leavetypes/:leavetypeId', 
        leavetype.update
    );

    // Delete an dept with edeptId
    router.delete(
        '/leavetypes/:leavetypeId', 
        leavetype.delete
    );

module.exports= router;