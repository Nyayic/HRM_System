const express = require('express')
const router = express.Router()

const holiday = require('../controllers/holidayController');

    // Create a new holiday
    router.post('/new-holiday',
        holiday.create
    );

    // Retrieve all holidays
    router.get(
        '/holidays',
        holiday.findAll
    );

    // Retrieve a single holiday
    router.get(
        '/holidays/:holidayId', 
        holiday.findOne);

    // Update dept with deptId
    router.put(
        '/holidays/:holidayId', 
        holiday.update
    );

    // Delete an dept with edeptId
    router.delete(
        '/holidays/:holidayId', 
        holiday.delete
    );

module.exports= router;